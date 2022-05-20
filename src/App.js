import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Pages/Header";
import HomePage from "./Pages/HomePage";
import MovieInfo from "./Pages/MovieInfo";
import Person from "./Components/Person";

function App() {
  return (
    <BrowserRouter>
        <div className="header">
            <div className="container">
                <Header/>
            </div>
        </div>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/movie/:id" element={<MovieInfo/>}/>
            <Route path="/person/:id" element={<Person/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
