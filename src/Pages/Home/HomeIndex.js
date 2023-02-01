import HomeSection from "./HomeSection";
import MenuSection from "./MenuSection";
import RequestCall from "./RequestCall";
import Basket from "../../Components/Basket/Basket";
import {ScrollTop} from "../../Components/Buttons/Buttons";

const HomeIndex = () => {
    return(
        <div>
            <Basket/>
            <HomeSection/>
            <MenuSection/>
            <RequestCall/>
            <ScrollTop/>
        </div>
    )
}
export default HomeIndex