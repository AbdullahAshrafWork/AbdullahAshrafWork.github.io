"use client";

import { useState } from "react";

export default function SearchPets() {
  //const apiUrl = "https://aa.knowledgebase.playground.byte.enterprises/api/pets";

  const [area, setArea] = useState("");
  const [submitMsg, setSubmitMsg] = useState("");
  const [results, setResults] = useState([]);
  const apiUrl =
    "https://s7nyk7emcb.execute-api.eu-west-2.amazonaws.com/api/dogWalkers" +
    "?param1=" +
    String(area);

  const submitToApi = async () => {
    const requestHeaders = {
      "Content-Type": "application/json",
    };

    try {
      const response = await fetch(apiUrl, {
        headers: requestHeaders,
        method: "GET",
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Working API Response:", responseData);
        setResults(responseData);

        if (responseData.length == 0) {
          setSubmitMsg("No Matching Results");
        }
      } else {
        console.error("API Error:", response.status, response.statusText);
        console.log("API Response:", response.headers);
        setSubmitMsg("No matching records");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div>
        <div className="flex justify-left mt-4 ml-4 ">
          <span
            id="msg"
            style={{ visibility: submitMsg != "" ? "visible" : "hidden" }}
            className="flex items-center p-4 text-sm font-bold text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800"
            role="alert"
          >
            {submitMsg}
          </span>
        </div>
        <div className="flex justify-center mb-6 mt-6">
          <label className="text-lg font-medium text-gray-900 dark:text-white">
            Search for Dog Walkers by Location
          </label>
        </div>
        <div className="flex justify-center mb-6">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="E.g. London"
            onChange={(e) => {
              setArea(e.currentTarget.value);
            }}
          />
        </div>
        <div className="flex justify-center mb-6">
          <button
            onClick={() => submitToApi()}
            className="bg-gray-50 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/12 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-6"
          >
            Submit
          </button>
        </div>
        <div className="flex justify-center">
          <div className="mb-6 mt-6 text-left"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 3fr)",
              gridGap: 40,
            }}>
            {results.map((result: any) => (
              <div key={result}>
                <a
                  key={result}
                  href="#"
                  className="block max-w-sm md:auto p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <p key={result}>Email: {result.id}</p>
                  <p key={result}>Name: {result.name}</p>
                  <p key={result}>Location: {result.area}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}