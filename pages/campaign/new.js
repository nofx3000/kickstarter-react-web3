import { useEffect, useState } from "react";
import RootLayout from "../layout.js";
import factory from "../../ethereum/factory.js";
import web3 from "../../ethereum/web3.js";

export default () => {
  const [minimum, setMinimum] = useState("");
  const createCampaign = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log(minimum);
    try {
      console.log(factory.methods);
      await factory.methods.createCampaign(parseInt(minimum)).send({
        from: accounts[0],
      });
    } catch (err) {
      console.log(err.toString());
    }
  };
  const onInputChange = (event) => {
    setMinimum(event.target.value);
  };

  return (
    <RootLayout>
      <div className="max-w-xl lg:max-w-lg">
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Create a new campagin
        </h2>

        <div className="mt-6 flex max-w-md gap-x-4">
          <label htmlFor="minimum-contribution" className="sr-only">
            Minimum Contribution
          </label>
          <input
            id="minimum-contribution"
            name="minimum"
            type="number"
            min="0"
            required
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            placeholder="Minimum Contribution"
            value={minimum}
            onChange={onInputChange}
          />
          wei
          <button
            type="submit"
            onClick={createCampaign}
            className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Create
          </button>
        </div>
      </div>
    </RootLayout>
  );
};
