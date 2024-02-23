import React from "react";
import { Row, Col } from "react-bootstrap";
import Homecard from "../components/card/Homecard";
import Menimage from "../Assets/images/category-1.jpg";
import womenimage from "../Assets/images/category-2.jpg";
import kidsimage from "../Assets/images/category-3.avif";
function Cardhold() {

  
   const cardData = [
     {
       id: "men",
       cateimg: Menimage,
       category: "MEN",
       cardtext: "Some collections of men specifically if they want to purchase something they need.",
       route: "/mens",
     },
     {
       id: "women",
       cateimg: womenimage,
       category: "WOMEN",
       cardtext:
         "Some collections of women specifically if they want to purchase something they need.",  
       route: "/womens"
     },
     {
       id: "kids",
       cateimg: kidsimage,
       category: "KIDS",
       cardtext:
         "Some collections of kids specifically if they want to purchase something they need.",
       route:'/kids'
     },
   ];
  return (
    <div>
      <Row>
        {cardData.map(({ id, cateimg, category, cardtext, btnname,route }) => (
          <Col key={id} id={id}>
            <Homecard
              id={id}
              cateimg={cateimg}
              category={category}
              cardtext={cardtext}
              btnname="SHOP NOW"
              route={route}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
export default Cardhold;
