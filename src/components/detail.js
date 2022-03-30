import { useEffect,useState } from "react";
import {useParams} from 'react-router-dom';//usefull for writing in url
import db from "./firebase";
import styled from "styled-components";
const Detail= (props)=>{
    const{id}=useParams();
    const [detail,setdetail]=useState({});
    useEffect(()=>{
     db.collection('movies').doc(id).get().then((doc)=>{
         if(doc.exists){
             setdetail(doc.data());
         }
         else{
             console.log('no such doc exist');
         }
     })
    },[id]);
    return <Container>
        <Background>
            <img src={detail.backgroundImg}/>
        </Background>
        <Imgtitle>
        <img src={detail.titleImg}/>
        </Imgtitle>
        <Content>
            <Control>
                <Player>
                <img src='/image/play-icon-black.png'/>
                <span>Play</span>
               </Player>
               <Trailer>
               <img src='/image/play-icon-white.png '/>
               <span>Trailer</span>
               </Trailer>
               <Addlist>
                   <span></span>
                   <span></span>
               </Addlist>
               <Groupicon>
                       <img src="/image/group-icon.png"/>
               </Groupicon>
            </Control>
            <Subtitle>{detail.subTitle}</Subtitle>
            <Description>{detail.description}</Description>
        </Content>
        </Container>
}
const Container=styled.div`
positon:relative;
margin-top:30px;
min-height:calc(100vh - 250px);
overflow-x:hidden;
dispaly:block;
top:82px;
padding:0 calc(3.5vw + 5px);
`;
const Background=styled.div`
margin-top:60px;
left:0px;
opacity:0.7;
top:20px;
right:0px;
position:fixed;
left:0px;
z-index:-1;
height:100%;
width:100%;
img{
    width:100%;
    height: 1005;
    

// @media(max-width:768px){
//     width:initial;
// }
};`;
const Imgtitle=styled.div`
margin-top:100px;

padding-top:60px;
align-items:felx-end;
display:flex;
-webkit-box-pack:start;
justify-content:flex-start;
margin:0px auto;
height:30vh;
min-height:170px;
padding-bottom:24px;
width:100%;
img{
    max-width:600px;
    min-width:200px;
    width:35vw;
}
`;
const Content=styled.div`
margin-top:30px;
padding-top:30px;
max-width:874px;
`;
const Control=styled.div`
align-items:center;
display:flex;
flex-flow:row nowrap;
margin:24px 0px;
min-height:56px;`;

const Player=styled.button`
font-size:15px;
display:flex;
align-items:center;
letter-spacing:1.8px;
margin:0px 23px 0px 0px;
padding:0px 24px;
border-radius:4px;
border:none;
cursor:pointer;
height:56px;
justify-content:center;
text-align:center;
text-transform:uppercase;
background:rgb(249,249,249);
color:rgb(0,0,0);
img{
 width:32px;
}
&:hover{
    background:rgb(198,198,198);
}
@media(max-width:768px){//for mobile device
    height:45px;
    padding:0px 22px;
    font-size:12px;
    margin:0px 10x 0px 0px;
    img{width:26px;}
}
`;
const Trailer=styled(Player)`//it will retreie everything from player
background:rgba(0,0,0,0.3);
border: 1px solid grey;
color:white;
`;
const Addlist=styled.div`
margin-right:16px;
height:44px;
width:44px;
display:flex;
justify-content:center;
align-items:center;
background-color:rgba(0,0,0,0.7);
border-radius:50%;
border:2px solid white;
cursor:pointer;
span{
    background-color:white;
    display: inline-block;
    &:first-child{
        height:2px;
        transform:transition(1px,0px);
        width:16px;
    }
    &:nth-child(2){
        height:16px;
        transform: translate(-8px);
        width:2px;
    }
}`;

 const Groupicon=styled.div`
 height:44px;
 width:44px;
 border-radius:50%;
 border:2px solid white;
 margin-left:13px;
 background-color:black;
 img{
     width:100%;
 }
 `;
const Subtitle=styled.div`
color:white;
font-size:15px;
min-height:28px;
@media(max-width:768px){
    font-size:12px;
}`;
const Description=styled.div`
line-height:1.4;
font-size:25px;
padding:16px 0px;
color:white;
@media(max-width:768px)
{
    font-size:14px;
}`;

export default Detail;