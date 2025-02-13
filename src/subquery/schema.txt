export const schema = {
    "data": {
        "__schema": {
            "types": [
                {
                    "name": "Account",
                    "kind": "OBJECT",
                    "description": "Account: A higher order entity created for any addresses which interact with Superfluid contracts.\n",
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "createdAtTimestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "createdAtBlockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "updatedAtTimestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "updatedAtBlockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "isSuperApp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Boolean",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "inflows",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "outflows",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "subscriptions",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "publishedIndexes",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "pools",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "poolMemberships",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "sentTransferEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "receivedTransferEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "tokenUpgradedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "tokenDowngradedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "accountTokenSnapshots",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "AccountTokenSnapshot",
                    "kind": "OBJECT",
                    "description": "AccountTokenSnapshot: An aggregate entity which aggregates data between an `account`'s interaction with `token`.\n",
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "createdAtTimestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "createdAtBlockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "updatedAtTimestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "updatedAtBlockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "isLiquidationEstimateOptimistic",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Boolean",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "maybeCriticalAtTimestamp",
                            "type": {
                                "name": "BigInt",
                                "kind": "SCALAR",
                                "ofType": null
                            }
                        },
                        {
                            "name": "totalNumberOfActiveStreams",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalCFANumberOfActiveStreams",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalGDANumberOfActiveStreams",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "activeOutgoingStreamCount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "activeCFAOutgoingStreamCount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "activeGDAOutgoingStreamCount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "activeIncomingStreamCount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalNumberOfClosedStreams",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalCFANumberOfClosedStreams",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalGDANumberOfClosedStreams",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "inactiveOutgoingStreamCount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "inactiveCFAOutgoingStreamCount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "inactiveGDAOutgoingStreamCount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "inactiveIncomingStreamCount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalSubscriptionsWithUnits",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalApprovedSubscriptions",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalMembershipsWithUnits",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalConnectedMemberships",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "adminOfPoolCount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "balanceUntilUpdatedAt",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "balanceLastUpdatedFromRpcBlocknumber",
                            "type": {
                                "name": "BigInt",
                                "kind": "SCALAR",
                                "ofType": null
                            }
                        },
                        {
                            "name": "totalDeposit",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalCFADeposit",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalGDADeposit",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalNetFlowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalCFANetFlowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalInflowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalOutflowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalCFAOutflowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalGDAOutflowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalAmountStreamedInUntilUpdatedAt",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalAmountStreamedOutUntilUpdatedAt",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalCFAAmountStreamedOutUntilUpdatedAt",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalAmountStreamedUntilUpdatedAt",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalCFAAmountStreamedUntilUpdatedAt",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalAmountTransferredUntilUpdatedAt",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "account",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Account",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Token",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "flowOperators",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "accountTokenSnapshotLogs",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "AccountTokenSnapshotLog",
                    "kind": "OBJECT",
                    "description": "AccountTokenSnapshotLog: Historical entries of `AccountTokenSnapshot` updates.\n",
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "triggeredByEventName",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "maybeCriticalAtTimestamp",
                            "type": {
                                "name": "BigInt",
                                "kind": "SCALAR",
                                "ofType": null
                            }
                        },
                        {
                            "name": "totalNumberOfActiveStreams",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalCFANumberOfActiveStreams",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalGDANumberOfActiveStreams",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "activeOutgoingStreamCount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "activeCFAOutgoingStreamCount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "activeGDAOutgoingStreamCount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "activeIncomingStreamCount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalNumberOfClosedStreams",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalCFANumberOfClosedStreams",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalGDANumberOfClosedStreams",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "inactiveOutgoingStreamCount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "inactiveCFAOutgoingStreamCount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "inactiveGDAOutgoingStreamCount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "inactiveIncomingStreamCount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalSubscriptionsWithUnits",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalApprovedSubscriptions",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalMembershipsWithUnits",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalConnectedMemberships",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "balance",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalDeposit",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalCFADeposit",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalGDADeposit",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalNetFlowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalCFANetFlowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalInflowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalOutflowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalCFAOutflowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalGDAOutflowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalAmountStreamedIn",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalAmountStreamedOut",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalCFAAmountStreamedOut",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalAmountStreamed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalCFAAmountStreamed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalAmountTransferred",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "account",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Account",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Token",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "accountTokenSnapshot",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "AccountTokenSnapshot",
                                    "kind": "OBJECT"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "AccountTokenSnapshotLog_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "AccountTokenSnapshotLog_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "AccountTokenSnapshot_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "AccountTokenSnapshot_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "Account_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "Account_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "Aggregation_interval",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "AgreementClassRegisteredEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "agreementType",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "code",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "AgreementClassRegisteredEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "AgreementClassRegisteredEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "AgreementClassUpdatedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "agreementType",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "code",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "AgreementClassUpdatedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "AgreementClassUpdatedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "AgreementLiquidatedByEvent",
                    "kind": "OBJECT",
                    "description": "NOTE: This event was deprecated since the introduction of the 3Ps system.\nReplaced by: `AgreementLiquidatedV2Event`\nSee: https://docs.superfluid.finance/superfluid/sentinels/liquidations-and-toga#patricians-plebs-and-pirates-3ps for more details on the 3Ps system.\nSee: https://github.com/superfluid-finance/protocol-monorepo/blob/dev/packages/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluidToken.sol#L425 for more details on the events.\n",
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "liquidatorAccount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "agreementClass",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "agreementId",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "penaltyAccount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "bondAccount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "rewardAmount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "bailoutAmount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "deposit",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "flowRateAtLiquidation",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "AgreementLiquidatedByEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "AgreementLiquidatedByEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "AgreementLiquidatedV2Event",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "agreementClass",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "agreementId",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "liquidatorAccount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "targetAccount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "rewardAmountReceiver",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "rewardAmount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "targetAccountBalanceDelta",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "version",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "liquidationType",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "deposit",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "flowRateAtLiquidation",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "rewardAccount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "AgreementLiquidatedV2Event_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "AgreementLiquidatedV2Event_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "AppRegisteredEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "app",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "AppRegisteredEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "AppRegisteredEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "ApprovalEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "owner",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Account",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "to",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Account",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "amount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "ApprovalEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "ApprovalEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "BigDecimal",
                    "kind": "SCALAR",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "BigInt",
                    "kind": "SCALAR",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "BlockChangedFilter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "Block_height",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "BondIncreasedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "additionalBond",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "BondIncreasedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "BondIncreasedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "Boolean",
                    "kind": "SCALAR",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "BufferAdjustedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "bufferDelta",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "newBufferAmount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalBufferAmount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "pool",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Pool",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "poolDistributor",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "PoolDistributor",
                                    "kind": "OBJECT"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "BufferAdjustedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "BufferAdjustedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "BurnedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "operator",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "from",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "amount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "data",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "operatorData",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "BurnedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "BurnedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "Bytes",
                    "kind": "SCALAR",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "CFAv1LiquidationPeriodChangedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "governanceAddress",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "host",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "superToken",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "isKeySet",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Boolean",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "liquidationPeriod",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "CFAv1LiquidationPeriodChangedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "CFAv1LiquidationPeriodChangedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "ConfigChangedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "governanceAddress",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "host",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "superToken",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "key",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "isKeySet",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Boolean",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "value",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "ConfigChangedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "ConfigChangedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "CustomSuperTokenCreatedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "CustomSuperTokenCreatedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "CustomSuperTokenCreatedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "DistributionClaimedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "claimedAmount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalClaimed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "pool",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Pool",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "poolMember",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "PoolMember",
                                    "kind": "OBJECT"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "DistributionClaimedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "DistributionClaimedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "Event",
                    "kind": "INTERFACE",
                    "description": "Event: An interface which is shared by all event entities and contains basic transaction data.\n",
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "Event_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "Event_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "ExitRateChangedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "exitRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "ExitRateChangedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "ExitRateChangedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "Float",
                    "kind": "SCALAR",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "FlowDistributionUpdatedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "operator",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "oldFlowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "newDistributorToPoolFlowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "newTotalDistributionFlowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "adjustmentFlowRecipient",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "adjustmentFlowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalUnits",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "userData",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "pool",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Pool",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "poolDistributor",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "PoolDistributor",
                                    "kind": "OBJECT"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "FlowDistributionUpdatedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "FlowDistributionUpdatedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "FlowOperator",
                    "kind": "OBJECT",
                    "description": "FlowOperator: A higher order entity that of a flow operator for an `AccountTokenSnapshot`.\n",
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "createdAtTimestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "createdAtBlockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "updatedAtTimestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "updatedAtBlockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "permissions",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "flowRateAllowanceGranted",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "flowRateAllowanceRemaining",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "allowance",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "flowOperator",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "sender",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Account",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Token",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "accountTokenSnapshot",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "AccountTokenSnapshot",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "flowOperatorUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "FlowOperatorUpdatedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "sender",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "permissions",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "flowRateAllowance",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "flowOperator",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "FlowOperator",
                                    "kind": "OBJECT"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "FlowOperatorUpdatedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "FlowOperatorUpdatedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "FlowOperator_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "FlowOperator_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "FlowUpdatedEvent",
                    "kind": "OBJECT",
                    "description": "FlowUpdated: An `Event` entity that is emitted\nwhen a flow is created, updated, or deleted.\n",
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "sender",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "receiver",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "flowOperator",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "flowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalSenderFlowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalReceiverFlowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "deposit",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "userData",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "oldFlowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "type",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalAmountStreamedUntilTimestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "stream",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Stream",
                                    "kind": "OBJECT"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "FlowUpdatedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "FlowUpdatedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "GovernanceReplacedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "oldGovernance",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "newGovernance",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "GovernanceReplacedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "GovernanceReplacedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "ID",
                    "kind": "SCALAR",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "Index",
                    "kind": "OBJECT",
                    "description": "Index: An Index higher order entity.\n",
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "createdAtTimestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "createdAtBlockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "updatedAtTimestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "updatedAtBlockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "indexId",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "indexValue",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalSubscriptionsWithUnits",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalUnitsPending",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalUnitsApproved",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalUnits",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalAmountDistributedUntilUpdatedAt",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Token",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "publisher",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Account",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "subscriptions",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "indexCreatedEvent",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "IndexCreatedEvent",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "indexDistributionClaimedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "indexUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "indexSubscribedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "indexUnitsUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "indexUnsubscribedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "IndexCreatedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "publisher",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "indexId",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "userData",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "index",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Index",
                                    "kind": "OBJECT"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "IndexCreatedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "IndexCreatedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "IndexDistributionClaimedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "publisher",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "indexId",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "subscriber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "amount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "index",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Index",
                                    "kind": "OBJECT"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "IndexDistributionClaimedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "IndexDistributionClaimedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "IndexSubscribedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "publisher",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "indexId",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "subscriber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "userData",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "index",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Index",
                                    "kind": "OBJECT"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "IndexSubscribedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "IndexSubscribedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "IndexSubscription",
                    "kind": "OBJECT",
                    "description": "IndexSubscription: A higher order entity that contains subscription data for a `subscriber` account of a particular `Index`.\n",
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "createdAtTimestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "createdAtBlockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "updatedAtTimestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "updatedAtBlockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "subscriber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Account",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "approved",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Boolean",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "units",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalAmountReceivedUntilUpdatedAt",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "indexValueUntilUpdatedAt",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "index",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Index",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "subscriptionApprovedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "subscriptionDistributionClaimedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "subscriptionRevokedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "subscriptionUnitsUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "IndexSubscription_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "IndexSubscription_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "IndexUnitsUpdatedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "publisher",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "indexId",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "subscriber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "units",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "userData",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "oldUnits",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "index",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Index",
                                    "kind": "OBJECT"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "IndexUnitsUpdatedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "IndexUnitsUpdatedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "IndexUnsubscribedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "publisher",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "indexId",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "subscriber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "userData",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "index",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Index",
                                    "kind": "OBJECT"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "IndexUnsubscribedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "IndexUnsubscribedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "IndexUpdatedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "publisher",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "indexId",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "oldIndexValue",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "newIndexValue",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalUnitsPending",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalUnitsApproved",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "userData",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "index",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Index",
                                    "kind": "OBJECT"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "IndexUpdatedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "IndexUpdatedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "Index_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "Index_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "InstantDistributionUpdatedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "operator",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "requestedAmount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "actualAmount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalUnits",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "userData",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "pool",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Pool",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "poolDistributor",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "PoolDistributor",
                                    "kind": "OBJECT"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "InstantDistributionUpdatedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "InstantDistributionUpdatedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "Int",
                    "kind": "SCALAR",
                    "description": "4 bytes signed integer\n",
                    "fields": null
                },
                {
                    "name": "Int8",
                    "kind": "SCALAR",
                    "description": "8 bytes signed integer\n",
                    "fields": null
                },
                {
                    "name": "JailEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "app",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "reason",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "JailEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "JailEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "MemberUnitsUpdatedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "oldUnits",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "units",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalUnits",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "pool",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Pool",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "poolMember",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "PoolMember",
                                    "kind": "OBJECT"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "MemberUnitsUpdatedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "MemberUnitsUpdatedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "MintedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "operator",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "to",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "amount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "data",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "operatorData",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "MintedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "MintedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "NewPICEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "pic",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "bond",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "exitRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "NewPICEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "NewPICEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "OrderDirection",
                    "kind": "ENUM",
                    "description": "Defines the order direction, either ascending or descending",
                    "fields": null
                },
                {
                    "name": "PPPConfigurationChangedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "governanceAddress",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "host",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "superToken",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "isKeySet",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Boolean",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "liquidationPeriod",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "patricianPeriod",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "PPPConfigurationChangedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "PPPConfigurationChangedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "Pool",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "createdAtTimestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "createdAtBlockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "updatedAtTimestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "updatedAtBlockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalUnits",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalConnectedUnits",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalDisconnectedUnits",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalAmountInstantlyDistributedUntilUpdatedAt",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalAmountFlowedDistributedUntilUpdatedAt",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalAmountDistributedUntilUpdatedAt",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalFlowAdjustmentAmountDistributedUntilUpdatedAt",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "perUnitSettledValue",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "perUnitFlowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalMembers",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalConnectedMembers",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalDisconnectedMembers",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "adjustmentFlowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "flowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalBuffer",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Token",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "admin",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Account",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "poolDistributors",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "poolMembers",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "poolCreatedEvent",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "PoolCreatedEvent",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "poolConnectionUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "bufferAdjustedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "instantDistributionUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "flowDistributionUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "memberUnitsUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "distributionClaimedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "PoolConnectionUpdatedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "connected",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Boolean",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "userData",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "pool",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Pool",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "poolMember",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "PoolMember",
                                    "kind": "OBJECT"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "PoolConnectionUpdatedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "PoolConnectionUpdatedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "PoolCreatedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "caller",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "admin",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "pool",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Pool",
                                    "kind": "OBJECT"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "PoolCreatedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "PoolCreatedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "PoolDistributor",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "createdAtTimestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "createdAtBlockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "updatedAtTimestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "updatedAtBlockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalAmountInstantlyDistributedUntilUpdatedAt",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalAmountFlowedDistributedUntilUpdatedAt",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalAmountDistributedUntilUpdatedAt",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalBuffer",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "flowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "account",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Account",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "pool",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Pool",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "bufferAdjustedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "instantDistributionUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "flowDistributionUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "PoolDistributor_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "PoolDistributor_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "PoolMember",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "createdAtTimestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "createdAtBlockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "updatedAtTimestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "updatedAtBlockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "units",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "isConnected",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Boolean",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalAmountClaimed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "poolTotalAmountDistributedUntilUpdatedAt",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalAmountReceivedUntilUpdatedAt",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "syncedPerUnitSettledValue",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "syncedPerUnitFlowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "account",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Account",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "pool",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Pool",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "poolConnectionUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "memberUnitsUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "distributionClaimedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "PoolMember_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "PoolMember_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "Pool_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "Pool_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "Query",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "flowUpdatedEvent",
                            "type": {
                                "name": "FlowUpdatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "flowUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "flowOperatorUpdatedEvent",
                            "type": {
                                "name": "FlowOperatorUpdatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "flowOperatorUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "indexCreatedEvent",
                            "type": {
                                "name": "IndexCreatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "indexCreatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "indexDistributionClaimedEvent",
                            "type": {
                                "name": "IndexDistributionClaimedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "indexDistributionClaimedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "indexUpdatedEvent",
                            "type": {
                                "name": "IndexUpdatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "indexUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "indexSubscribedEvent",
                            "type": {
                                "name": "IndexSubscribedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "indexSubscribedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "indexUnitsUpdatedEvent",
                            "type": {
                                "name": "IndexUnitsUpdatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "indexUnitsUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "indexUnsubscribedEvent",
                            "type": {
                                "name": "IndexUnsubscribedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "indexUnsubscribedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "subscriptionApprovedEvent",
                            "type": {
                                "name": "SubscriptionApprovedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "subscriptionApprovedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "subscriptionDistributionClaimedEvent",
                            "type": {
                                "name": "SubscriptionDistributionClaimedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "subscriptionDistributionClaimedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "subscriptionRevokedEvent",
                            "type": {
                                "name": "SubscriptionRevokedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "subscriptionRevokedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "subscriptionUnitsUpdatedEvent",
                            "type": {
                                "name": "SubscriptionUnitsUpdatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "subscriptionUnitsUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "poolCreatedEvent",
                            "type": {
                                "name": "PoolCreatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "poolCreatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "poolConnectionUpdatedEvent",
                            "type": {
                                "name": "PoolConnectionUpdatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "poolConnectionUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "bufferAdjustedEvent",
                            "type": {
                                "name": "BufferAdjustedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "bufferAdjustedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "instantDistributionUpdatedEvent",
                            "type": {
                                "name": "InstantDistributionUpdatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "instantDistributionUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "flowDistributionUpdatedEvent",
                            "type": {
                                "name": "FlowDistributionUpdatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "flowDistributionUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "distributionClaimedEvent",
                            "type": {
                                "name": "DistributionClaimedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "distributionClaimedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "memberUnitsUpdatedEvent",
                            "type": {
                                "name": "MemberUnitsUpdatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "memberUnitsUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "agreementClassRegisteredEvent",
                            "type": {
                                "name": "AgreementClassRegisteredEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "agreementClassRegisteredEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "agreementClassUpdatedEvent",
                            "type": {
                                "name": "AgreementClassUpdatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "agreementClassUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "appRegisteredEvent",
                            "type": {
                                "name": "AppRegisteredEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "appRegisteredEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "governanceReplacedEvent",
                            "type": {
                                "name": "GovernanceReplacedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "governanceReplacedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "jailEvent",
                            "type": {
                                "name": "JailEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "jailEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "superTokenFactoryUpdatedEvent",
                            "type": {
                                "name": "SuperTokenFactoryUpdatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "superTokenFactoryUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "superTokenLogicUpdatedEvent",
                            "type": {
                                "name": "SuperTokenLogicUpdatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "superTokenLogicUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "roleAdminChangedEvent",
                            "type": {
                                "name": "RoleAdminChangedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "roleAdminChangedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "roleGrantedEvent",
                            "type": {
                                "name": "RoleGrantedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "roleGrantedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "roleRevokedEvent",
                            "type": {
                                "name": "RoleRevokedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "roleRevokedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "setEvent",
                            "type": {
                                "name": "SetEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "setEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "cfav1LiquidationPeriodChangedEvent",
                            "type": {
                                "name": "CFAv1LiquidationPeriodChangedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "cfav1LiquidationPeriodChangedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "configChangedEvent",
                            "type": {
                                "name": "ConfigChangedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "configChangedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "rewardAddressChangedEvent",
                            "type": {
                                "name": "RewardAddressChangedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "rewardAddressChangedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "pppconfigurationChangedEvent",
                            "type": {
                                "name": "PPPConfigurationChangedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "pppconfigurationChangedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "superTokenMinimumDepositChangedEvent",
                            "type": {
                                "name": "SuperTokenMinimumDepositChangedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "superTokenMinimumDepositChangedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "trustedForwarderChangedEvent",
                            "type": {
                                "name": "TrustedForwarderChangedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "trustedForwarderChangedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "agreementLiquidatedByEvent",
                            "type": {
                                "name": "AgreementLiquidatedByEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "agreementLiquidatedByEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "agreementLiquidatedV2Event",
                            "type": {
                                "name": "AgreementLiquidatedV2Event",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "agreementLiquidatedV2Events",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "burnedEvent",
                            "type": {
                                "name": "BurnedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "burnedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "mintedEvent",
                            "type": {
                                "name": "MintedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "mintedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "sentEvent",
                            "type": {
                                "name": "SentEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "sentEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "transferEvent",
                            "type": {
                                "name": "TransferEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "transferEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "tokenDowngradedEvent",
                            "type": {
                                "name": "TokenDowngradedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "tokenDowngradedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "tokenUpgradedEvent",
                            "type": {
                                "name": "TokenUpgradedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "tokenUpgradedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "approvalEvent",
                            "type": {
                                "name": "ApprovalEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "approvalEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "customSuperTokenCreatedEvent",
                            "type": {
                                "name": "CustomSuperTokenCreatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "customSuperTokenCreatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "superTokenCreatedEvent",
                            "type": {
                                "name": "SuperTokenCreatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "superTokenCreatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "superTokenLogicCreatedEvent",
                            "type": {
                                "name": "SuperTokenLogicCreatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "superTokenLogicCreatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "newPICEvent",
                            "type": {
                                "name": "NewPICEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "newPICEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "exitRateChangedEvent",
                            "type": {
                                "name": "ExitRateChangedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "exitRateChangedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "bondIncreasedEvent",
                            "type": {
                                "name": "BondIncreasedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "bondIncreasedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "account",
                            "type": {
                                "name": "Account",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "accounts",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "pool",
                            "type": {
                                "name": "Pool",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "pools",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "poolMember",
                            "type": {
                                "name": "PoolMember",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "poolMembers",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "poolDistributor",
                            "type": {
                                "name": "PoolDistributor",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "poolDistributors",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "index",
                            "type": {
                                "name": "Index",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "indexes",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "indexSubscription",
                            "type": {
                                "name": "IndexSubscription",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "indexSubscriptions",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "stream",
                            "type": {
                                "name": "Stream",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "streams",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "flowOperator",
                            "type": {
                                "name": "FlowOperator",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "flowOperators",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "streamPeriod",
                            "type": {
                                "name": "StreamPeriod",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "streamPeriods",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "tokenGovernanceConfig",
                            "type": {
                                "name": "TokenGovernanceConfig",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "tokenGovernanceConfigs",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "streamRevision",
                            "type": {
                                "name": "StreamRevision",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "streamRevisions",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": "Token",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "tokens",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "resolverEntry",
                            "type": {
                                "name": "ResolverEntry",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "resolverEntries",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "accountTokenSnapshot",
                            "type": {
                                "name": "AccountTokenSnapshot",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "accountTokenSnapshots",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "accountTokenSnapshotLog",
                            "type": {
                                "name": "AccountTokenSnapshotLog",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "accountTokenSnapshotLogs",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "tokenStatistic",
                            "type": {
                                "name": "TokenStatistic",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "tokenStatistics",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "tokenStatisticLog",
                            "type": {
                                "name": "TokenStatisticLog",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "tokenStatisticLogs",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "sfmeta",
                            "type": {
                                "name": "SFMeta",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "sfmetas",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "event",
                            "type": {
                                "name": "Event",
                                "kind": "INTERFACE",
                                "ofType": null
                            }
                        },
                        {
                            "name": "events",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "_meta",
                            "type": {
                                "name": "_Meta_",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        }
                    ]
                },
                {
                    "name": "ResolverEntry",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "createdAtTimestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "createdAtBlockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "updatedAtTimestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "updatedAtBlockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "targetAddress",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "isToken",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Boolean",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "isListed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Boolean",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "setEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "ResolverEntry_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "ResolverEntry_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "RewardAddressChangedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "governanceAddress",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "host",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "superToken",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "isKeySet",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Boolean",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "rewardAddress",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "RewardAddressChangedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "RewardAddressChangedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "RoleAdminChangedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "role",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "previousAdminRole",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "newAdminRole",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "RoleAdminChangedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "RoleAdminChangedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "RoleGrantedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "role",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "account",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "sender",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "RoleGrantedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "RoleGrantedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "RoleRevokedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "role",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "account",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "sender",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "RoleRevokedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "RoleRevokedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "SFMeta",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "configuration",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "branch",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "packageVersion",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "SFMeta_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "SFMeta_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "SentEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "operator",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "from",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "to",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "amount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "data",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "operatorData",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "SentEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "SentEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "SetEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "hashedName",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "target",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "resolverEntry",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ResolverEntry",
                                    "kind": "OBJECT"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "SetEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "SetEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "Stream",
                    "kind": "OBJECT",
                    "description": "Stream: A higher order entity that represents the lifetime of a stream between a `sender` and a `receiver`.\nA account can start a stream, update the flow rate, but when they close it, it is considered \"dead\".\nThe next stream you create with the same `sender` and `receiver` will create a new stream entity.\nTherefore, multiple stream entities can be created between the same `sender` and `receiver`.\n",
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "createdAtTimestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "createdAtBlockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "updatedAtTimestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "updatedAtBlockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "currentFlowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "deposit",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "streamedUntilUpdatedAt",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Token",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "sender",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Account",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "receiver",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Account",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "userData",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "flowUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "streamPeriods",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "StreamPeriod",
                    "kind": "OBJECT",
                    "description": "StreamPeriod: A higher order entity that represents a period of time in a Stream with a constant flowRate.\n",
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "stream",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Stream",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "sender",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Account",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "receiver",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Account",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Token",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "flowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "deposit",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "startedAtTimestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "startedAtBlockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "startedAtEvent",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "FlowUpdatedEvent",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "stoppedAtTimestamp",
                            "type": {
                                "name": "BigInt",
                                "kind": "SCALAR",
                                "ofType": null
                            }
                        },
                        {
                            "name": "stoppedAtBlockNumber",
                            "type": {
                                "name": "BigInt",
                                "kind": "SCALAR",
                                "ofType": null
                            }
                        },
                        {
                            "name": "stoppedAtEvent",
                            "type": {
                                "name": "FlowUpdatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "totalAmountStreamed",
                            "type": {
                                "name": "BigInt",
                                "kind": "SCALAR",
                                "ofType": null
                            }
                        }
                    ]
                },
                {
                    "name": "StreamPeriod_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "StreamPeriod_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "StreamRevision",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "revisionIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "periodRevisionIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "mostRecentStream",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Stream",
                                    "kind": "OBJECT"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "StreamRevision_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "StreamRevision_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "Stream_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "Stream_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "String",
                    "kind": "SCALAR",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "Subscription",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "flowUpdatedEvent",
                            "type": {
                                "name": "FlowUpdatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "flowUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "flowOperatorUpdatedEvent",
                            "type": {
                                "name": "FlowOperatorUpdatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "flowOperatorUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "indexCreatedEvent",
                            "type": {
                                "name": "IndexCreatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "indexCreatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "indexDistributionClaimedEvent",
                            "type": {
                                "name": "IndexDistributionClaimedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "indexDistributionClaimedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "indexUpdatedEvent",
                            "type": {
                                "name": "IndexUpdatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "indexUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "indexSubscribedEvent",
                            "type": {
                                "name": "IndexSubscribedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "indexSubscribedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "indexUnitsUpdatedEvent",
                            "type": {
                                "name": "IndexUnitsUpdatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "indexUnitsUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "indexUnsubscribedEvent",
                            "type": {
                                "name": "IndexUnsubscribedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "indexUnsubscribedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "subscriptionApprovedEvent",
                            "type": {
                                "name": "SubscriptionApprovedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "subscriptionApprovedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "subscriptionDistributionClaimedEvent",
                            "type": {
                                "name": "SubscriptionDistributionClaimedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "subscriptionDistributionClaimedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "subscriptionRevokedEvent",
                            "type": {
                                "name": "SubscriptionRevokedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "subscriptionRevokedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "subscriptionUnitsUpdatedEvent",
                            "type": {
                                "name": "SubscriptionUnitsUpdatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "subscriptionUnitsUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "poolCreatedEvent",
                            "type": {
                                "name": "PoolCreatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "poolCreatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "poolConnectionUpdatedEvent",
                            "type": {
                                "name": "PoolConnectionUpdatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "poolConnectionUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "bufferAdjustedEvent",
                            "type": {
                                "name": "BufferAdjustedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "bufferAdjustedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "instantDistributionUpdatedEvent",
                            "type": {
                                "name": "InstantDistributionUpdatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "instantDistributionUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "flowDistributionUpdatedEvent",
                            "type": {
                                "name": "FlowDistributionUpdatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "flowDistributionUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "distributionClaimedEvent",
                            "type": {
                                "name": "DistributionClaimedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "distributionClaimedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "memberUnitsUpdatedEvent",
                            "type": {
                                "name": "MemberUnitsUpdatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "memberUnitsUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "agreementClassRegisteredEvent",
                            "type": {
                                "name": "AgreementClassRegisteredEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "agreementClassRegisteredEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "agreementClassUpdatedEvent",
                            "type": {
                                "name": "AgreementClassUpdatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "agreementClassUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "appRegisteredEvent",
                            "type": {
                                "name": "AppRegisteredEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "appRegisteredEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "governanceReplacedEvent",
                            "type": {
                                "name": "GovernanceReplacedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "governanceReplacedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "jailEvent",
                            "type": {
                                "name": "JailEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "jailEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "superTokenFactoryUpdatedEvent",
                            "type": {
                                "name": "SuperTokenFactoryUpdatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "superTokenFactoryUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "superTokenLogicUpdatedEvent",
                            "type": {
                                "name": "SuperTokenLogicUpdatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "superTokenLogicUpdatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "roleAdminChangedEvent",
                            "type": {
                                "name": "RoleAdminChangedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "roleAdminChangedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "roleGrantedEvent",
                            "type": {
                                "name": "RoleGrantedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "roleGrantedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "roleRevokedEvent",
                            "type": {
                                "name": "RoleRevokedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "roleRevokedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "setEvent",
                            "type": {
                                "name": "SetEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "setEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "cfav1LiquidationPeriodChangedEvent",
                            "type": {
                                "name": "CFAv1LiquidationPeriodChangedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "cfav1LiquidationPeriodChangedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "configChangedEvent",
                            "type": {
                                "name": "ConfigChangedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "configChangedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "rewardAddressChangedEvent",
                            "type": {
                                "name": "RewardAddressChangedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "rewardAddressChangedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "pppconfigurationChangedEvent",
                            "type": {
                                "name": "PPPConfigurationChangedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "pppconfigurationChangedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "superTokenMinimumDepositChangedEvent",
                            "type": {
                                "name": "SuperTokenMinimumDepositChangedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "superTokenMinimumDepositChangedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "trustedForwarderChangedEvent",
                            "type": {
                                "name": "TrustedForwarderChangedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "trustedForwarderChangedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "agreementLiquidatedByEvent",
                            "type": {
                                "name": "AgreementLiquidatedByEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "agreementLiquidatedByEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "agreementLiquidatedV2Event",
                            "type": {
                                "name": "AgreementLiquidatedV2Event",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "agreementLiquidatedV2Events",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "burnedEvent",
                            "type": {
                                "name": "BurnedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "burnedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "mintedEvent",
                            "type": {
                                "name": "MintedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "mintedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "sentEvent",
                            "type": {
                                "name": "SentEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "sentEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "transferEvent",
                            "type": {
                                "name": "TransferEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "transferEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "tokenDowngradedEvent",
                            "type": {
                                "name": "TokenDowngradedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "tokenDowngradedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "tokenUpgradedEvent",
                            "type": {
                                "name": "TokenUpgradedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "tokenUpgradedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "approvalEvent",
                            "type": {
                                "name": "ApprovalEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "approvalEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "customSuperTokenCreatedEvent",
                            "type": {
                                "name": "CustomSuperTokenCreatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "customSuperTokenCreatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "superTokenCreatedEvent",
                            "type": {
                                "name": "SuperTokenCreatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "superTokenCreatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "superTokenLogicCreatedEvent",
                            "type": {
                                "name": "SuperTokenLogicCreatedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "superTokenLogicCreatedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "newPICEvent",
                            "type": {
                                "name": "NewPICEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "newPICEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "exitRateChangedEvent",
                            "type": {
                                "name": "ExitRateChangedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "exitRateChangedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "bondIncreasedEvent",
                            "type": {
                                "name": "BondIncreasedEvent",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "bondIncreasedEvents",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "account",
                            "type": {
                                "name": "Account",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "accounts",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "pool",
                            "type": {
                                "name": "Pool",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "pools",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "poolMember",
                            "type": {
                                "name": "PoolMember",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "poolMembers",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "poolDistributor",
                            "type": {
                                "name": "PoolDistributor",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "poolDistributors",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "index",
                            "type": {
                                "name": "Index",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "indexes",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "indexSubscription",
                            "type": {
                                "name": "IndexSubscription",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "indexSubscriptions",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "stream",
                            "type": {
                                "name": "Stream",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "streams",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "flowOperator",
                            "type": {
                                "name": "FlowOperator",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "flowOperators",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "streamPeriod",
                            "type": {
                                "name": "StreamPeriod",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "streamPeriods",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "tokenGovernanceConfig",
                            "type": {
                                "name": "TokenGovernanceConfig",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "tokenGovernanceConfigs",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "streamRevision",
                            "type": {
                                "name": "StreamRevision",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "streamRevisions",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": "Token",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "tokens",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "resolverEntry",
                            "type": {
                                "name": "ResolverEntry",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "resolverEntries",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "accountTokenSnapshot",
                            "type": {
                                "name": "AccountTokenSnapshot",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "accountTokenSnapshots",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "accountTokenSnapshotLog",
                            "type": {
                                "name": "AccountTokenSnapshotLog",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "accountTokenSnapshotLogs",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "tokenStatistic",
                            "type": {
                                "name": "TokenStatistic",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "tokenStatistics",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "tokenStatisticLog",
                            "type": {
                                "name": "TokenStatisticLog",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "tokenStatisticLogs",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "sfmeta",
                            "type": {
                                "name": "SFMeta",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "sfmetas",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "event",
                            "type": {
                                "name": "Event",
                                "kind": "INTERFACE",
                                "ofType": null
                            }
                        },
                        {
                            "name": "events",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "_meta",
                            "type": {
                                "name": "_Meta_",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        }
                    ]
                },
                {
                    "name": "SubscriptionApprovedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "subscriber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "publisher",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "indexId",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "userData",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "subscription",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "IndexSubscription",
                                    "kind": "OBJECT"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "SubscriptionApprovedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "SubscriptionApprovedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "SubscriptionDistributionClaimedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "subscriber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "publisher",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "indexId",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "amount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "subscription",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "IndexSubscription",
                                    "kind": "OBJECT"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "SubscriptionDistributionClaimedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "SubscriptionDistributionClaimedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "SubscriptionRevokedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "subscriber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "publisher",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "indexId",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "userData",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "subscription",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "IndexSubscription",
                                    "kind": "OBJECT"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "SubscriptionRevokedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "SubscriptionRevokedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "SubscriptionUnitsUpdatedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "subscriber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "publisher",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "indexId",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "units",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "userData",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "oldUnits",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "subscription",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "IndexSubscription",
                                    "kind": "OBJECT"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "SubscriptionUnitsUpdatedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "SubscriptionUnitsUpdatedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "SuperTokenCreatedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "SuperTokenCreatedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "SuperTokenCreatedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "SuperTokenFactoryUpdatedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "newFactory",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "SuperTokenFactoryUpdatedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "SuperTokenFactoryUpdatedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "SuperTokenLogicCreatedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "tokenLogic",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "SuperTokenLogicCreatedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "SuperTokenLogicCreatedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "SuperTokenLogicUpdatedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "code",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "SuperTokenLogicUpdatedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "SuperTokenLogicUpdatedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "SuperTokenMinimumDepositChangedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "governanceAddress",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "host",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "superToken",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "isKeySet",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Boolean",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "minimumDeposit",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "SuperTokenMinimumDepositChangedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "SuperTokenMinimumDepositChangedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "Timestamp",
                    "kind": "SCALAR",
                    "description": "A string representation of microseconds UNIX timestamp (16 digits)\n",
                    "fields": null
                },
                {
                    "name": "Token",
                    "kind": "OBJECT",
                    "description": "Token: A higher order entity created for super tokens (and underlying tokens) that are \"valid\" (tokens that have Superfluid's host contract address set as the host).\n",
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "createdAtTimestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "createdAtBlockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "decimals",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "symbol",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "isSuperToken",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Boolean",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "isNativeAssetSuperToken",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Boolean",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "isListed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Boolean",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "underlyingAddress",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "underlyingToken",
                            "type": {
                                "name": "Token",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        },
                        {
                            "name": "governanceConfig",
                            "type": {
                                "name": "TokenGovernanceConfig",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        }
                    ]
                },
                {
                    "name": "TokenDowngradedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "account",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Account",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "amount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "TokenDowngradedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "TokenDowngradedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "TokenGovernanceConfig",
                    "kind": "OBJECT",
                    "description": "TokenGovernanceConfig: A higher order entity that represents the governance configs for a token.\nIf `id` is `address(0)`, it will be used as the default config.\n",
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "createdAtTimestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "createdAtBlockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "updatedAtTimestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "updatedAtBlockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "isDefault",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Boolean",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "rewardAddress",
                            "type": {
                                "name": "Bytes",
                                "kind": "SCALAR",
                                "ofType": null
                            }
                        },
                        {
                            "name": "liquidationPeriod",
                            "type": {
                                "name": "BigInt",
                                "kind": "SCALAR",
                                "ofType": null
                            }
                        },
                        {
                            "name": "patricianPeriod",
                            "type": {
                                "name": "BigInt",
                                "kind": "SCALAR",
                                "ofType": null
                            }
                        },
                        {
                            "name": "minimumDeposit",
                            "type": {
                                "name": "BigInt",
                                "kind": "SCALAR",
                                "ofType": null
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": "Token",
                                "kind": "OBJECT",
                                "ofType": null
                            }
                        }
                    ]
                },
                {
                    "name": "TokenGovernanceConfig_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "TokenGovernanceConfig_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "TokenStatistic",
                    "kind": "OBJECT",
                    "description": "TokenStatistic: An aggregate entity which contains aggregate data for `token`.\n",
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "updatedAtTimestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "updatedAtBlockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalNumberOfActiveStreams",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalCFANumberOfActiveStreams",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalGDANumberOfActiveStreams",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalNumberOfClosedStreams",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalCFANumberOfClosedStreams",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalGDANumberOfClosedStreams",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalNumberOfIndexes",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalNumberOfActiveIndexes",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalSubscriptionsWithUnits",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalApprovedSubscriptions",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalNumberOfPools",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalNumberOfActivePools",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalMembershipsWithUnits",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalConnectedMemberships",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalDeposit",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalCFADeposit",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalGDADeposit",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalOutflowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalCFAOutflowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalGDAOutflowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalAmountStreamedUntilUpdatedAt",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalCFAAmountStreamedUntilUpdatedAt",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalAmountTransferredUntilUpdatedAt",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalAmountDistributedUntilUpdatedAt",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalSupply",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalNumberOfAccounts",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalNumberOfHolders",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Token",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "tokenStatisticLogs",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "TokenStatisticLog",
                    "kind": "OBJECT",
                    "description": "TokenStatisticLog: Historical entries of `TokenStatistic` updates.\n",
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "triggeredByEventName",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalNumberOfActiveStreams",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalCFANumberOfActiveStreams",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalGDANumberOfActiveStreams",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalNumberOfClosedStreams",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalCFANumberOfClosedStreams",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalGDANumberOfClosedStreams",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalNumberOfIndexes",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalNumberOfActiveIndexes",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalSubscriptionsWithUnits",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalApprovedSubscriptions",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalNumberOfPools",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalNumberOfActivePools",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalMembershipsWithUnits",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalConnectedMemberships",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalDeposit",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalCFADeposit",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalGDADeposit",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalOutflowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalCFAOutflowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalGDAOutflowRate",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalAmountStreamed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalCFAAmountStreamed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalAmountTransferred",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalAmountDistributed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalSupply",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalNumberOfAccounts",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "totalNumberOfHolders",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Token",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "tokenStatistic",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "TokenStatistic",
                                    "kind": "OBJECT"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "TokenStatisticLog_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "TokenStatisticLog_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "TokenStatistic_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "TokenStatistic_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "TokenUpgradedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "account",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Account",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "amount",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "TokenUpgradedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "TokenUpgradedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "Token_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "Token_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "TransferEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "from",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Account",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "to",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Account",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "value",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "token",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "TransferEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "TransferEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "TrustedForwarderChangedEvent",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "id",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "ID",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "transactionHash",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasPrice",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "gasUsed",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "name",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "governanceAddress",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "addresses",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": null,
                                    "kind": "LIST"
                                }
                            }
                        },
                        {
                            "name": "blockNumber",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "logIndex",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "order",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "BigInt",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "host",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "superToken",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "isKeySet",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Boolean",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "forwarder",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Bytes",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "enabled",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Boolean",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "TrustedForwarderChangedEvent_filter",
                    "kind": "INPUT_OBJECT",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "TrustedForwarderChangedEvent_orderBy",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                },
                {
                    "name": "_Block_",
                    "kind": "OBJECT",
                    "description": null,
                    "fields": [
                        {
                            "name": "hash",
                            "type": {
                                "name": "Bytes",
                                "kind": "SCALAR",
                                "ofType": null
                            }
                        },
                        {
                            "name": "number",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Int",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "timestamp",
                            "type": {
                                "name": "Int",
                                "kind": "SCALAR",
                                "ofType": null
                            }
                        },
                        {
                            "name": "parentHash",
                            "type": {
                                "name": "Bytes",
                                "kind": "SCALAR",
                                "ofType": null
                            }
                        }
                    ]
                },
                {
                    "name": "_Meta_",
                    "kind": "OBJECT",
                    "description": "The type for the top-level _meta field",
                    "fields": [
                        {
                            "name": "block",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "_Block_",
                                    "kind": "OBJECT"
                                }
                            }
                        },
                        {
                            "name": "deployment",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "String",
                                    "kind": "SCALAR"
                                }
                            }
                        },
                        {
                            "name": "hasIndexingErrors",
                            "type": {
                                "name": null,
                                "kind": "NON_NULL",
                                "ofType": {
                                    "name": "Boolean",
                                    "kind": "SCALAR"
                                }
                            }
                        }
                    ]
                },
                {
                    "name": "_SubgraphErrorPolicy_",
                    "kind": "ENUM",
                    "description": null,
                    "fields": null
                }
            ]
        }
    }
}