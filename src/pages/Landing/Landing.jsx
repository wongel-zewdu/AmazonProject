// import React from "react";
// import LayOut from "../../components/LayOut/LayOut";
// import CarouselEffect from "../../components/Carousel/Carousel";
// import Category from "../../components/category/Category" ;
// import Product from "../../components/product/Product";

// const Landing = () => {
//   return (
//     <LayOut>
//       <CarouselEffect />
//       <Category />
//       <Product />
//     </LayOut>
//   );
// };

// export default Landing;
import React from "react";

import CarouselEffect from "../../components/Carousel/Carousel";
import Category from "../../components/category/Category";
import Product from "../../components/product/Product";

const Landing = () => {
  return (
    <div>
      <CarouselEffect />
      <Category />
      <Product />
    </div>
  );
};

export default Landing;
