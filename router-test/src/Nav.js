import { Link } from "react-router-dom";
import "./nav.css"
const Nav = ()=>{

    return(
        <div style={{backgroundColor: "skyblue", width: "100%",margin:"0px"}}>
            <h1>navbar입니다.</h1>

            <Link className="list" to="">메인</Link>
            <Link className="list" to="/product/1">상품1</Link>
            <Link className="list" to="/product/2">상품2</Link>
            <Link className="list" to="/product/3">상품3</Link>
            
        </div>
    )
}
export default Nav;