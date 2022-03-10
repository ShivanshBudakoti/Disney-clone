import styled from "styled-components";
import Imgslider from "./Imgslider.js";
import Newtodisney from "./newtodisney.js";
import Orignals from "./orignals.js";
import Recommends from "./recommende.js";
import Viewers from "./viewers.js";
const Home =(props)=>{
    return (
    <Container><Imgslider/>
    <Viewers/>
    <Recommends/>
    <Orignals/>
    <Newtodisney/>
    </Container>
     );
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