import {
  useContract,
  useContractRead,
  ConnectWallet,
} from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../../../constants/address";

const Wallet = () => {
  const { contract } = useContract(CONTRACT_ADDRESS);
  const { data, isLoading } = useContractRead(contract, "candidatesCount");
  console.log(data);
  return (
    <>
      <div className="text-4xl">Dashboard</div>
      {isLoading ? <p>loading...</p> : <p>{data.toNumber()}</p>}
      <ConnectWallet />
    </>
  );
};

export default Wallet;
