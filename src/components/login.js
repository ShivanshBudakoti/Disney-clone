import styled from'styled-components'
const Login=(props)=>{
    return <Container><Content>
        <CTA>
           <CTALogoone src='/image/cta-logo-one.svg' />
           <Signup>Get all the adventures of disney</Signup>
           <Description>Pack your bags for an adventure of disney where you will see disney princess stealing your heart,Brave warriors fighting to protect others ,Dangerous pirate concurring the sea,Avengers saving planet earth from outter danger,and many more</Description>
           <CTALogotwo src="/image/cta-logo-two.png"/>
           </CTA><Bgimage/></Content></Container>
} 
const Container=styled.section`
overflow:hidden;
dispaly:flex;
flex-direction:column;
text-align:center;
height:100vh;
`;
const Content=styled.div` 
margin-bottom:10vh;
width:100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding:80px 40px;
height:100%;
`;
const Bgimage=styled.div`
height:100%;
background-position:top;
background-size:cover;
background-repeat:no-repeat;
background-image:url('/image/login-background.jpg');
position:absolute;
top:0;
right:0;
left:0;
z-index:-1;
`;
 const CTA=styled.div`
margin-bottom:2vw;
max-width:650px;
flex-wrap:wrap;
display:flex;
flex-direction:column;
justify-content:center;
margin-top:0;
align-items:center;
text-align:center;
margin-right:auto;
margin-left:auto;
transition-timing-function:ease-out;
transition: opacity .2;
width:100%;
 `;
 const CTALogoone=styled.img`
 margin-bottom:12px;
 max-width:650px;
 min-height:3px;
 display:block;
 width:100%;
 `;
 const CTALogotwo=styled.img`
 margin-top:10px;
 margin-bottom:12px;
 max-width:650px;
 min-height:3px;
 display:block;
 width:100%;
 `;
const Signup=styled.a`
font-weight:bold;
color:#f9f9f9;
background-color:#0063e5;
margin-bottom:12px;
width:100%;
letter-spacing:1.5px;
padding:10px;
border: 1px solid transparent;
border-radius:4px;
&:hover{
    background-color:#0483ee;

}`;
const Description=styled.p`
font-size:11px;
margin:0 0 23px;
line-height:1.5;
letter-spacing:1.5px;
`
export default Login;