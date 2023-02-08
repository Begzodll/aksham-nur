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
                {/*<div className="elfsight-app-81c42946-c9d1-4482-ae55-41233c43f6bd"></div>*/}

                <script src="https://apps.elfsight.com/p/platform.js" defer></script>
                <div className="elfsight-app-81c42946-c9d1-4482-ae55-41233c43f6bd"></div>
            </AboutMainContainer>
        </Suspense>
    )
}
export default IndexAbout