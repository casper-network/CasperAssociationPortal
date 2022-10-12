import React, { useState, useEffect, useRef, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Switch from 'react-switch';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { getNodesFromAdmin } from '../../shared/redux-saga/admin/actions';
import { getNodesFromUser } from '../../shared/redux-saga/auth/actions';
import Table, { useTable } from '../partials/table';
import { getShortNodeAddress } from '../../shared/core/utils';
import { Tooltips } from '../partials';
import useMetrics from '../hooks/useMetrics';

const Styles = styled.div`
  .nodes-table {
    display: flex;
    flex-direction: column;
    .infinite-scroll-component__outerdiv {
      margin-right: 0;
    }
    .table-header {
      height: 0;
    }
    min-width: 0;
    .col {
      height: 1.5rem;
    }
    .col-1 {
      padding-left: 0.5rem;
      width: 15%;
      padding-right: 0 !important;
    }
    .col-2 {
      width: 85%;
      padding-right: 0 !important;
    }
    .custom-row {
      border: 0;
    }
  }
`;

const NodesList = ({ userInfo, isAdmin, filter, hightlightNode }) => {
  const dispatch = useDispatch();
  const {
    data,
    setParams,
    resetData,
    hasMore,
    appendData,
    setHasMore,
    page,
    register,
    params,
    setPage,
  } = useTable();
  const renderDone = useRef();

  const getNodes = (pageValue = page, paramsValue = params, limit = 20) => {
    if (isAdmin) {
      dispatch(
        getNodesFromAdmin(
          { page: pageValue, ...paramsValue, limit },
          (result, isHasMore) => {
            setHasMore(isHasMore);
            appendData(result);
            setPage(prev => prev + 1);
            renderDone.current = true;
          }
        )
      );
    } else {
      dispatch(
        getNodesFromUser(
          result => {
            setHasMore(false);
            appendData(result);
            renderDone.current = true;
          },
          () => {}
        )
      );
    }
  };

  useEffect(() => {
    const newParams = filter.node_failing ? filter : {};
    getNodes(1, newParams);
  }, []);

  useEffect(() => {
    if (renderDone.current) {
      const newParams = filter.node_failing ? filter : {};
      setParams(newParams);
      resetData();
      getNodes(1, newParams);
    }
  }, [filter.node_failing]);

  const renderClass = row => {
    if (isAdmin && row.is_fail_node) {
      return 'fail-node';
    }
    if (
      hightlightNode &&
      hightlightNode?.public_address_node === row.public_address_node
    ) {
      return 'custom-highlight';
    }
    if (
      !isAdmin &&
      (!hightlightNode || !hightlightNode.public_address_node) &&
      userInfo.public_address_node === row.public_address_node
    ) {
      return 'custom-highlight';
    }
    return '';
  };

  return (
    <Styles className="w-full h-full text-base font-thin">
      <Table
        {...register}
        className="nodes-table w-full h-full min-w-full pl-7px"
        onLoadMore={getNodes}
        hasMore={hasMore}
        dataLength={data.length}
      >
        <Table.Header>
          <Table.HeaderCell key="emptyHeader1" />
          <Table.HeaderCell key="emptyHeader2" />
        </Table.Header>
        <Table.Body>
          {data.map((row, ind) => (
            <Table.BodyRow
              key={ind}
              className={`pl-5 custom-row ${renderClass(row)}`}
            >
              <Table.BodyCell key="index">
                <p>{ind + 1}</p>
              </Table.BodyCell>
              <Table.BodyCell key="tooltips">
                {isAdmin && (
                  <Link to={`/admin/users/${row.user_id}`}>
                    <span>
                      <Tooltips
                        placement="left"
                        title={row.public_address_node}
                        arrow
                      >
                        <p className="relative h-full">
                          <span className="truncate absolute inset-0">
                            {getShortNodeAddress(row.public_address_node, 20)}
                          </span>
                        </p>
                      </Tooltips>
                    </span>
                  </Link>
                )}
                {!isAdmin && (
                  <Link to={`/dashboard/profile/${row.user_id}`}>
                    <span>
                      <Tooltips
                        placement="left"
                        title={
                          row?.blockchain_name
                            ? `${row?.blockchain_name} - ${row?.blockchain_desc}`
                            : row?.pseudonym
                        }
                        arrow
                        key="public_address"
                      >
                        <p className="relative h-full">
                          <span className="truncate absolute inset-0">
                            {getShortNodeAddress(row.public_address_node, 20)}
                          </span>
                        </p>
                      </Tooltips>
                    </span>
                  </Link>
                )}
              </Table.BodyCell>
            </Table.BodyRow>
          ))}
        </Table.Body>
      </Table>
    </Styles>
  );
};

const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const InfoRightNode = memo(({ nodesInfo, currentNode }) => {
  const userInfo = useSelector(state => state.authReducer.userInfo.fullInfo);
  const [isAdmin, setIsAdmin] = useState(null);
  const [filterFailedNodes, setFilterFailedNodes] = useState(null);
  const { metrics } = useMetrics();
  const query = useQuery();

  useEffect(() => {
    if (userInfo) {
      const isAdminTemp = ['admin', 'sub-admin'].includes(userInfo?.role);
      setIsAdmin(isAdminTemp);
      if (isAdminTemp && +query.get('node_failing') === 1) {
        setFilterFailedNodes(1);
      } else {
        setFilterFailedNodes(0);
      }
    }
  }, [userInfo]);

  return (
    <div className="bg-white">
      <div className="flex flex-col w-full h-full">
        <div className="pl-3">
          <div>
            <span className="text-lg font-normal pr-1">
              Registered Node Rankings
            </span>
            <Tooltips
              placement="top"
              title={
                <>
                  <p>
                    Ranks all nodes in the platform - based on uptime, fee,
                    responsiveness, delegator count, and stake amount, all
                    sharing equally weighted importance.
                  </p>
                  <p>
                    {!isAdmin && metrics?.rank
                      ? `Your Registered Node Ranking: ${metrics?.rank} out of ${metrics?.totalCount}`
                      : ''}
                  </p>
                </>
              }
              arrow
            >
              <img
                width="10px"
                height="10px"
                src="/images/ic_feather_info.svg"
                alt="Info"
              />
            </Tooltips>
          </div>
          {!!isAdmin && (
            <div className="flex items-center px-4">
              <span className="pr-2 text-sm">Only Failing</span>
              <Switch
                id="status"
                checked={!!filterFailedNodes}
                onChange={_check => setFilterFailedNodes(_check ? 1 : 0)}
                checkedIcon={null}
                uncheckedIcon={null}
                offColor="#bbb"
                onColor="#ff474e"
                width={30}
                height={18}
              />
            </div>
          )}
        </div>
        {isAdmin !== null && filterFailedNodes !== null && (
          <NodesList
            hightlightNode={currentNode}
            userInfo={userInfo}
            isAdmin={isAdmin}
            filter={{ node_failing: filterFailedNodes }}
          />
        )}
      </div>
    </div>
  );
});

export default InfoRightNode;
