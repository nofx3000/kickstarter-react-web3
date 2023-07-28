import RootLayout from "../../../layout";
import web3 from "../../../../ethereum/web3";
import campaign from "../../../../ethereum/campaign";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const { address } = router.query;
  const currentCampagin = campaign(address);
  const { register, handleSubmit } = useForm();
  const onSubmit = async ({ description, value, address }) => {
    const accounts = await web3.eth.getAccounts();
    try {
      await currentCampagin.methods
        .createRequest(description, value, address)
        .send({
          from: accounts[0],
        });
    } catch (err) {
      console.log(err.toString());
    }
  };
  return (
    <RootLayout>
      <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none text-black">
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="text-black">Description</p>
          <input
            id="description"
            name="description"
            required
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            placeholder="description"
            {...register("description")}
          />
          <p className="text-black">Amount of money</p>
          <input
            id="value"
            name="value"
            type="number"
            min="0"
            required
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            placeholder="money"
            {...register("value")}
          />
          wei
          <p className="text-black">Recepient's address</p>
          <input
            id="address"
            name="address"
            required
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            placeholder="address"
            {...register("address")}
          />
          <button
            type="submit"
            className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Submit Request
          </button>
        </form>
      </div>
    </RootLayout>
  );
};
