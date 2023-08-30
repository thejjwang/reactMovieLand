import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=33bbe8bc"
const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data.Search)
    }

    useEffect(() => {
        searchMovies('spiderman')
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                placeholder="Search for movies"
                value=""
                onChange={() => {}}
                />
                <img 
                src={SearchIcon}
                alt="search"
                onClick={() => {}}
                />
            </div>
        </div>
    );
}

export default App