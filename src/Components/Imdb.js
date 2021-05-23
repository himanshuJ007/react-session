import React, {useState} from 'react';
import './Imdb.css';
import axios from "axios";


function Imdb() {
    const [moviesData,setMoviesData] = useState([]);
    const [searchInput,setSearchInput] = useState('');
    const handleGetData = async ()=>{
        console.log(searchInput);
        const res = await axios.get(`https://imdb8.p.rapidapi.com/auto-complete/?q=${searchInput}`,{
            headers: {
                'x-rapidapi-key': 'eb3df15a07msh2652ba1a5bf626ap1bcd61jsndb930e737e26',
                'x-rapidapi-host': 'imdb8.p.rapidapi.com'
            }
        });
        console.log(res.data.d);
        setMoviesData(res.data.d);
    }
    const handleInputChange = (e)=>{
        setSearchInput(e.target.value);
    }
    //array / json
    /**
     * filter
     * push
     * pop
     * map
     * shift
     * unshift
     * split
     * slice
     * join
     *
     *
     * spread
     * rest
     *
     * const ob ={
     *     key:{
     *         key1:val1,
     *     }
     * }
     *ob['key2']=himanshu,
     * //key2:'himanshu'
     */

    return (
        <div>
        <header>
            <div className="container">
                <div className="headerInner">
                    <div className="logo">
                        <span>IMDB Bitch</span>
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Search" onChange={handleInputChange} value={searchInput}/>
                        <button onClick={handleGetData}>Search</button>
                    </div>
                </div>
            </div>
        </header>

        <section className="movies">
            <div className="container">
                <div className="moviesInner">
                    {moviesData.map((value) => (
                    <div className="movieCard">
                        {/*{( value && value.i && value.i.imageUrl)}*/}
                        {value?.i?.imageUrl ? <img style={{width:'100%',height:'215px'}} src={value?.i?.imageUrl} /> : <img src='https://images-na.ssl-images-amazon.com/images/G/02/shazam/JKRY-S2-01598-DigitalROSStatic-ARSDE-300x250-Hero-ADSP-02-POST-cfa4d7eb-a68c-4f2a-bf43-70dcad20f010.jpg'/>}
                        <div className="movieContent">
                            <h4>{value.name}</h4>
                            <p><b>Release Date:</b> <span>{value.release}</span></p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>

        <footer>
            <p>@copyright 2021 IMDB Bitch</p>
        </footer>

        </div>
    ) ;
}
export default Imdb;