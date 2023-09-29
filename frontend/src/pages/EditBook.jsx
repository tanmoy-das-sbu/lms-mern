import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setTitle(res.data.title);
        setLoading(false);
      })
      .catch((err) => {
        alert('An unexpected error happened, check console log.');
        console.log('error', err);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);

    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/home');
      })
      .catch((err) => {
        setLoading(false);
        console.log('error', err);
        alert('An error happened. Please check console');
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading ? <Spinner /> : 
      <div className="flex flex-col border rounded-xl w-full max-w-md p-4 mx-auto bg-white shadow-lg">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={'Title'}
            className="border border-gray-500 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder={'Author'}
            className="border border-gray-500 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            placeholder={'Publish Year'}
            className="border border-gray-500 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700 m-8"
          onClick={handleEditBook}
        >
          Save
        </button>
      </div>}
    </div>
  );
};

export default EditBook;
