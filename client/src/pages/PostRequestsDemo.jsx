import {useEffect, useState} from 'react';
import axios from 'axios';

const PostRequestDemo = () => {
  const [post, setPost] = useState({});


  useEffect(() => {
    async function postRequest() {
      const payload = {
        title: "foo",
        body: "bar",
        userId: 1
      };

    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      payload
    );

      setPost(response.data);
    }

    postRequest();
  }, []);

  return (
    <div className="bg-white p-5 rounded shadow-2xl">
      <button className='btn-primary' >Click me</button>
      <h1 className="text-2xl font-bold">Post Request</h1>
      <p className="text-lg">Title: {post.title}</p>
      <p className="text-lg">Body: {post.body}</p>
      <p className="text-lg">User ID: {post.userId}</p>
    </div>
  );
};

export default PostRequestDemo;
