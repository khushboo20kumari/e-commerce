// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ViewAll from "./ViewAll";
// import Category from "./Category";
// function Routing() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Category/>}>

//                     <Route path="viewall" element={<ViewAll />} />
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     );
// }
// export default Routing;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Category from "./Category";
import CarouselCom from "./Carousel"
function Routing() {

    return (
        <>
            < CarouselCom />

            <BrowserRouter>
                <Routes>

                    <Route path="" element={<Category />}></Route>
                    <Route path="/homepage/:id" element={<HomePage />}></Route>
                </Routes>

            </BrowserRouter>
        </>
    )
}
export default Routing;