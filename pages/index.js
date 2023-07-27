import React, { useState } from "react";
import factory from "../ethereum/factory.js";
import Link from "next/link";
import RootLayout from "./layout.js";

export default function Index({ contracts }) {
  return (
    <RootLayout>
      <Link href={`/campaign/new`}>
        <button
          type="submit"
          className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Create Campaign
        </button>
      </Link>
      <ul role="list" className="divide-y divide-gray-100">
        {contracts.map((item) => (
          <ListItem contract={item} key={item}></ListItem>
        ))}
      </ul>
    </RootLayout>
  );
}

const ListItem = (props) => {
  const { contract } = props;
  return (
    <li className="flex justify-between gap-x-6 py-5">
      <div className="flex gap-x-4">
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {contract}
          </p>
          <Link href={`/campaign/${contract}`}>
            <a className="mt-1 truncate text-xs leading-5 text-gray-500">
              View Detial
            </a>
          </Link>
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-col sm:items-end"></div>
    </li>
  );
};

export async function getServerSideProps() {
  const contracts = await factory.methods.getDeployedCampaigns().call();
  return {
    props: {
      contracts,
    },
  };
}
