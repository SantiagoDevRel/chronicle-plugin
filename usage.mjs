import ChroniclePlugin from "./index.mjs";
import { Web3 } from "web3";

// register plugin and RPC endpoint
const web3 = new Web3("https://sepolia.infura.io/v3/5cabf7b382a64c3faed303e7adc25177");
web3.registerPlugin(new ChroniclePlugin());

// usage
async function main() {
  await web3.chronicle.btcusd("6587335");
  await web3.chronicle.btcusd("5587335");

  /*   await web3.chronicle.solusd();
  await web3.chronicle.ethusd(); */
}

main();
