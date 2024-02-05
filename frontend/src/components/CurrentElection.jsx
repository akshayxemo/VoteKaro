import { useContract, useContractRead } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../../constants/address";

const CurrentElection = () => {
  const { contract } = useContract(CONTRACT_ADDRESS);
  const { data, isLoading } = useContractRead(contract, "getStatus");
  return (
    <div className="p-8 bg-gray-200 w-full flex flex-row flex-wrap justify-between items-center mt-4 rounded-md">
      <div>
        <h1 className="text-2xl font-Main font-bold">Name of The election</h1>
        <p className="text-base mb-6">Here is some description</p>
        <div className="flex flex-wrap gap-2">
          <button className="w-28 rounded-sm bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
            Start
          </button>
          <button className="w-28 rounded-sm bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/60">
            Stop
          </button>
        </div>
      </div>
      <div className="">
        <div className="flex flex-wrap gap-6">
          <div>
            <p className="text-gray-500">Vote starts in : </p>
            <h2 className="font-bold">11 feb 2024, 11:00 AM</h2>
          </div>
          <div>
            <p className="text-gray-500">Vote Ends in : </p>
            <h2 className="font-bold">11 feb 2024, 11:00 AM</h2>
          </div>
        </div>
        <div>
          <p className="text-gray-500">Status </p>
          {isLoading ? (
            <h2 className="font-thin">loading...</h2>
          ) : (
            <h2 className="font-bold">
              {data == 0 ? "registration" : data == 1 ? "voting" : "completed"}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrentElection;
