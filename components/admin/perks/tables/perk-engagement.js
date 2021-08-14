import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getPerkEngagements } from '../../../../shared/redux-saga/admin/actions';
import { useTable } from '../../../partials/table';
import { Table } from '../../../partials';
import { formatDate } from '../../../../shared/core/utils';

const Perks = styled.div`
  .perks-engagement-table {
    .col-1 {
      width: 34%;
    }
    .col-2 {
      width: 33%;
    }
    .col-3 {
      width: 33%;
    }
  }
`;

export const PerksEngagement = ({ id }) => {
  const dispatch = useDispatch();
  const {
    data,
    params,
    register,
    hasMore,
    appendData,
    setHasMore,
    page,
    setPage,
  } = useTable();

  const fetchPerkEngagements = (pageValue = page, paramsValue = params) => {
    dispatch(
      getPerkEngagements(
        { id, page: pageValue, ...paramsValue },
        (results, isHasMore) => {
          setHasMore(isHasMore);
          appendData(results);
          setPage(prev => prev + 1);
        }
      )
    );
  };

  useEffect(() => {
    fetchPerkEngagements();
  }, []);

  return (
    <Perks className="h-full">
      <Table
        {...register}
        className="perks-engagement-table pt-5 h-full"
        onLoadMore={fetchPerkEngagements}
        hasMore={hasMore}
        dataLength={data.length}
      >
        <Table.Header>
          <Table.HeaderCell>
            <p>User Email</p>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <p>Date First Clicked</p>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <p>Times Followed</p>
          </Table.HeaderCell>
        </Table.Header>
        <Table.Body className="padding-tracker">
          {data.map((row, ind) => (
            <Table.BodyRow key={ind}>
              <Table.BodyCell>
                <p>{row.email}</p>
              </Table.BodyCell>
              <Table.BodyCell>
                <p>{formatDate(row.created_at, 'MM/dd/yyyy')}</p>
              </Table.BodyCell>
              <Table.BodyCell>
                <p>{row.views}</p>
              </Table.BodyCell>
            </Table.BodyRow>
          ))}
        </Table.Body>
      </Table>
    </Perks>
  );
};
