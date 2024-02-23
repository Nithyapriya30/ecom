import React, { useEffect, useState } from "react";
import WishlistPage from "./WishListPage";
import MyNavbar from "./navbar/Navbar";

function Wish() {
  const [wishlistData, setWishlistData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/Wishlist")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch wishlist data");
        }
        return response.json();
      })
      .then((data) => setWishlistData(data))
      .catch((error) => console.error("Error fetching wishlist data:", error));
  }, []);

  return (
    <div>
      <MyNavbar/>
      <WishlistPage wishlist={wishlistData} />
    </div>
  );
}

export default Wish;
