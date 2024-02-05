import {
  Web3Button,
  useContract,
  useContractWrite,
  useContractRead,
} from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../../constants/address";
import { useState } from "react";
import axios from "axios";

const CandidateForm = () => {
  const Initialform = {
    chainId: 0,
    name: "",
    email: "",
    wardNo: "",
    description: "",
    party: "",
    age: 0,
    qualification: "",
    voterId: "",
    adhaar: "",
  };
  const [form, setForm] = useState(Initialform);
  const [formError, setFormError] = useState(false);
  const { contract } = useContract(CONTRACT_ADDRESS);
  const { mutateAsync } = useContractWrite(contract, "addCandidate");
  const { data } = useContractRead(contract, "candidatesCount");

  const handleInputChange = (e) => {
    setFormError(false);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    return form.name.trim() !== "" &&
      form.email.trim() !== "" &&
      form.wardNo.trim() !== "" &&
      form.description.trim() !== "" &&
      form.party.trim() !== "" &&
      form.age > 18 &&
      form.qualification.trim() !== "" &&
      form.voterId.trim() !== "" &&
      form.adhaar.trim() !== ""
      ? true
      : false;
  };

  const validateTransctionData = () => {
    return form.name.trim() !== "" &&
      form.party.trim() !== "" &&
      form.age > 18 &&
      form.qualification.trim() !== ""
      ? true
      : false;
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    console.log("submission" + data.toNumber());
    if (validateForm()) {
      console.log("Form submitted with data:", form);
      const No = data.toNumber();
      setForm({ ...form, chainId: No });
      console.log(form);
      await axios
        .post(import.meta.env.VITE_API + "/registration", form)
        .then((response) => {
          setForm(Initialform);
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
          // setSubmitError(error.response.data.message);
        });
    } else {
      setFormError(true);
    }
  };

  // const handleExternalButtonClick = () => {
  //   // Trigger form submission when the external button is clicked
  //   document.getElementById("candidateForm").submit();
  // };
  return (
    <>
      <form
        className="w-full max-w-lg"
        // id="candidateForm"
        // onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-6 font-Main">Candidate Entry</h1>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              name="name"
              placeholder="Jane Doe"
              onChange={handleInputChange}
              value={form.name}
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
              type="email"
              name="email"
              placeholder="abc@gmail.com"
              onChange={handleInputChange}
              value={form.email}
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
              type="text"
              name="wardNo"
              placeholder=""
              onChange={handleInputChange}
              value={form.wardNo}
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
              type="text"
              name="description"
              placeholder="(optional)"
              onChange={handleInputChange}
              value={form.description}
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
              type="text"
              name="party"
              placeholder=""
              onChange={handleInputChange}
              value={form.party}
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
              type="number"
              name="age"
              placeholder=""
              onChange={handleInputChange}
              value={form.age}
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
              type="text"
              name="qualification"
              placeholder=""
              onChange={handleInputChange}
              value={form.qualification}
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
              type="text"
              name="voterId"
              placeholder=""
              onChange={handleInputChange}
              value={form.voterId}
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
              name="adhaar"
              type="text"
              placeholder="000-000-000"
              onChange={handleInputChange}
              value={form.adhaar}
            />
            {formError && (
              <p className=" text-xs italic text-red-500">
                Make Sure to fill up everything
              </p>
            )}
          </div>
        </div>
        {/* <button type="submit">Submit</button> */}
      </form>
      <div className="flex flex-wrap justify-center items-center">
        <Web3Button
          contractAddress="0x1bf104aA91baAA21dB46468BC5F43C940Ad7A77D"
          action={async () => {
            if (validateForm()) {
              // alert("valid");
              console.log("valid");
              await mutateAsync({
                args: [form.name, form.party, form.age, form.qualification],
              });
            } else {
              alert("invalid");
              console.log("invalid");
              alert("Form fields are not filled");
              setFormError(true);
            }
            // contract.call("addCandidate", ["deas", "AJC", 24, "MCA"]);
          }}
          onError={(error) => alert(error)}
          onSubmit={() => {
            console.log("Transaction submitted");
          }}
          onSuccess={async () => {
            console.log("success");
            // handleExternalButtonClick();
            handleSubmit();
            // if (!isLoading) {
            // }
          }}
        >
          {" "}
          Register{" "}
        </Web3Button>
      </div>
    </>
  );
};

export default CandidateForm;
