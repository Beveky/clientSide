import { Visibility } from "@mui/icons-material";
import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { removeItem } from "../redux/wishlistRedux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px; // Add some spacing between items
`;

const ItemImage = styled.img`
  width: 100px; // Set a fixed size or make it responsive
  height: 100px;
  object-fit: cover;
  margin-right: 20px; // Add some spacing between the image and the text
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.h3``;

const ItemDescription = styled.p`
  color: #666; // Example color, adjust as needed
`;
const DeleteButton = styled.button`
  padding: 5px 10px;
  color: white;
  border: none;
  cursor: pointer;
  margin-left: auto; // Push the button to the far right if using flex
  background-color: black;
  font-weight: 600;
  border-radius: 4px;
`;
const TopButton = styled.button`
  margin-top: 50px;
  margin-left: 50px;
  margin-bottom: 50px;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const wish = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  console.log(wishlistItems);

  const handleRemoveItem = (id) => {
    console.log(`Removing item with id: ${id}`);
    dispatch(removeItem(id));
  };

  return (
    <div>
      <Navbar />
      <Announcement />
      <div>
        <Link to="/">
          <TopButton>CONTINUE SHOPPING</TopButton>
        </Link>

        {wishlistItems && wishlistItems.length > 0 ? (
          wishlistItems.map((item) => (
            <div
              style={{
                marginTop: "50px",
                marginBottom: "50px",
                marginLeft: "50px",
                marginRight: "50px",
              }}
            >
              <ItemContainer key={item._id}>
                <ItemImage src={item.img} alt={item.title} />
                <ItemDetails>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemDescription>{item.description}</ItemDescription>
                </ItemDetails>

                <DeleteButton onClick={() => handleRemoveItem(item._id)}>
                  Delete
                </DeleteButton>
                <div style={{ width: "20px" }} />
                <Link to={`/product/${item._id}`}>
                  <DeleteButton>View</DeleteButton>
                </Link>
              </ItemContainer>
            </div>
          ))
        ) : (
          <div
            style={{
              height: "50vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>No items in wishlist</p>
          </div>
        )}
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default wish;
