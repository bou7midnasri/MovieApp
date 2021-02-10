import React, {useState} from 'react'
import {movieData} from './components/MoviesData.js'
import Main from './components/Main'
import Header from './components/Header';
//import StartRating  from './StartRating.js'
import './App.css';

function App() {
  const [movies, setmovies] = useState(movieData)
  const [Input, setInput] = useState("");
  const [Rate, setRate] = useState(0);
  const AddNewModal=(x)=>{setmovies([...movies, x])}
  return (
    <div className="App">
   <Header setInput={setInput} Rate={Rate} setRate={setRate}
   AddNewModal={AddNewModal }
   /> 
      <Main
        movies={movies.filter(
          (el) =>
            el.title.includes(Input.trim()) &&
            el.rating >= Rate
        )} />
        
     
    </div>
    
  
  );
}

export default App;
