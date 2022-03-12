import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectrecommend } from "../features/movie/movieSlice";
import { Link } from "react-router-dom";// we click on link and it does not refresh 
const Recommends=(props)=>{
    
    const movies = useSelector(selectrecommend);
    console.log(movies)
    return(
        <Container>
            <h4>Recommended For You</h4>
            <Content>
                { movies &&
                     movies.map((movie,key)=>(
                        <Wrap key={key}>
                            {movie.id}
                        <Link to={`/detail/` + movie.id}>
                    <img src={movie.cardImg} alt={movie.title}/>
                    {console.log(movie.id)}
                    </Link>
                    </Wrap>
                     ))
}
            </Content>
        </Container>
    )
}
const Container=styled.div`
padding:0 0 26px;`;
const Content=styled.div`
display:grid;
grid-gap:35px;
grid-template-columns:repeat(4,minmax(0,1fr));
@media (max-width:768px){
    grid-template-columns:repeat(2,minmax(0,1fr));
}`;
const Wrap=styled.div`
padding-top:56.25%;
border-radius:10px;
box-shadow:rgb(0 0 0 / 70%) 0px 26px 30px -10px,
rgb(0 0 0 / 72%) 0px 15px 10px -10px;
cursor:ponter;
overflow:hidden;
position:relative;
transition:all 250ms cubic-bezier(0.25,0.45,0.45,0.94) 0s;
border:3px solid white;
img{
    inset:0px;
    display:block;
    height:100%; 
    object-fit:cover;
    opacity:1;
    position:absolute;
    transition:opacity 500ms ease-in-out 0s;
    width:100%;
    z-index:1;
    top:0;
}
&:hover{
    box-shadow:rgb(0 0 0 / 80%) 0px 40px 59px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform:scale(1.05);
    border-color:rgba(249,249,249,0.9);
}
`;
export default Recommends;