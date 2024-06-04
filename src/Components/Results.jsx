import React, { useEffect, useState } from 'react'

function Results({book}) {
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
      const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
      setIsAdded(bookshelf.some(item => item.key === book.key));
    }, [book]);
  
    const handleAddToBookshelf = () => {
      const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
      if (!bookshelf.some(item => item.key === book.key)) {
        bookshelf.push(book);
        localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
        setIsAdded(true);
      }
    };
  
    const handleRemoveFromBookshelf = () => {
      const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
      const updatedBookshelf = bookshelf.filter(item => item.key !== book.key);
      localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
      setIsAdded(false);
    };
    
  return (
    <>
        <div  className='mt-6'>
        <div className="border border-gray-700 p-4">
      <h2 className="text-lg font-bold">Book Title: <span className='font-normal'>{book.title}</span></h2>
      <p className="text-lg font-bold">Edition Count: <span className='font-normal'> {book.edition_count}</span></p>
      
      {isAdded ? (
        <button
          className="mt-2 bg-red-500 text-white py-1 px-2 rounded"
          onClick={handleRemoveFromBookshelf}
        >
          Remove from Bookshelf
        </button>
      ) : (
        <button
          className="mt-2 bg-teal-700 text-white py-1 px-2 rounded"
          onClick={handleAddToBookshelf}
        >
          Add to Bookshelf
        </button>)}
    </div>
   



        </div>

    </>
  )
}

export default Results