import React, {useEffect, useState} from "react";
import './App.css';

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    const getPostData = async () => {
      const posts = await fetch("https://jsonplaceholder.typicode.com/posts/")
          .then(posts => posts.json());
      setData(posts)
    };
    getPostData();
  }, []);

  return (
    <div>
      <h1>Fetch Data</h1>
      {data?.map(post => (<h2>{post.title}</h2>))}
    </div>
  );
}

export default App;
