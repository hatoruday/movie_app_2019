import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

//movie component가 state를 가질 필요가 없기 때문에
// class component가 아닌 function component를 사용한다.
//img에서 alt와 title을 사용하는 이유는 mouse를 위에 올렸을 때, movie의 이름이 있음.
function Movie({id, year, title, summary, poster, genres}) {
    return (
    <Link to={{
        pathname:`/movie/${id}`,
        state: {
            year,
            title,
            summary,
            poster,
            genres
        }
    }}>
    <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
            <h3 className="movie__title" style = {{}}>{title}</h3>
            <ul className="genres">
                {genres.map((genre, index) => (//map안의 리스트는 구별이 되어야함.
                <li key = {index} className='genres__genre'>
                    {genre}
                </li>
                ))}
            </ul>
            <h5 className="movie__year">{year}</h5>
            <p className="movie__summary">{summary.slice(0, 140)}...</p>
            
        </div>
    </div>
    </Link>
    );

}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;