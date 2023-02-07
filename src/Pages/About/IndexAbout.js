import React, {Suspense} from "react";

import {AboutMainContainer} from "./StyleAbout/AboutHeaderStyle";

const Loader = React.lazy(() => import('../../Components/Loader/Loader'));
const Accordion = React.lazy(() => import('./Accordion'));
const AboutHeader = React.lazy(() => import('./AboutHeader'));
const Statistic = React.lazy(() => import('./Statistic'));
const AboutGallery = React.lazy(() => import('./AboutGalery'));

const IndexAbout = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <AboutMainContainer>
                <AboutHeader/>
                <Statistic/>
                <AboutGallery/>
                <Accordion/>
            </AboutMainContainer>
        </Suspense>
    )
}
export default IndexAbout