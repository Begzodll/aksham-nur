import HomeSection from "./HomeSection";
import MenuSection from "./MenuSection";
import RequestCall from "./RequestCall";
import Basket from "../../Components/Basket/Basket";
const HomeIndex = () => {
    return(
        <div>
            <Basket/>
            <HomeSection/>
            <MenuSection/>
            <RequestCall/>
        </div>
    )
}
export default HomeIndex