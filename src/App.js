import React, {useState} from 'react';
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import './styles/App.css';

function App() {

  const [posts, setPosts] = useState([
      {id: 1, title: 'Javascript', body: 'Description'},
      {id: 2, title: 'Python', body: 'Description'},
      {id: 3, title: 'Rust', body: 'Description'},
    ]);

  
  return (
    <div className="App">
      {posts.map(post => 
        <PostItem post={post} key={post.id}/>
        )}
    </div>
  );
}

export default App;

// https://youtu.be/GNrdg3PzpJQ?si=e9J2WCS2rl3rDC9s  39:54