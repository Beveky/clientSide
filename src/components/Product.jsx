import { FavoriteBorderOutlined, Visibility } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addItem, removeItem } from "../redux/wishlistRedux";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f6f6;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
    cursor: pointer;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ isFavorite }) => (isFavorite ? "#dd2b5c" : "white")};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ isFavorite }) =>
      isFavorite ? "#dd2b5c" : "#c79d6b"};
    transform: scale(1.1);
    opacity: 0.5;
  }
`;

const Product = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  useEffect(() => {
    console.log("item:", item); // Log the value of item
    if (wishlistItems) {
      const isInWishlist = wishlistItems.some(
        (wishlistItem) => wishlistItem._id === item._id
      );
      setIsFavorite(isInWishlist);
    }
  }, [wishlistItems, item]);

  const toggleFavorite = () => {
    setIsFavorite((prevState) => !prevState);
    if (!isFavorite) {
      dispatch(addItem(item));
    } else {
      dispatch(removeItem(item._id));
    }
  };

  return (
    <Container>
      <Circle />
      <Image src={item?.img} />
      <Info>
        <Icon>
          <Link to={`/product/${item?._id}`}>
            <Visibility />
          </Link>
        </Icon>
        <Icon isFavorite={isFavorite} onClick={toggleFavorite}>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
