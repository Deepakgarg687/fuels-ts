import type { GqlChainInfoFragmentFragment } from '../../src/providers/__generated__/operations';

export const MOCK_CHAIN: GqlChainInfoFragmentFragment = {
  __typename: 'ChainInfo',
  name: 'local_testnet',
  daHeight: '234',
  consensusParameters: {
    __typename: 'ConsensusParameters',
    txParams: {
      __typename: 'TxParameters',
      maxInputs: '255',
      maxOutputs: '255',
      maxWitnesses: '255',
      maxGasPerTx: '500000000',
      maxSize: '17825792',
    },
    scriptParams: {
      __typename: 'ScriptParameters',
      maxScriptLength: '1048576',
      maxScriptDataLength: '1048576',
    },
    contractParams: {
      __typename: 'ContractParameters',
      contractMaxSize: '16777216',
      maxStorageSlots: '255',
    },
    predicateParams: {
      __typename: 'PredicateParameters',
      maxPredicateLength: '1048576',
      maxPredicateDataLength: '1048576',
      maxGasPerPredicate: '100000000',
      maxMessageDataLength: '1048576',
    },
    feeParams: {
      __typename: 'FeeParameters',
      gasPerByte: '4',
      gasPriceFactor: '1000000000',
    },
    baseAssetId: '0x0000000000000000000000000000000000000000000000000000000000000000',
    chainId: '0',
    gasCosts: {
      __typename: 'GasCosts',
      add: '1',
      addi: '1',
      aloc: '1',
      and: '1',
      andi: '1',
      bal: '13',
      bhei: '1',
      bhsh: '1',
      burn: '132',
      cb: '1',
      cfei: '1',
      cfsi: '1',
      croo: '16',
      div: '1',
      divi: '1',
      ecr1: '3000',
      eck1: '951',
      ed19: '3000',
      eq: '1',
      exp: '1',
      expi: '1',
      flag: '1',
      gm: '1',
      gt: '1',
      gtf: '1',
      ji: '1',
      jmp: '1',
      jne: '1',
      jnei: '1',
      jnzi: '1',
      jmpf: '1',
      jmpb: '1',
      jnzf: '1',
      jnzb: '1',
      jnef: '1',
      jneb: '1',
      lb: '1',
      log: '9',
      lt: '1',
      lw: '1',
      mint: '135',
      mlog: '1',
      modOp: '1',
      modi: '1',
      moveOp: '1',
      movi: '1',
      mroo: '2',
      mul: '1',
      muli: '1',
      mldv: '1',
      noop: '1',
      not: '1',
      or: '1',
      ori: '1',
      poph: '2',
      popl: '2',
      pshh: '2',
      pshl: '2',
      ret: '13',
      rvrt: '13',
      sb: '1',
      sll: '1',
      slli: '1',
      srl: '1',
      srli: '1',
      srw: '12',
      sub: '1',
      subi: '1',
      sw: '1',
      sww: '67',
      time: '1',
      tr: '105',
      tro: '60',
      wdcm: '1',
      wqcm: '1',
      wdop: '1',
      wqop: '1',
      wdml: '1',
      wqml: '1',
      wddv: '1',
      wqdv: '2',
      wdmd: '3',
      wqmd: '4',
      wdam: '2',
      wqam: '3',
      wdmm: '3',
      wqmm: '3',
      xor: '1',
      xori: '1',
      call: {
        __typename: 'LightOperation',
        base: '144',
        unitsPerGas: '214',
      },
      ccp: {
        __typename: 'LightOperation',
        base: '15',
        unitsPerGas: '103',
      },
      csiz: {
        __typename: 'LightOperation',
        base: '17',
        unitsPerGas: '790',
      },
      k256: {
        __typename: 'LightOperation',
        base: '11',
        unitsPerGas: '214',
      },
      ldc: {
        __typename: 'LightOperation',
        base: '15',
        unitsPerGas: '272',
      },
      logd: {
        __typename: 'LightOperation',
        base: '26',
        unitsPerGas: '64',
      },
      mcl: {
        __typename: 'LightOperation',
        base: '1',
        unitsPerGas: '3333',
      },
      mcli: {
        __typename: 'LightOperation',
        base: '1',
        unitsPerGas: '3333',
      },
      mcp: {
        __typename: 'LightOperation',
        base: '1',
        unitsPerGas: '2000',
      },
      mcpi: {
        __typename: 'LightOperation',
        base: '3',
        unitsPerGas: '2000',
      },
      meq: {
        __typename: 'LightOperation',
        base: '1',
        unitsPerGas: '2500',
      },
      retd: {
        __typename: 'LightOperation',
        base: '29',
        unitsPerGas: '62',
      },
      s256: {
        __typename: 'LightOperation',
        base: '2',
        unitsPerGas: '214',
      },
      scwq: {
        __typename: 'LightOperation',
        base: '13',
        unitsPerGas: '5',
      },
      smo: {
        __typename: 'LightOperation',
        base: '209',
        unitsPerGas: '55',
      },
      srwq: {
        __typename: 'LightOperation',
        base: '47',
        unitsPerGas: '5',
      },
      swwq: {
        __typename: 'LightOperation',
        base: '44',
        unitsPerGas: '5',
      },
      contractRoot: {
        __typename: 'LightOperation',
        base: '75',
        unitsPerGas: '1',
      },
      stateRoot: {
        __typename: 'LightOperation',
        base: '412',
        unitsPerGas: '1',
      },
      vmInitialization: {
        __typename: 'HeavyOperation',
        base: '2000',
        gasPerUnit: '0',
      },
      newStoragePerByte: '1',
    },
  },
  latestBlock: {
    __typename: 'Block',
    id: '0xb9e55ced368c8d8f1aa487d33e97043e5891406792ea5d61f7807d0441d34722',
    header: { __typename: 'Header', height: '234', time: '4611686020122537935' },
    transactions: [
      {
        __typename: 'Transaction',
        id: '0x304fb90a1a9897d839dcd9a5b93739ca6045638fc6520e2cf5735dd84b2de4a7',
      },
    ],
  },
};