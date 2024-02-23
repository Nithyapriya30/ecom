import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "Vibrant Floral Print Off-Shoulder Maxi Dress",
    category: "women",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 3,
    name: "Elegant Lace Trimmed V-Neck Blouse",
    category: "women",
    image: p3_img,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 4,
    name: "Boho Chic Embroidered Fringe Kimono",
    category: "women",
    image: p4_img,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 5,
    name: "Classic Striped Button-Up Oxford Shirt",
    category: "women",
    image: p5_img,
    new_price: 110.25,
    old_price: 145.75,
  },
  {
    id: 6,
    name: "Romantic Ruffle Tiered Midi Skirt",
    category: "women",
    image: p6_img,
    new_price: 115.0,
    old_price: 150.75,
  },
  {
    id: 7,
    name: "Sophisticated Plaid Double-Breasted Blazer",
    category: "women",
    image: p7_img,
    new_price: 105.75,
    old_price: 140.25,
  },
  {
    id: 8,
    name: "Trendy Distressed Denim Skinny Jeans",
    category: "women",
    image: p8_img,
    new_price: 110.75,
    old_price: 145.5,
  },
  {
    id: 9,
    name: "Cozy Cable Knit Turtleneck Sweatere",
    category: "women",
    image: p9_img,
    new_price: 95.25,
    old_price: 129.75,
  },
  {
    id: 10,
    name: "Vintage Inspired Polka Dot Wrap Dresse",
    category: "women",
    image: p10_img,
    new_price: 100.0,
    old_price: 134.75,
  },
  {
    id: 11,
    name: "Modern Color Block Crewneck Sweatshirt",
    category: "women",
    image: p11_img,
    new_price: 95.75,
    old_price: 130.5,
  },
  {
    id: 12,
    name: "Chic Cropped Wide-Leg Jumpsuit",
    category: "women",
    image: p12_img,
    new_price: 125.0,
    old_price: 159.75,
  },
  {
    id: 13,
    name: "Navy Blue Textured Button-Up Casual Shirt",
    category: "men",
    image: p13_img,
    new_price: 110.5,
    old_price: 145.25,
  },
  {
    id: 14,
    name: "Charcoal Gray Knit Pullover Sweater with Crew Neck",
    category: "men",
    image: p14_img,
    new_price: 80.5,
    old_price: 115.25,
  },
  {
    id: 15,
    name: "Black Leather Biker Jacket with Quilted Shoulders",
    category: "men",
    image: p15_img,
    new_price: 120.75,
    old_price: 155.5,
  },
  {
    id: 16,
    name: "Tan Slim Fit Chino Pants with Belt Loops",
    category: "men",
    image: p16_img,
    new_price: 100.25,
    old_price: 135.0,
  },
  {
    id: 17,
    name: "Heather Gray Hooded Sweatshirt with Kangaroo Pocket",
    category: "men",
    image: p17_img,
    new_price: 90.75,
    old_price: 125.5,
  },
  {
    id: 18,
    name: "Maroon Plaid Flannel Shirt with Button-Down Collar",
    category: "men",
    image: p18_img,
    new_price: 115.5,
    old_price: 150.25,
  },
  {
    id: 19,
    name: "Olive Green Cargo Shorts with Multiple Pockets",
    category: "men",
    image: p19_img,
    new_price: 105.0,
    old_price: 140.75,
  },
  {
    id: 20,
    name: "Dark Brown Suede Chelsea Boots with Elastic Panels",
    category: "men",
    image: p20_img,
    new_price: 95.25,
    old_price: 130.0,
  },
  {
    id: 21,
    name: "Beige Linen Blazer with Notched Lapels",
    category: "men",
    image: p21_img,
    new_price: 110.0,
    old_price: 145.75,
  },
  {
    id: 22,
    name: "Rust Red Crewneck T-Shirt with Graphic Print",
    category: "men",
    image: p22_img,
    new_price: 130.25,
    old_price: 165.5,
  },
  {
    id: 23,
    name: "Light Wash Distressed Denim Jacket with Frayed Hem",
    category: "men",
    image: p23_img,
    new_price: 125.5,
    old_price: 160.25,
  },
  {
    id: 24,
    name: "Charcoal Grey Slim Fit Suit with Peak Lapel",
    category: "men",
    image: p24_img,
    new_price: 95.0,
    old_price: 130.75,
  },
  {
    id: 25,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p25_img,
    new_price: 105.25,
    old_price: 140.5,
  },
  {
    id: 26,
    name: "Boys Blue and Gray Striped Hooded Sweatshirtt",
    category: "kid",
    image: p26_img,
    new_price: 120.0,
    old_price: 155.75,
  },
  {
    id: 27,
    name: "Boys Green Camouflage Print Hooded Sweatshirt",
    category: "kid",
    image: p27_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 28,
    name: "Boys Yellow Logo Graphic Hooded Sweatshirt",
    category: "kid",
    image: p28_img,
    new_price: 115.75,
    old_price: 150.5,
  },
  {
    id: 29,
    name: "Boys Black and White Chevron Hooded Sweatshirt",
    category: "kid",
    image: p29_img,
    new_price: 85.25,
    old_price: 120.25,
  },
  {
    id: 30,
    name: "Boys Navy Blue Colorblock Hooded Sweatshirt",
    category: "kid",
    image: p30_img,
    new_price: 100.5,
    old_price: 135.0,
  },
  {
    id: 31,
    name: "Boys Neon Green Reflective Hooded Sweatshirt",
    category: "kid",
    image: p31_img,
    new_price: 75.0,
    old_price: 110.5,
  },
  {
    id: 32,
    name: "Boys Gray and Orange Contrast Hooded Sweatshirt",
    category: "kid",
    image: p32_img,
    new_price: 110.25,
    old_price: 145.75,
  },
  {
    id: 33,
    name: "Boys Turquoise Tribal Print Hooded Sweatshirt",
    category: "kid",
    image: p33_img,
    new_price: 70.75,
    old_price: 105.25,
  },
  {
    id: 34,
    name: "Boys Black and Gray Colorblock Hooded Sweatshirtt",
    category: "kid",
    image: p34_img,
    new_price: 95.5,
    old_price: 130.0,
  },
  {
    id: 35,
    name: "Boys Navy Blue and Yellow Logo Hooded Sweatshirt",
    category: "kid",
    image: p35_img,
    new_price: 80.25,
    old_price: 115.75,
  },
  {
    id: 36,
    name: "Boys Red and White Striped Hooded Sweatshirt",
    category: "kid",
    image: p36_img,
    new_price: 90.0,
    old_price: 125.5,
  },
];

export default all_product;
