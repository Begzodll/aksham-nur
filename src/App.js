import {Route, Routes} from "react-router-dom";
import React, {Suspense} from "react";

import {ToastContainer} from 'react-toastify';

const Loader = React.lazy(() => import('./Components/Loader/Loader'));
const MainLayout = React.lazy(() => import('./Layout/MainLayout'));
const HomeIndex = React.lazy(() => import('./Pages/Home/HomeIndex'));
const IndexAbout = React.lazy(() => import('./Pages/About/IndexAbout'));
const AuthPage = React.lazy(() => import('./Pages/Authentication/AuthPage'));
const Admin = React.lazy(() => import('./Pages/AdminPanel/Admin'));
const OrderList = React.lazy(() => import('./Pages/Ordered/OrderList'));

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
                        <Route path={'/login/admin'} element={<Admin/>}/>
                    </Route>
                </Routes>
            </Suspense>
            <ToastContainer/>
        </div>
    )
}
export default App