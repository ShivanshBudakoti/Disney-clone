import styled from "styled-components";
import Imgslider from "./Imgslider.js";
import Newtodisney from "./newtodisney.js";
import Recommends from "./recommende.js";
import Trending from "./Trending.js";
import Viewers from "./viewers.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import db from "./firebase.js";
import { setMovies } from "../features/movie/movieSlice.js";
import { selectUserName } from "../features/users/userSlice.js";
import Original from "./orignals.js";
import Login from "./login.js";
const Home =(props)=>{
    const dispatch=useDispatch();//alow us to use disatch
    const username = useSelector(selectUserName);//acces user name
    const history=useNavigate();
let recommend =[];
let newDisney=[];
let originals=[];
let trending=[];
useEffect(()=>{
    db.collection('movies').onSnapshot((snapshot)=>{
        snapshot.docs.map((doc)=>{
        switch(doc.data().type){
            case 'recommend':
          //  recommend.push({id:doc.id,...doc.data()});
            recommend=[...recommend,{id:doc.id,...doc.data()}];

            break;
            case 'new':
          //  recommend.newDisney({id:doc.id,...doc.data()});
            newDisney=[...newDisney,{id:doc.id,...doc.data()}];

            break;
            case 'original':
            //originals.push({id:doc.id,...doc.data()});
            originals=[...originals,{id:doc.id,...doc.data()}];

            break;
            case 'trending':
          //  trending.push({id:doc.id,...doc.data()});
          trending=[...trending,{id:doc.id,...doc.data()}];

            break;
        }//3:36
        })
        {console.log(originals) }

dispatch(setMovies({
    recommend:recommend,
    newDisney:newDisney,
    trending:trending,
    originals:originals,
})
) })
},[username])
    return (
      username
      ?
    <Container><Imgslider/>
    <Viewers/>
    <Recommends/>
    <Original/>
    <Newtodisney/>
    <Trending/>
    </Container>
     :<Login/>
    ) ;

};

const Container=styled.main`
position:relative;
min-height:calc(90vh - 250px);
overflow-x:hidden;
overflow-y:hidden;
width:100%;
display:block;
top:70px;
padding:0 calc(3.5vw + 5px);
&:after{
    background:url('/image/home-background.png') center center/cover
    no-repeat fixed;
    content:'';
    position:absolute;
    inset:0px;//just like margin
    opacity:1;
    z-index:-1;
};
`;
export default Home;