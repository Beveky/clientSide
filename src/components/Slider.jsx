import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../../Data";
import { mobile, mobile2, mobile3, mobile4, mobile5 } from "../Responsive";

const Containerr = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background: linear-gradient(
    to bottom,
    white 70%,
    #181818 70%,
    #181818 97.1%,
    white 97.1%,
    white 100%
  );
  position: relative;

  ${mobile({
    display: "none",
  })}
  ${mobile4({
    display: "none",
  })}${mobile5({
    display: "none",
  })}
`;
const Arrow = styled.div`
  height: 50px;
  width: 50px;
  background-color: #c79d6b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.7;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const ImageContainer = styled.div`
  height: 80%;
  flex: 1;
`;
const Image = styled.img`
  height: 100%;
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
  ${mobile2({
    fontSize: "50px",
  })}
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile3({
    fontSize: "15px",
  })}
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    // Disable horizontal scrolling when the slider is active
    document.body.style.overflowX = "hidden";

    // Cleanup function to re-enable scrolling when the component is unmounted
    return () => {
      document.body.style.overflowX = "visible";
    };
  }, []);
  //////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////
  useEffect(() => {
    const interval = setInterval(() => {
      // Automatically trigger the handleClick function every 10 seconds
      setSlideIndex((prevIndex) => (prevIndex < 4 ? prevIndex + 1 : 0));
    }, 10000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  //////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 4);
    } else {
      setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Containerr>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <ImageContainer>
              <Image style={{ height: "800px" }} src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Containerr>
  );
};

export default Slider;
