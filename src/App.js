import {Route, Routes} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomeIndex from "./Pages/Home/HomeIndex";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<HomeIndex/>}/>
                {/*<Route path={'/menu'} element={<MenuSection/>}/>*/}
            </Route>
        </Routes>
    )
}
export default App