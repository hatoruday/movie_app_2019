import React from 'react';
import axios from "axios";
//fetch위에 있는 작은 layer 예를 들면 땅콩 주위의 멋진 초콜릿. 설치하기 위해서는 'npm i axios'
import Movie from "../components/Movie.js"
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading:true,
    movies: []
  }

  getMovies = async() => {
    const {
      data: {
        data : {
          movies}
        }
      } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating")//axios가 데이터를 받아올릴 때 까지
    // 약간 시간이 걸림. 즉 componentDidMount함수가 끝날때까지 시간이 걸림. 그러므로 함수 이름 앞에 async를 넣거나
    //getMovies를 만든 다음에 componentDidMount에서 호출하면 됨.async와 await를 붙임으로써 불러올때까지 기다려줌.
    //await를 하기 위해서는 async함수 안에서 사용가능하다.
    //console.log(movies.data.data.movies)대신 console.log(movies)를 하더라도 되도록 {data: {data : {movies}}}이짓을 함.
    this.setState({movies, isLoading:false})//ES6에서 movies:movies를 movies하나로 축약해서 사용하더라도 js가 인식할 수 있다.
  }
  componentDidMount() {
    /*
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000)//6초 js의 함수임. 
    */
   this.getMovies();
  }
  render() {
    const {isLoading, movies} = this.state;//밑에서 this.state.isLoading을 사용하고 싶지 않기 때문에 사용하는 것.
    return <section className="container">
      {isLoading ? (
       <div className="loader">
         <span className="loader_text">Loading...</span>
       </div> 
      ) : (
        <div className = "movies">
          {movies.map(movie => (
        <Movie 
        key = {movie.id}
        id = {movie.id} 
        year = {movie.year} 
        title = {movie.title} 
        summary = {movie.summary} 
        poster = {movie.medium_cover_image} 
        genres = {movie.genres}
        />
        ))}
        </div>
      )
      }
    </section>;
  }
}
//yts.am에 접속한다음 맨 밑 하단의 api클릭. api endpoints 에서 list movies클릭. 링크중 json접속
//위에 하는 짓 필요 없고 계속 주소가 바뀌기 때문에 https

export default Home;