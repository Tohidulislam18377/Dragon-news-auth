import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayOut from "../Layouts/NewsLayOut";
import News from "../pages/News/News/News";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Trams from "../pages/Shared/Trams/Trams";


const router = createBrowserRouter([ 
    {
        path:'/',
        element:<LoginLayout/>,
        children:[
            {
                path:'/',
                element:<Navigate to='/category/0'></Navigate>
            },
            {
              path:'login',
              element:<Login></Login>
            },
            {
               path:'register',
               element:<Register></Register>
            },
            {
                path:'terms',
                element:<Trams></Trams>
            }
        ]

    },
    {
        path: '/category',
        element: <Main></Main>,
        children: [
            {
                path:':id',
                element:<Category></Category>,
              loader:({params})=>fetch(`https://the-news-dragon-server-tohidulislam18377.vercel.app/categories/${params.id}`)  
            }
        ]
    },

    {
        path:'news',
        element:<NewsLayOut></NewsLayOut>,
        children:[
         {
            path:':id',
            element:<PrivateRoute><News></News></PrivateRoute>,
            loader:({params})=>fetch(`https://the-news-dragon-server-tohidulislam18377.vercel.app/news/${params. id}`)
         }
        ]

    }
])

export default router;