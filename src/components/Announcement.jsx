import styled from "styled-components";

const Containerr = styled.div`
  height: 30px;
  background-color: #181818;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Containerr>Super Deal !!! Free Shipping on Orders Over $50</Containerr>
  );
};

export default Announcement;
