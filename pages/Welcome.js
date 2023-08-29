import React, { useState } from 'react';

function Welcome() {
  const [inputValue, setInputValue] = useState('');
  const [responseData, setResponseData] = useState('');

  const bgColor = "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%";

  const handleSubmit = (event) => {
    event.preventDefault();
    setResponseData("Querying...")
    fetch('http://localhost:8080/api/home', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input: inputValue }),
    })
      .then((response) => response.json())
      .then((data) => {
        setResponseData(data.response);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      setInputValue("");
  };

  return (
    <div className={"flex flex-col h-screen justify-center items-center " + bgColor}>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md items-center">
        <div className="mt-4 text-center">{responseData}</div>
        <form onSubmit={handleSubmit} className="flex items-center">
          <label className="mr-2">Enter Text:</label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border border-gray-300 px-2 py-1 rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white ml-2 px-4 py-2 rounded hover:bg-blue-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Welcome;