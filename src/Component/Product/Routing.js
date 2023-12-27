import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Data from "./Data";
function Routing() {

    return (
        <>

            <BrowserRouter>

                <Routes>

                    <Route path="" element={<Data/>}></Route>
                    <Route path="/homepage/:id" element={<HomePage/>}></Route>

                </Routes>

            </BrowserRouter>
        </>
    )
}
export default Routing;