import SellerNav from "../seller/SellerNav";
import Productcard from "./Card";
function ParentComponent() {
  return (
    <div>
      <SellerNav/>
      <Productcard />
    </div>
  );
}

export default ParentComponent;
