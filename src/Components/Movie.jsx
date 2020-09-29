import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import './Movie.css';

function Movie(props) {
	
	return (
		<div className="movie">
			<div className="movieInfo">
				<div className="votes"> 
					<span>^</span><p>{props.movie.voting}</p><span>V</span>
				</div>
				<img src={props.movie.poster} alt="na"/>
				<div className="details">
				<h3>{props.movie.title} </h3>
				<p>Genre: {props.movie.genre}</p>
				<p>Director: {props.movie.director.forEach((e, i) => {
					if (i === 0) {
						return e;
					}else {
						return "," + e;
					}
				} )} </p>
				<p>Starring: {props.movie.stars.forEach((i,e) => 
				{
					if (i === 0) {
						return <span>{e}</span>;
					}else {

						return <span>{e}</span>;
					}
				}
				)}</p>
				<p>{props.movie.runTime} Mins | {props.movie.language} | {props.movie.releasedDate} </p> 
				</div>
			</div>
			
			<div className="watchButton">
			 <a href="https://youtube.com" className="trailer">Watch Trailer</a>
			</div>
		</div>
	)
}



function MovieList() {
	const [movies, setMovies] = useState([{
        "_id": "5d9448106e6974498e97e844",
        "description": "",
        "director": ["Prashanth Neel"],
        "writers": ["Prashanth Neel"],
        "stars": ["Sanjay Dutt,Raveena Tandon,Yash,Srinidhi Shetty"],
        "productionCompany": ["Prashanth Neel"],
        "pageViews": 90,
        "upVoted": [],
        "downVoted": [],
        "title": "K.G.F: Chapter 2",
        "language": "Kannada",
        "runTime": null,
        "releasedDate": 1601580599,
        "genre": "action,drama",
        "voted": [{
            "upVoted": [],
            "downVoted": [],
            "_id": "5d9448106e6974498e97e846",
            "updatedAt": 1569998864,
            "genre": "action"
        }, {
            "upVoted": ["5e1d4475416a070ee7add99c"],
            "downVoted": [],
            "_id": "5d9448106e6974498e97e845",
            "updatedAt": 1569998864,
            "genre": "drama"
        }],
        "poster": "https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1569998864699_K.G.F:_Chapter 2.jpg",
        "totalVoted": 0,
        "voting": 0
    }]);
	const data = {
		"category": "movies",
		"language": "kannada",
		"genre": "all",
		"sort": "voting"
	};
	const config = {
		
		headers: {
			'Content-Type': 'application/json',
			"Access-Control-Allow-Origin": "*",
			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
		}
	};
	Axios.post("https://hoblist.com/movieList", data, config)
	.then(res => {
		
		setMovies(res.data.result);	
	})
	.catch(err => console.log(err));
	
	useEffect(() => console.log(movies), [movies]);
	
	// {movies.map(m => <Movie key={m._id} movie={m} />)}
	return (
		<div id="movieList">
			{movies.map(m => <Movie key={m._id} movie={m} />)}
		</div>
	)

}

export default MovieList;
