import { useEffect } from "react";
import RootLayout from "../../../layout";
import campaign from "../../../../ethereum/campaign";
import { useRouter } from "next/router";
export default () => {
  const router = useRouter();
  const { address } = router.query;
  const currentCampagin = campaign(address);
  useEffect(() => {
    address && fetch();
  }, [address]);
  const fetch = async () => {
    const requestCount = parseInt(
      await currentCampagin.methods.getRequestsCount().call()
    );
    if (requestCount > 0) {
      const requests = await Promise.all(
        Array(requestCount)
          .fill()
          .map((item, index) => {
            return currentCampagin.methods.requests(index).call();
          })
      );
      console.log(requests);
    }
  };
  return (
    <RootLayout>
      <div
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span className="text-2xl tracking-tight text-black sm:text-6xl">
          Requests
        </span>
        <button
          type="submit"
          className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Add Request
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Recepient</th>
            <th>Approval Count</th>
            <th>Approve</th>
            <th>Finalize</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </RootLayout>
  );
};

const TableRow = () => {
  return (
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
      <td>Germany</td>
      <td>Germany</td>
      <td>
        <button
          type="submit"
          className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Approve
        </button>
      </td>
      <td>
        <button
          type="submit"
          className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Finalize
        </button>
      </td>
    </tr>
  );
};
