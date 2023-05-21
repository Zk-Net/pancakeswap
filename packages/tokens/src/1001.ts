import { ChainId, WBNB } from '@pancakeswap/sdk'
import { BUSD_ZKNET, USDT_ZKNET } from './common'

export const zknetTokens = {
  wbnb: WBNB[ChainId.BSC_TESTNET],
  busd: BUSD_ZKNET,  
  usdt: USDT_ZKNET,
}
