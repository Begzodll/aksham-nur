import AboutHeader from "./AboutHeader";
import Statistic from "./Statistic";
import AboutGallery from "./AboutGalery";

import {AboutMainContainer} from "./StyleAbout/AboutHeaderStyle";
import Accordion from "./Accordion";

const IndexAbout = () => {
    return (
        <AboutMainContainer>
            <AboutHeader/>
            <Statistic/>
            <AboutGallery/>
            <Accordion/>
        </AboutMainContainer>
    )
}
export default IndexAbout