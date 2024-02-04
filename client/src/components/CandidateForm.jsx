import { Web3Button, useContract, useContractWrite } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../../constants/address";
import { useState } from "react";
import axios from "axios";

const CandidateForm = () => {
  const Initialform = {
    chainId: "",
    name: "",
    email: "",
    wordNo: "",
    description: "",
    party: "",
    age: "",
    qualification: "",
    voterId: "",
    adhaar: "",
  };
  const [form, setForm] = useState(Initialform);
  const { contract } = useContract(CONTRACT_ADDRESS);
  const { mutateAsync: addCandidate, isLoading } = useContractWrite(
    contract,
    "addCandidate"
  );

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const call = async () => {
    try {
      if (validateForm) {
        const data = await addCandidate({
          args: [form.name, form.party, form.age, form.qualification],
        });
        console.info("contract call successs", data);
      } else {
        alert("please fill up the form");
      }
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  const validateForm = () => {
    return (
      form.name.trim() !== "" &&
      form.email.trim() !== "" &&
      form.wordNo.trim() !== "" &&
      form.description.trim() !== "" &&
      form.party.trim() !== "" &&
      form.age.trim() !== "" &&
      form.qualification.trim() !== "" &&
      form.voterId.trim() !== "" &&
      form.adhaar.trim() !== ""
    );
  };

  const handleSubmit = async () => {
    const { data, isLoading } = useContractRead(contract, "candidatesCount");
    if (!isLoading) {
      setForm({ ...formData, chainId: data.toNumber() });
      console.log(form);
      await axios
        .post(import.meta.env.VITE_API_URL + "/registration", form)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
          setSubmitError(error.response.data.message);
        });
    }
  };
  return (
    <>
      <form className="w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 font-Main">Candidate Entry</h1>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              name="name"
              placeholder="Jane Doe"
              onChange={handleInputChange}
            />
            {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="email"
              name="email"
              placeholder="abc@gmail.com"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Word No
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              name="wordNo"
              placeholder=""
            />
            {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Description
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="description"
              placeholder="(optional)"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Party
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              name="party"
              placeholder=""
            />
            {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Age
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="age"
              placeholder=""
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Qualification
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              name="qualification"
              placeholder=""
            />
            {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Voter ID
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="voterId"
              placeholder=""
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Adhaar No
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              name="adhaar"
              type="text"
              placeholder="000-000-000"
            />
            {/* <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p> */}
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center">
          <Web3Button
            contractAddress={CONTRACT_ADDRESS}
            action={call}
            onError={(error) => alert(error)}
            onSuccess={handleSubmit}
          >
            {" "}
            Register{" "}
          </Web3Button>
        </div>
      </form>
    </>
  );
};

export default CandidateForm;
