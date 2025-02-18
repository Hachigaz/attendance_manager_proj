import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import { DashboardLayout } from '@toolpad/core';
import { createHashRouter, Navigate, Outlet, RouterProvider, useLocation } from 'react-router';

import DeviceConnectPage from './pages/device_connect/device_connect';
import HomeMenuPage from './pages/home_menu/home_menu';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import app_logo from "../static/img/app_logo.png"
import ClassesPage from './pages/classes/classes';
import CardManagePage from './pages/card_manage/card_manage';
import SubjectListPage from './pages/subject_list/subject_list';
import ArchivedDataPage from './pages/archived_data/archived_data';
import ClassCreatePage from './pages/classes/class_create';
import ClassDetailPage from './pages/classes/class_detail';
import { AppProvider } from 'Commons/providers/app_provider';

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
        segment:"subjects",
        title:"Danh sách môn",
        icon:<div>DSM</div>,
    },
    {
        segment:"card_manage",
        title:"Quản lý thẻ",
        icon:<div>QLT</div>,
    },
    {
        segment:"archived",
        title:"Dữ liệu lưu trữ",
        icon:<div>LT</div>,
    },
]

function App(){
    return (
        <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING}>
            <AppProvider>
                {
                    useLocation().pathname == "/dev_connect"?<Outlet></Outlet>:
                    <DashboardLayout>
                        <Outlet></Outlet>
                    </DashboardLayout>
                }
            </AppProvider>
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
                path: "/classes/create", 
                element: <ClassCreatePage/> 
            },
            { 
                path: "/classes/details/:id", 
                element: <ClassDetailPage/> 
            },
            { 
                path: "/subjects", 
                element: <SubjectListPage/> 
            },
            { 
                path: "/card_manage", 
                element: <CardManagePage/> 
            },
            { 
                path: "/archived", 
                element: <ArchivedDataPage/> 
            },
        ]
    },
])

root.render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
);