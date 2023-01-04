import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

import './Assets/css/tailwind/output.css';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>
)