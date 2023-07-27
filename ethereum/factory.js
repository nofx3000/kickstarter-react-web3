import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";
import FACTORY_ADDRESS from "./FACTORY_ADDRESS.json";
const instance = new web3.eth.Contract(CampaignFactory.abi, FACTORY_ADDRESS);

export default instance;
