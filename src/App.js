import {Route, Routes} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomeIndex from "./Pages/Home/HomeIndex";
import IndexAbout from "./Pages/About/IndexAbout";
import AuthPage from "./Pages/Authentication/AuthPage";
import Admin from "./Pages/AdminPanel/Admin";
import TableOrder from "./Pages/TableOrder/TableOrder";
import OrderList from "./Pages/Ordered/OrderList";
import {Suspense} from "react";

import {ToastContainer} from 'react-toastify';
import Loader from "./Components/Loader/Loader";


const App = () => {
    return (
        <div>
            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path={'/'} element={<MainLayout/>}>
                        <Route index element={<HomeIndex/>}/>
                        <Route path={'/login'} element={<AuthPage/>}/>
                        <Route path={'/about'} element={<IndexAbout/>}/>
                        <Route path={'/orders'} element={<OrderList/>}/>
                        <Route path={'/tableOrder'} element={<TableOrder/>}/>
                        <Route path={'/login/admin'} element={<Admin/>}/>
                    </Route>
                </Routes>
            </Suspense>
            <ToastContainer/>
        </div>
    )
}
export default App