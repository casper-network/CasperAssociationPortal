import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useTable } from '../../../partials/table';
import { Table } from '../../../partials';
import { formatDate } from '../../../../shared/core/utils';
import ArrowIcon from '../../../../public/images/ic_arrow_down.svg';
import { getNotificationViewLogs } from '../../../../shared/redux-saga/admin/actions';

const ViewLogs = styled.div`
  .view-logs-table {
    .col-1 {
      width: 30%;
    }
    .col-2 {
      width: 17.5%;
    }
    .col-3 {
      width: 17.5%;
    }
    .col-4 {
      width: 17.5%;
    }
    .col-5 {
      width: 17.5%;
    }
  }
`;

export const ViewLogsTable = ({ idList }) => {
  const dispatch = useDispatch();
  const [notificationId, setNotificationId] = useState(null);
  const [viewPercent, setViewPercent] = useState(null);

  const {
    data,
    setParams,
    params,
    register,
    resetData,
    hasMore,
    appendData,
    setHasMore,
    setData,
    page,
    setPage,
  } = useTable();

  const fetchViewLog = (pageValue = page, paramsValue = params) => {
    dispatch(
      getNotificationViewLogs(
        { id: notificationId, page: pageValue, ...paramsValue },
        (results, isHasMore, percent) => {
          setHasMore(isHasMore);
          appendData(results);
          setPage(prev => prev + 1);
          setViewPercent(percent);
        }
      )
    );
  };

  useEffect(() => {
    if (notificationId) {
      resetData();
      fetchViewLog(1);
    } else {
      setHasMore(false);
    }
  }, [notificationId]);

  useEffect(() => {
    if (notificationId && !idList?.includes(+notificationId)) {
      setHasMore(false);
      setData([]);
      setNotificationId('');
      setViewPercent(null);
    }
  }, [idList]);

  return (
    <ViewLogs className="h-full">
      <div className="py-2 flex justify-between" style={{ height: '50px' }}>
        <div>
          <p>Notification ID: {notificationId}</p>
          <p>
            Percent of active users who have viewed it:{' '}
            {viewPercent !== null ? `${viewPercent} %` : ''}
          </p>
        </div>
        <div className="relative w-full lg:w-1/5 h-40px mr-10 border border-gray1 c-select flex items-center relative focus:outline-none shadow-md">
          <select
            className="px-5 w-full h-full cursor-pointer"
            required
            onChange={e => {
              setNotificationId(e.target.value);
            }}
          >
            <option selected={!notificationId} value="" disabled>
              Select Notification ID
            </option>
            {idList?.map(item => (
              <option value={item}>{item}</option>
            ))}
          </select>
          <ArrowIcon className="absolute right-7" />
        </div>
      </div>
      <div style={{ height: 'calc(100% - 50px)' }}>
        <Table
          {...register}
          className="view-logs-table pt-5 h-full"
          onLoadMore={fetchViewLog}
          hasMore={hasMore}
          dataLength={data.length}
        >
          <Table.Header>
            <Table.HeaderCell>
              <p>User Email</p>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <p>First Viewed On</p>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <p>Dismissed</p>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <p>CTA Click</p>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <p>CTA Click Count</p>
            </Table.HeaderCell>
          </Table.Header>
          <Table.Body className="padding-tracker">
            {data.map((row, ind) => (
              <Table.BodyRow key={ind}>
                <Table.BodyCell>
                  <p className="truncate">{row.user?.email}</p>
                </Table.BodyCell>
                <Table.BodyCell>
                  <p>{row.first_view_at || ''}</p>
                </Table.BodyCell>
                <Table.BodyCell>
                  <p>{row.dismissed_at || ''}</p>
                </Table.BodyCell>
                <Table.BodyCell>
                  <p>{row.cta_click_at || ''}</p>
                </Table.BodyCell>
                <Table.BodyCell>
                  <p>{row.cta_click_count || 0}</p>
                </Table.BodyCell>
              </Table.BodyRow>
            ))}
          </Table.Body>
        </Table>
      </div>
    </ViewLogs>
  );
};
