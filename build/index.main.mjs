// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1, ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Address;
  
  
  const v75 = stdlib.protect(ctc0, interact.swapAlice, 'for Alice\'s interact field swapAlice');
  
  const txn1 = await (ctc.sendrecv({
    args: [v75],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:23:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v75, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v80], secs: v82, time: v81, didSend: v30, from: v79 } = txn1;
      
      sim_r.txns.push({
        amt: v80,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v80], secs: v82, time: v81, didSend: v30, from: v79 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v88, v89], secs: v91, time: v90, didSend: v41, from: v87 } = txn2;
  ;
  const v96 = stdlib.protect(ctc2, await interact.swapTokens(v80, v88), {
    at: './index.rsh:33:51:application',
    fs: ['at ./index.rsh:32:13:application call to [unknown function] (defined at: ./index.rsh:32:17:function exp)'],
    msg: 'swapTokens',
    who: 'Alice'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v79, v80, v87, v88, v96],
    evt_cnt: 1,
    funcNum: 2,
    lct: v90,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:35:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v98], secs: v100, time: v99, didSend: v51, from: v97 } = txn3;
      
      ;
      const v102 = [v88, v80];
      const v103 = [v80, v88];
      const v104 = v98 ? v102 : v103;
      const v105 = v104[stdlib.checkedBigNumberify('./index.rsh:36:9:array', stdlib.UInt_max, '0')];
      const v106 = v104[stdlib.checkedBigNumberify('./index.rsh:36:9:array', stdlib.UInt_max, '1')];
      sim_r.txns.push({
        kind: 'from',
        to: v79,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v87,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc3, ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v98], secs: v100, time: v99, didSend: v51, from: v97 } = txn3;
  ;
  const v101 = stdlib.addressEq(v79, v97);
  stdlib.assert(v101, {
    at: './index.rsh:35:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v102 = [v88, v80];
  const v103 = [v80, v88];
  const v104 = v98 ? v102 : v103;
  const v105 = v104[stdlib.checkedBigNumberify('./index.rsh:36:9:array', stdlib.UInt_max, '0')];
  const v106 = v104[stdlib.checkedBigNumberify('./index.rsh:36:9:array', stdlib.UInt_max, '1')];
  ;
  ;
  return;
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Address;
  
  
  const v76 = stdlib.protect(ctc0, interact.swapBob, 'for Bob\'s interact field swapBob');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v80], secs: v82, time: v81, didSend: v30, from: v79 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptSwap(v80), {
    at: './index.rsh:27:54:application',
    fs: ['at ./index.rsh:25:11:application call to [unknown function] (defined at: ./index.rsh:25:15:function exp)'],
    msg: 'acceptSwap',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v79, v80, v76, null],
    evt_cnt: 2,
    funcNum: 1,
    lct: v81,
    onlyIf: true,
    out_tys: [ctc0, ctc1],
    pay: [v76, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v88, v89], secs: v91, time: v90, didSend: v41, from: v87 } = txn2;
      
      sim_r.txns.push({
        amt: v88,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v88, v89], secs: v91, time: v90, didSend: v41, from: v87 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v98], secs: v100, time: v99, didSend: v51, from: v97 } = txn3;
  ;
  const v101 = stdlib.addressEq(v79, v97);
  stdlib.assert(v101, {
    at: './index.rsh:35:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v102 = [v88, v80];
  const v103 = [v80, v88];
  const v104 = v98 ? v102 : v103;
  const v105 = v104[stdlib.checkedBigNumberify('./index.rsh:36:9:array', stdlib.UInt_max, '0')];
  const v106 = v104[stdlib.checkedBigNumberify('./index.rsh:36:9:array', stdlib.UInt_max, '1')];
  ;
  ;
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAFAAECCCAmAgEAACI1ADEYQQGoKWRJIls1ASVbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQADlSSQMQACAJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEEWzX+gUhbNf1JNQUXNfyABGoROgg0/BZRBwhQsDT/MQASRDT+FjT9FlA0/RY0/hZQNPxNNfuxIrIBNPsiW7III7IQNP+yB7OxIrIBNPslW7III7IQNANXKCCyB7NCAKVIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQRbNf5JNQVJIls1/UgpNfyABGlUbBs0/RZQNPxQsDT9iADSNP80/hZQMQBQNP0WUChLAVcAUGdIJDUBMgY1AkIAYkiBoI0GiACrIjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwNP+IAIUxADT/FlAoSwFXAChnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 80,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v88",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v89",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v98",
                "type": "bool"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v88",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v89",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v98",
                "type": "bool"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000bd138038062000bd1833981016040819052610024916101aa565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a160208101515161008590341460076100e8565b6040805180820182526000602080830182815233808552868301515182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926100e09260029290910190610111565b505050610283565b8161010d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461011d90610248565b90600052602060002090601f01602090048101928261013f5760008555610185565b82601f1061015857805160ff1916838001178555610185565b82800160010185558215610185579182015b8281111561018557825182559160200191906001019061016a565b50610191929150610195565b5090565b5b808211156101915760008155600101610196565b60008183036040808212156101be57600080fd5b80518082016001600160401b0380821183831017156101ed57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f198601121561020657600080fd5b83519450602085019150848210818311171561023257634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c9082168061025c57607f821691505b6020821081141561027d57634e487b7160e01b600052602260045260246000fd5b50919050565b61093e80620002936000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780633e59bac4146100785780635465ff651461008b578063832307571461009e578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b6100526100863660046106a6565b6100d6565b6100526100993660046106be565b6102f7565b3480156100aa57600080fd5b50600154610065565b3480156100bf57600080fd5b506100c86104a3565b60405161006f9291906106d0565b6100e6600260005414600d610540565b610100813515806100f957506001548235145b600e610540565b6000808055600280546101129061072d565b80601f016020809104026020016040519081016040528092919081815260200182805461013e9061072d565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a3919061077e565b90506101ad610569565b7fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd33846040516101de92919061080e565b60405180910390a16101f23415600b610540565b815161020a906001600160a01b03163314600c610540565b60608201805182515260208084018051845183015251818401805191909152915191518101919091526102439060408501908501610843565b610251578060200151610254565b80515b60408083018290528351915190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610295573d6000803e3d6000fd5b5081604001516001600160a01b03166108fc8260400151602001519081150290604051600060405180830381858888f193505050501580156102db573d6000803e3d6000fd5b50600080805560018190556102f2906002906105d0565b505050565b6103076001600054146009610540565b6103218135158061031a57506001548235145b600a610540565b6000808055600280546103339061072d565b80601f016020809104026020016040519081016040528092919081815260200182805461035f9061072d565b80156103ac5780601f10610381576101008083540402835291602001916103ac565b820191906000526020600020905b81548152906001019060200180831161038f57829003601f168201915b50505050508060200190518101906103c49190610865565b90507ff75f9b1c70fa45a70ef0adaf150738a5ac6e00c1a147529d67d8011998d522eb33836040516103f79291906108ca565b60405180910390a1610410346020840135146008610540565b604080516080808201835260008083526020808401828152848601838152606080870185815289516001600160a01b03908116808a528b87015186523385528c8701358352600297889055436001558a51808801919091529451858b015292519092169083015251818501528551808203909401845260a0019094528151929361049d939192019061060d565b50505050565b6000606060005460028080546104b89061072d565b80601f01602080910402602001604051908101604052809291908181526020018280546104e49061072d565b80156105315780601f1061050657610100808354040283529160200191610531565b820191906000526020600020905b81548152906001019060200180831161051457829003601f168201915b50505050509050915091509091565b816105655760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160a081019091526000606082018181526080830191909152819081526020016105a9604051806040016040528060008152602001600081525090565b81526020016105cb604051806040016040528060008152602001600081525090565b905290565b5080546105dc9061072d565b6000825580601f106105ec575050565b601f01602090049060005260206000209081019061060a9190610691565b50565b8280546106199061072d565b90600052602060002090601f01602090048101928261063b5760008555610681565b82601f1061065457805160ff1916838001178555610681565b82800160010185558215610681579182015b82811115610681578251825591602001919060010190610666565b5061068d929150610691565b5090565b5b8082111561068d5760008155600101610692565b6000604082840312156106b857600080fd5b50919050565b6000606082840312156106b857600080fd5b82815260006020604081840152835180604085015260005b81811015610704578581018301518582016060015282016106e8565b81811115610716576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061074157607f821691505b602082108114156106b857634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461077957600080fd5b919050565b60006080828403121561079057600080fd5b6040516080810181811067ffffffffffffffff821117156107c157634e487b7160e01b600052604160045260246000fd5b6040526107cd83610762565b8152602083015160208201526107e560408401610762565b6040820152606083015160608201528091505092915050565b8035801515811461077957600080fd5b6001600160a01b0383168152813560208083019190915260608201906108359084016107fe565b151560408301529392505050565b60006020828403121561085557600080fd5b61085e826107fe565b9392505050565b60006040828403121561087757600080fd5b6040516040810181811067ffffffffffffffff821117156108a857634e487b7160e01b600052604160045260246000fd5b6040526108b483610762565b8152602083015160208201528091505092915050565b600060808201905060018060a01b038416825282356020830152602083013560408301526108fa604084016107fe565b15156060830152939250505056fea2646970667358221220e6059116bc7d60edde0a296a772b76284faa23859b0e3203b2f4ac649766168964736f6c634300080c0033`,
  BytecodeLen: 3025,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:24:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:30:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:39:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
