import styled from "styled-components";
import { auth, provider } from "./firebase";
const Header=(props)=>{
    const handleAuth=()=>{
        auth.signInWithPopup(provider)
        .then(res=>{console.log(res);})
    }
    return (<Nav>
        <Logo><img src="/image/logo.svg"/></Logo>
        <Navmenu>
            <a href="/home"><img src='/image/home-icon.svg'/>
            <span>Home</span></a>
            <a href="/home"><img src='/image/search-icon.svg'/>
            <span>Search</span></a>
            <a href="/home"><img src='/image/watchlist-icon.svg'/>
            <span>Watchlist</span></a>
            <a href="/home"><img src='/image/original-icon.svg'/>
            <span>Originals</span></a>
            <a href="/home"><img src='/image/movie-icon.svg'/>
            <span>Movies</span></a>
            <a href="/home"><img src='/image/series-icon.svg'/>
            <span>Series</span></a>
        </Navmenu>
        <Login onClick={handleAuth}>Login</Login> 
    </Nav>) 
}
const Nav=styled.nav`
position:fixed; 
top:0;
left:0;
right:0;
height:70px;
background-color:#090b13;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 36px;
z-index:3;`;

const Logo =styled.a`
padding:0;
width:100px;
margin-top:4px; 
max-height:70px;
fonst-size:0;
dispaly:inline-block;
img{
    display:block;
    width:100%;
};`;
const Navmenu=styled.div`
align-items:center;
display:flex;
flex-flow:row nowrap;
height:100%;
justify-content:flex-end;
margin:0;
padding:0;
position:reative;
margin-right:auto;
margin-left:25px;
@media (max-width:770px){
    display:none;
};
a{
    display:flex;
    align-items:center;
    padding:0 12px;
    img{
        height:20px;
        min-width:20px;
        width:20px;
    };
    span{
        color:rgb(249,249,249);
        font-size:19px;
        letter-spacing:1.4px;
        line-height:1.08;
        padding:2px 0px;
        white-space:nowrap;
        position:relative; 
    
    &:before{
        background-color:rgb(249,249,249);
        border-radius:0px 0px 4px 4px;
        bottom:-6px;
        content:"";
        height:2px;
        left:0px;
        opacity:0;
        position:absolute;
        right:0px;
        transform-origin:left center;
        transform:scaleX(0);
        transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
        visibility:hidden;
        width:auto;
        }; 
    };

&:hover{
    span:before{
        transform:scaleX(1);
        visibility:visible;
        opacity:1 !important; 
    };
};
};
`;
const Login=styled.a`
background-color:rgba(0,0,0.2,0.6);
padding:8px 16px;
text-transform:uppercase;
border:1px solid #f9f9f9;
border-radius:4px;
letter-spacing:1.5px;
transition: all 0.2s ease 0s;
&:hover{
    background-color:#f9f9f9;
    color:black;
}
`;

//as soon as width is less than 770px it will disappear
// 59:29
export default Header; 