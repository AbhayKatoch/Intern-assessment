import { useState ,useEffect } from 'react'
import axios from 'axios';
import Results from './Results'
import { Link } from 'react-router-dom';
import './Search.css'

function Search() {
  const [query, setQuery] = useState("");
  const [books,setBooks] = useState([]);
  const [bookshelf, setBookshelf] = useState(() => JSON.parse(localStorage.getItem('bookshelf')) || []);

   
    useEffect(()=>{
      if(query.length>0){
        axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then(response => {
          setBooks(response.data.docs);
        })
      }
        
},[query]);


  

  return (
    <>
      <div className="grid ">
    <div className="font-bold text-3xl md:text-4xl lg:text-5xl" >
      Internship Challenge
      
    </div>
    
    <div className="font-bold text-5xl mt-6 text-teal-900 md:text-5xl lg:text-6xl" >
      Personal Bookshelf
      
    </div>

    <div>
    </div>
      <Link to="/bookshelf" className=' mt-6 w-fit mx-auto bg-teal-700 text-white rounded-xl p-3'>
        My Bookshelf

      </Link>
    <div className="grid grid-cols-1 mt-12 min-w-52 justify-items-center mx-auto rounded-full  w-2/3 h-16 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">

        <div className='grid grid-cols-[1fr_auto] justify-between gap-x-6 px-8 items-center w-full '>
          
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Type book name' className=' min-w-full  bg-transparent text-lg font-semibold outline-none'/>
      
         
        </div>
    </div>

    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map(book => (
          <Results key={book.key} book={book} />
        ))}
      </div>
    </div>
    
    </>
  )
}

export default Search
