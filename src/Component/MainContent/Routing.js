import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./Layout";
import ViewAll from "./ViewAll";
import Category from "./Category";
// import CarouselCom from "./Carousel"
// import { Carousel } from "react-responsive-carousel";
function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Category/>}>
                    {/* <Route path="carousel" element={<CarouselCom/>}></Route> */}
                    <Route path="viewall" element={<ViewAll />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default Routing;
