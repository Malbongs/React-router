import { useParams, useLocation, useNavigate } from "react-router-dom";

const Product = ()=>{
    const {id } = useParams();

    const location = useLocation();
    console.log(location);
    

    let navigate = useNavigate();
 
    return(
        <>
        <h1>{id}번 상품페이지 입니다.</h1>
        <button onClick={()=>navigate(-1)}>Go back</button>
        <button onClick={()=>navigate(1)}>Go foward</button>
        </>
    )
}
export default Product;