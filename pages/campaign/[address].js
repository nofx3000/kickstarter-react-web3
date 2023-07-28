import { useRouter } from "next/router";
import web3 from "../../ethereum/web3.js";
import campaign from "../../ethereum/campaign.js";
import { useEffect, useState } from "react";
import RootLayout from "../layout.js";
import Link from "next/link.js";

export default function Detail() {
  const router = useRouter();
  const { address } = router.query;
  console.log(address);
  const currentCampagin = campaign(address);

  const [connecting, setConnecting] = useState(false);
  const [transacting, setTransacting] = useState(false);
  const [minimumContribution, setMinimumContribution] = useState("");
  const [balance, setBalance] = useState("");
  const [requests, setRequests] = useState("");
  const [approvers, setApprovers] = useState("");
  const [manager, setManager] = useState("");
  const [value, setValue] = useState("");
  useEffect(() => {
    fetch();
  }, [address]);

  const fetch = async () => {
    try {
      setConnecting(true);
      const manager = await currentCampagin.methods.manager().call();
      const minimumContribution = await currentCampagin.methods
        .minimumContribution()
        .call();
      const summary = await currentCampagin.methods.getSummary().call();
      const balance = summary[1];
      const requests = summary[2];
      const approvers = await currentCampagin.methods.approversCount().call();
      console.log("----------------------------", currentCampagin.methods);
      setManager(manager);
      setMinimumContribution(minimumContribution);
      setBalance(balance);
      setRequests(requests);
      setApprovers(approvers);
      setConnecting(false);
    } catch (err) {
      console.log(err.toString());
    }
  };

  const onInputChange = (event) => {
    setValue(event.target.value);
  };

  const submitContribute = async () => {
    setTransacting(true);
    try {
      const accounts = await web3.eth.getAccounts();

      await currentCampagin.methods.contribute().send({
        from: accounts[0],
        value: parseInt(value),
      });
    } catch (error) {
      console.log(error.toString());
    }
    fetch();
    setTransacting(false);
  };

  return (
    <RootLayout>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Campaign Detail
            </h2>
            {connecting && (
              <p className="text-2xl tracking-tight text-white sm:text-6xl">
                connecting....
              </p>
            )}
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col-reverse">
                <p className="text-base leading-7 text-gray-300">
                  manager: {manager.substring(0, 10)}
                </p>
              </div>
              <div className="flex flex-col-reverse">
                <p className="text-base leading-7 text-gray-300">
                  minimumContribution: {minimumContribution.toString()}Wei
                </p>
              </div>
              <div className="flex flex-col-reverse">
                <p className="text-base leading-7 text-gray-300">
                  balance: {balance.toString()}Wei
                </p>
              </div>
              <div className="flex flex-col-reverse">
                <p className="text-base leading-7 text-gray-300">
                  Unhandled Request: {requests.toString()}
                </p>
              </div>
              <div className="flex flex-col-reverse">
                <p className="text-base leading-7 text-gray-300">
                  contributors: {approvers.toString()}
                </p>
              </div>
            </dl>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none text-white">
            <p className="text-white">Contribute to this campaign</p>
            <input
              id="value"
              name="value"
              type="number"
              min="0"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              placeholder="Contribution"
              value={value}
              onChange={onInputChange}
            />
            wei
            <button
              type="submit"
              onClick={submitContribute}
              className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Contribute
            </button>
            {transacting && (
              <p className="text-2xl tracking-tight text-white sm:text-6xl">
                transacting.......
              </p>
            )}
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none text-white">
            <Link href={`/campaign/${address}/requests`}>
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                View Requests
              </button>
            </Link>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
