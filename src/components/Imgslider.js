import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
const Imgslider=(props)=>{
    let setting={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        
    };
    return (
            <Carousel {...setting}>
                <Wrap>
                    <a>
                <img src="/image/slider-badag.jpg"/>
                </a>
                </Wrap>
                <Wrap>
                    <a>
                <img src="/image/slider-badging.jpg"/>
                </a>
                </Wrap>
                <Wrap>
                    <a>
                <img src="/image/slider-scale.jpg"/>
                </a>
                </Wrap>
                <Wrap>
                    <a>
                <img src="/image/slider-scales.jpg"/>
                </a>
                </Wrap>
                
            </Carousel>
    )
};
const Carousel=styled(Slider)`
margin-top:20px;
padding:10px 20px;
& > button{
    opacity:0;
    width:5vw;
    z-index:1;
    &:hover{
        opacity:1;
        transition:opacity 0.2s ease 0s
    }
}
ul li button{
    &:before{
        font-size:10px;
        color:grey;
    }
}
li.slick-active button:before{
    color:white;
}
.slick-list{
    overflow:initial;
}
.slick-prev{
    left:-65px;
}
.slick-next{
    right:-65px;
}
`;
const Wrap=styled.div`
border-radius:4px;
cursor:pointer;
position:relative;
a{
    border-radius:4px;
    box-shadow:rgb(0 0 0/69%) 0px 26px 30px -10px,rgb(0 0 0/73%) 0px 26px 30px -10px, // obatain from net as what type of color u want on hover over box
    cursor:pointer;
    display:block;
    height:100%;
    position:relative;
    padding:4px;
    img{
        width:100%;
        height:100%;
    }
    &:hover{
        padding:0px;
        border:4px solid white;
        transition-duration:200ms;
    }
}
`;

export default Imgslider;