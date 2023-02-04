import AboutHeader from "./AboutHeader";
import Statistic from "./Statistic";
import AboutGallery from "./AboutGalery";

import {AboutMainContainer} from "./StyleAbout/AboutHeaderStyle";

const IndexAbout = () => {
    return (
        <AboutMainContainer>
            <AboutHeader/>
            <Statistic/>
            <AboutGallery/>
        </AboutMainContainer>
    )
}
export default IndexAbout