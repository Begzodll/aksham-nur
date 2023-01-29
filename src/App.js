import {Route, Routes} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomeIndex from "./Pages/Home/HomeIndex";
import AuthPage from "./Pages/Authentication/AuthPage";
import Admin from "./Pages/AdminPanel/Admin";
import OrderList from "./Pages/Ordered/OrderList";


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<HomeIndex/>}/>
                <Route path={'/login'} element={<AuthPage/>}/>
                <Route path={'/orders'} element={<OrderList/>}/>
                <Route path={'/login/admin'} element={<Admin/>}/>
            </Route>
        </Routes>
    )
}
export default App