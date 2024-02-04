import React from 'react';

function Header() {
  return (
    <header className="flex justify-between items-center py-4">
      <div>
        <h1 className="text-2xl font-bold">Lok Sabha Votes</h1>
        <p className="text-gray-500">Votes Starts in 11am.</p>
      </div>
      <div className="flex items-center">
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4">Home</button>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4">About Candidate</button>
        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded">Logout</button>
      </div>
    </header>
  );
}

export default Header