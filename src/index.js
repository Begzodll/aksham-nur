import React, {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import store from "./store/store";

import './Assets/css/global.scss';
import 'swiper/css';
import 'react-toastify/dist/ReactToastify.css';
import "aos/dist/aos.css";

const container = document.getElementById('root')
const root = createRoot(container);

const App = React.lazy(() => import('./App'));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)