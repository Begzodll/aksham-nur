import {Route, Routes} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomeIndex from "./Pages/Home/HomeIndex";
import AuthPage from "./Pages/Authentication/AuthPage";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<HomeIndex/>}/>
                <Route path={'/login'} element={<AuthPage/>}/>
            </Route>
        </Routes>
    )
}
export default App