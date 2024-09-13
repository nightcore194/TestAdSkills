import './css/index.css';
import {createBrowserRouter, NavLink, Outlet, RouterProvider} from "react-router-dom";
import {IndexPage} from "./module/IndexPage";
import {LogInfo} from "./module/LogInfo";

// Создание шаблона для страниц
function Layout() {
  return (
    <div className="main-container">
        <header className="main-header">
            <NavLink className="header-elem" to="/">Главная</NavLink>
        </header>
        <Outlet />
    </div>
  );
}
// Настройка роутинга
const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {path: "", element: <IndexPage />},
            {path: "log", element: <LogInfo />}
        ]
    },
]);
export default function App(){
    return <RouterProvider router={router}/>
}


