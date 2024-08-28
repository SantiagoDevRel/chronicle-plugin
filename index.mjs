import { Web3PluginBase, Contract } from "web3";
import ORACLE_ABI from "./abi.mjs";

export default class ChroniclePlugin extends Web3PluginBase {
  pluginNamespace = "chronicle";

  async btcusd(blockNumber) {
    // initialize a contract
    const contract = new Contract(ORACLE_ABI, "0x6edF073c4Bd934d3916AA6dDAC4255ccB2b7c0f0");
    //setprovider("arbitrum endpoint")
    // link context
    contract.link(this);

    // call contract
    const result = await contract.methods.latestAnswer().call(null, blockNumber);

    const formattedPrice = result.toString().substring(0, 5);
    console.log("BTC price is:", formattedPrice);
  }

  async ethusd() {
    // initialize a contract
    const contract = new Contract(ORACLE_ABI, "0xdd6D76262Fd7BdDe428dcfCd94386EbAe0151603");
    // link context
    contract.link(this);

    // call contract
    const result = await contract.methods.latestAnswer().call();

    const formattedPrice = result.toString().substring(0, 4);
    console.log("ETH price is:", formattedPrice);
  }

  async solusd() {
    // initialize a contract
    const contract = new Contract(ORACLE_ABI, "0x39eC7D193D1Aa282b8ecCAC9B791b09c75D30491");
    // link context
    contract.link(this);

    // call contract
    const result = await contract.methods.latestAnswer().call();

    const formattedPrice = result.toString().substring(0, 3);
    console.log("SOL price is:", formattedPrice);
  }
}
