import React, {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import App from "./App";
import store from "./store/store";

import './Assets/css/global.scss';
import 'swiper/css';
import 'react-toastify/dist/ReactToastify.css';
import "aos/dist/aos.css";

const container = document.getElementById('root')
const root = createRoot(container);


root.render(
    <React.StrictMode>
        <StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        </StrictMode>
    </React.StrictMode>
)