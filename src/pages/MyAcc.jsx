import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";

import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const MyAcc = () => {
  return (
    <div>
      <Navbar />
      <Announcement />

      <NewsLetter />
      <Footer />
    </div>
  );
};

export default MyAcc;
