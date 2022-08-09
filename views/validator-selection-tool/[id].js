import { useEffect, useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Head from 'next/head';
import PublicHeader from '../../components/layouts/public-header';
import { BackButton, ProgressBar } from '../../components/partials';
import {
  formatDate,
  generateTextForEras,
  numberWithCommas,
  getShortNodeAddress,
} from '../../shared/core/utils';
import { AppContext } from '../../pages/_app';
import { getPublicMemberDetail } from '../../shared/redux-saga/member-viewer/actions';
import { DEFAULT_BASE_BLOCKS } from '../../shared/core/constants';
import IconCopy from '../../public/images/ic_copy.svg';
import { useSnackBar } from '../../components/partials/snack-bar';
import IconVerified from '../../public/images/ic_check_mark.svg';
import AppFooter from '../../components/layouts/app-footer';

const StylesBasic = styled.div`
  .basic-info-table {
    width: 100%;
    tr {
      td {
        vertical-align: top;
        padding-bottom: 0.625rem;
      }
      td:nth-child(1) {
        width: 200px;
        font-weight: 500;
      }
      td:nth-child(2) {
        width: calc(100% - 200px);
      }
    }
  }
`;

const StylesAdvanced = styled.div`
  .advanced-info-table {
    width: 100%;
    tr {
      td {
        vertical-align: top;
        padding-bottom: 0.625rem;
      }
      td:nth-child(1) {
        width: 12rem;
        font-weight: 500;
      }
      td:nth-child(2) {
        width: calc(100% - 12rem);
      }
    }
  }
`;

const NodeExplorerDetail = () => {
  const { setLoading } = useContext(AppContext);
  const routerParams = useParams();
  const { id } = routerParams;
  const dispatch = useDispatch();
  const [memberInfo, setMemberInfo] = useState(null);
  const [metrics, setMetrics] = useState(null);
  const { openSnack } = useSnackBar();

  useEffect(() => {
    if (id) {
      setLoading(true);
      dispatch(
        getPublicMemberDetail(
          id,
          null,
          res => {
            setLoading(false);
            setMemberInfo(res);
            const temp = res.metric;
            let block_height =
              DEFAULT_BASE_BLOCKS -
              (temp.max_block_height_average - temp.block_height_average);
            if (block_height < 0) {
              block_height = 0;
            }
            const metricTemp = {
              ...temp,
              uptim: temp.uptime || 0,
              block_height,
              peers: temp.peers || 0,
              update_responsiveness: temp.update_responsiveness || 0,
              monitoring_criteria: temp.monitoring_criteria || null,
              average_uptime: temp.avg_uptime || 0,
              avg_update_responsiveness: temp.avg_update_responsiveness || 0,
              current_block_height:
                DEFAULT_BASE_BLOCKS - block_height > 0
                  ? DEFAULT_BASE_BLOCKS - block_height
                  : 0,
            };
            setMetrics(metricTemp);
          },
          () => {
            setLoading(false);
          }
        )
      );
    }
  }, [id]);

  const copyClipboard = () => {
    const copyText = document.getElementById('public-address');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    openSnack('primary', 'Copied Public Address!');
  };

  const renderLabel = () => {
    if (
      memberInfo &&
      memberInfo.profile &&
      memberInfo.profile.status === 'approved'
    ) {
      if (memberInfo.profile.extra_status) {
        return memberInfo.profile.extra_status;
      }
      return 'VERIFIED';
    }
    return 'Not Verified';
  };

  return (
    <>
      <Head>
        <title>Validator Selection Tool - Casper Association Portal</title>
      </Head>
      <div className="flex flex-col h-screen">
        <PublicHeader />
        <div className="flex-1 min-h-0 pt-10 mx-auto w-container bg-transparent">
          <div className="w-full border-primary border-b-2 pb-3">
            <BackButton href="/validator-selection-tool" text="Back" force />
          </div>
          <div className="flex w-full mt-10">
            <div className="w-full">
              <section className="basic-info">
                <div className="flex">
                  <div className="upload-avatar-box mr-9">
                    <label
                      htmlFor="upload-avatar"
                      className="relative overflow-hidden cursor-pointer w-32 h-32 block border border-gray shadow-md rounded-md flex justify-center items-center"
                    >
                      <div className="absolute inset-0">
                        <img
                          className="w-full h-full object-cover"
                          src={
                            memberInfo?.avatar_url ||
                            '/images/img_signature.png'
                          }
                          alt="avatar"
                        />
                      </div>
                    </label>
                  </div>
                  <div>
                    <StylesBasic>
                      <table className="basic-info-table border-0">
                        <tbody>
                          <tr>
                            <td>
                              <span>Name:</span>
                            </td>
                            <td>
                              <div className="flex items-center gap-2">
                                <span>{memberInfo?.full_name} </span>
                                {memberInfo?.profile?.status === 'approved' && (
                                  <IconVerified className="text-primary" />
                                )}
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span>Registered:</span>
                            </td>
                            <td>
                              {memberInfo?.email_verified_at ? (
                                <span>
                                  {`${formatDate(
                                    memberInfo?.email_verified_at,
                                    'dd/MM/yyyy'
                                  )}`}
                                </span>
                              ) : (
                                <span>-</span>
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span>Member Type:</span>
                            </td>
                            <td>
                              <span className="text-primary uppercase font-medium">
                                {memberInfo?.profile?.type}
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span>Membership Status:</span>
                            </td>
                            <td>
                              <span className="text-primary underline">
                                {renderLabel()}
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span>Verified Since:</span>
                            </td>
                            <td>
                              {memberInfo?.approve_at ? (
                                <span>
                                  {`${formatDate(
                                    memberInfo?.approve_at,
                                    'dd/MM/yyyy'
                                  )}`}
                                </span>
                              ) : (
                                <span>-</span>
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </StylesBasic>
                  </div>
                </div>
              </section>
              <div className="border-gray border-b lg:my-8 2xl:my-12" />
              <section className="advanced-info">
                <StylesAdvanced>
                  <table className="advanced-info-table border-0">
                    <tbody>
                      <tr>
                        <td>
                          <span>Public Node Address:</span>
                        </td>
                        <td>
                          <div className="flex items-center">
                            <span>
                              {getShortNodeAddress(
                                memberInfo?.public_address_node
                              )}
                            </span>
                            <button
                              className="ml-6"
                              type="button"
                              onClick={() => copyClipboard()}
                            >
                              <IconCopy />
                            </button>
                            <input
                              id="public-address"
                              value={memberInfo?.public_address_node || ''}
                              readOnly
                              hidden
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span>Validator Fee:</span>
                        </td>
                        <td>
                          <span>{memberInfo?.validator_fee}%</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span>Delegators:</span>
                        </td>
                        <td>
                          <span>{metrics?.delegators}</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span>Self Staked:</span>
                        </td>
                        <td>
                          <span>
                            {numberWithCommas(metrics?.self_staked_amount)}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span>Total Stake:</span>
                        </td>
                        <td>
                          <span>{numberWithCommas(metrics?.stake_amount)}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </StylesAdvanced>
                <div className="flex gap-24 w-4/5">
                  <div className="flex-1 flex flex-col lg:py-1 2xl:py-2">
                    <div className="flex flex-row">
                      <span className="text-lg">Uptime</span>
                      <img
                        className="pl-3"
                        width="10px"
                        height="10px"
                        src="/images/ic_feather_info.svg"
                        alt="Info"
                      />
                    </div>
                    <p className="text-sm text-gray lg:mb-1 2xl:mb-2">{`Average: ${
                      metrics?.avg_uptime || 0
                    }%`}</p>
                    <ProgressBar value={metrics?.uptime} mask="x%" />
                  </div>
                  <div className="flex-1 flex flex-col lg:py-1 2xl:py-2">
                    <div className="flex flex-row">
                      <span className="text-lg">Block Height</span>
                      <img
                        className="pl-3"
                        width="10px"
                        height="10px"
                        src="/images/ic_feather_info.svg"
                        alt="Info"
                      />
                    </div>
                    <p className="text-sm text-gray lg:mb-1 2xl:mb-2">
                      Current: {metrics?.blocks_behind} block behind
                    </p>
                    <ProgressBar
                      value={metrics?.block_height}
                      total={DEFAULT_BASE_BLOCKS}
                      mask="x/y"
                    />
                  </div>
                  <div className="flex-1 flex flex-col lg:py-1 2xl:py-2">
                    <div className="flex flex-row">
                      <span className="text-lg">Update Responsiveness</span>
                      <img
                        className="pl-3"
                        width="10px"
                        height="10px"
                        src="/images/ic_feather_info.svg"
                        alt="Info"
                      />
                    </div>
                    <p className="text-sm text-gray lg:mb-1 2xl:mb-2">
                      Average:{' '}
                      {generateTextForEras(metrics?.avg_update_responsiveness)}
                    </p>
                    <ProgressBar
                      value={metrics?.update_responsiveness}
                      total={metrics?.max_update_responsiveness}
                      mask=""
                      options={{
                        startText: 'Needs Improvement',
                        endText: 'Great',
                      }}
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="pb-3">
          <AppFooter />
        </div>
      </div>
    </>
  );
};

export default NodeExplorerDetail;
