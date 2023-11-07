"use client";

import { useState } from "react";

export default function RegisterPets() {
  //const apiUrl = "https://aa.knowledgebase.playground.byte.enterprises/api/pets";

  const [email, setEmail] = useState({});
  const [name, setName] = useState({});
  const [age, setAge] = useState({});
  const [area, setArea] = useState({});
  const [submitMsg, setSubmitMsg] = useState("");
  const apiUrl =
    "https://s7nyk7emcb.execute-api.eu-west-2.amazonaws.com/api/pets";
  const submitToApi = async () => {
    const requestHeaders = {
      "Content-Type": "application/json",
    };

    const requestBody = JSON.stringify({
      id: email,
      name: name,
      age: age,
      area: area,
    });

    console.log(requestBody);

    try {
      const response = await fetch(apiUrl, {
        body: requestBody,
        headers: requestHeaders,
        method: "POST",
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Working API Response:", responseData);
        setSubmitMsg("Success! Your Dog has been registered")
      } else {
        console.error("API Error:", response.status, response.statusText);
        console.log("API Response:", response.headers);
        setSubmitMsg("Make sure to fill in all fields");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div>
        <div className="flex justify-left mt-4 ml-4 ">
          <span style={{visibility: submitMsg!="" ? "visible" : "hidden"}} className="flex items-center p-4 text-sm font-bold text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800"
            role="alert">{submitMsg}</span>
        </div>
        <div className="flex justify-center mb-6">
          <h1 className="text-3xl font-medium dark:text-white mb-2">
            Register a Dog
          </h1>
        </div>
        <div className="flex justify-center mb-6 mt-6">
          <label className="text-sm font-medium text-gray-900 dark:text-white">
            Owners Email
          </label>
        </div>
        <div className="flex justify-center mb-6">
          <input
            type="email"
            id="helper-text"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />
        </div>
      </div>
      <div>
        <div className="flex justify-center mb-6 mt-6">
          <label className="text-sm font-medium text-gray-900 dark:text-white">
            Name of Dog
          </label>
        </div>
        <div className="flex justify-center mb-6">
          <input
            type="text"
            id="helper-text"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Dogs Name"
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
          ></input>
        </div>
      </div>
      <div>
        <div className="flex justify-center mb-6 mt-6">
          <label className="text-sm font-medium text-gray-900 dark:text-white">
            Age of Dog
          </label>
        </div>
        <div className="flex justify-center mb-6">
          <input
            type="text"
            id="helper-text"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Age"
            onChange={(e) => {
              setAge(e.currentTarget.value);
            }}
          ></input>
        </div>
      </div>
      <div>
        <div className="flex justify-center mb-6 mt-6">
          <label className="text-sm font-medium text-gray-900 dark:text-white">
            Area of Residence
          </label>
        </div>
        <div className="flex justify-center mb-6">
          <input
            type="text"
            id="helper-text"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="e.g. Cambridge"
            onChange={(e) => {
              setArea(e.currentTarget.value);
            }}
          ></input>
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <button
          onClick={() => submitToApi()}
          className="bg-gray-50 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-6"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

//"https://s7nyk7emcb.execute-api.eu-west-2.amazonaws.com/api/pets?param1=preston"
