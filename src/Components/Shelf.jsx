import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shelf = () => {
  const [bookshelf, setBookshelf] = useState(() => JSON.parse(localStorage.getItem('bookshelf')) || []);
  useEffect(() => {
    setBookshelf(JSON.parse(localStorage.getItem('bookshelf')) || []);
  }, []);

  const handleRemoveFromBookshelf = (key) => {
    const updatedBookshelf = bookshelf.filter(book => book.key !== key);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    setBookshelf(updatedBookshelf);
  };
  return (
    <div className="container mx-auto p-4 border border-gray-600">
      <h1 className="text-2xl font-bold">My Bookshelf</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookshelf.map((book, index) => (
          <div key={index} className="border p-4">
            <h2 className="text-lg font-bold">Book Title: <span className='font-normal'>{book.title}</span></h2>
            <p className="text-lg font-bold">Edition Count:  <span className='font-normal'>{book.edition_count}</span></p>
            <button
              className="mt-2 bg-red-500 text-white py-1 px-2 rounded"
              onClick={() => handleRemoveFromBookshelf(book.key)}
            >
              Remove from Bookshelf
            </button>
          </div>
        ))}
      </div>
      <Link to="/" className="mt-4 inline-block bg-teal-600 text-white py-2 px-4 rounded">
        Back to Search
      </Link>
    </div>
  );
};

export default Shelf;
