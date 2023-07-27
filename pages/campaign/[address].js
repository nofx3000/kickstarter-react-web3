import { useRouter } from "next/router";
import campaign from "../../ethereum/campaign.js";
import { useEffect, useState } from "react";
import RootLayout from "../layout.js";

const Detail = () => {
  const router = useRouter();
  const { address } = router.query;
  console.log(address);
  const currentCampagin = campaign(address);

  const [manager, setManager] = useState("");
  const [minimumContribution, setMinimumContribution] = useState("");
  useEffect(() => {
    fetch();
  }, [address]);

  const fetch = async () => {
    try {
      const manager = await currentCampagin.methods.manager().call();
      const minimumContribution = await currentCampagin.methods
        .minimumContribution()
        .call();
      setManager(manager);
      setMinimumContribution(minimumContribution);
    } catch (err) {
      console.log(err.toString());
    }
  };
  return (
    <RootLayout>
      <p>CampaignAddress: {address}</p>
      <p>Manager: {manager}</p>
      <p>MinimumContribution: {minimumContribution.toString()}eth</p>
    </RootLayout>
  );
};

export default Detail;
