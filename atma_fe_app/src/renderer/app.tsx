import { createRoot } from 'react-dom/client';
import { ReactNode, StrictMode } from 'react';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { AppProvider, DashboardLayout } from '@toolpad/core';
import { createBrowserRouter, createHashRouter, Navigate, Outlet, RouterProvider, useLocation } from 'react-router';

import DeviceConnectPage from './pages/device_connect/device_connect';
import HomeMenuPage from './pages/home_menu/home_menu';
import HeaderMenu from './components/header_menu';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import app_logo from "../static/img/app_logo.png"
import ClassesPage from './pages/classes/classes';
import CardManagePage from './pages/card_manage/card_manage';

const BRANDING = {
    logo:<img src={app_logo} alt='App logo'></img>,
    title:"Quản lý điểm danh"
}

const NAVIGATION = [
    {
        segment:"home",
        title:"Trang chủ",
        icon:<div>TC</div>
    },
    {
        segment:"classes",
        title:"Danh sách lớp",
        icon:<div>DSL</div>,
    },
    {
        segment:"card_manage",
        title:"Quản lý thẻ",
        icon:<div>QLT</div>,
    }
]


function App(){
    return (
        <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING}>
            {
                useLocation().pathname == "/dev_connect"?<Outlet></Outlet>:
                <DashboardLayout>
                    <Outlet></Outlet>
                </DashboardLayout>
            }
        </ReactRouterAppProvider>
    );
}

const root = createRoot(document.body);

const router = createHashRouter([
    {
        Component:App,
        children:[
            { 
                path: "/", 
                element: <Navigate to="/dev_connect" replace></Navigate>},
            { 
                path: "/main_window", 
                element: <Navigate to="/dev_connect" replace></Navigate>},
            { 
                path: "/dev_connect", 
                element: <DeviceConnectPage/> 
            },
            { 
                path: "/home", 
                element: <HomeMenuPage/> 
            },
            { 
                path: "/classes", 
                element: <ClassesPage/> 
            },
            { 
                path: "/card_manage", 
                element: <CardManagePage/> 
            },
        ]
    },
])

root.render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
);