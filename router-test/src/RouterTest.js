
import { Routes,Route} from "react-router-dom";
import Product from "./Product";
import Main from "./Main";
import Error from "./Error";

const RouterTest = ()=>{



    return(
        <>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/product/:id" element={<Product />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
        </>
    )
}

export default RouterTest