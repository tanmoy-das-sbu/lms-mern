import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((res) => {
        setBooks(res.data.data);
        console.log(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log('error', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <div className="max-w-full w-full h-full p-8 bg-white rounded-lg shadow-lg overflow-x-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl">Book List</h1>
          <Link to="/books/create">
            <MdOutlineAddBox className="text-sky-800 text-4xl"></MdOutlineAddBox>
          </Link>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <table className="w-full table-auto border">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b border-gray-300">No</th>
                <th className="py-2 px-4 border-b border-gray-300">Title</th>
                <th className="py-2 px-4 border-b border-gray-300">Author</th>
                <th className="py-2 px-4 border-b border-gray-300">
                  Publish Year
                </th>
                <th className="py-2 px-4 border-b border-gray-300">
                  Operations
                </th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr
                  key={book._id}
                  className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                >
                  <td className="py-2 px-4 border-b border-gray-300 text-center">
                    {index + 1}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    {book.title}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    {book.author}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    {book.publishYear}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    <div className="flex justify-center gap-x-4">
                      <Link to={`/books/details/${book._id}`}>
                        <BsInfoCircle className="text-2xl text-green-800" />
                      </Link>
                      <Link to={`/books/edit/${book._id}`}>
                        <AiOutlineEdit className="text-2xl text-yellow-600" />
                      </Link>
                      <Link to={`/books/delete/${book._id}`}>
                        <MdOutlineDelete className="text-2xl text-red-600" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Home;
