import { createBrowserRouter } from "react-router-dom";
import AddTask from "../../AddTask/AddTask";
import ComplatedTask from "../../ComplatedTask/ComplatedTask";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import MyTask from "../../MyTask/MyTask";
import Register from "../../Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/addTask',
                element: <AddTask></AddTask> 
            },
            {
                path: '/myTask',
                element: <MyTask></MyTask>
            },
            {
                path: '/complatedTasK',
                element: <ComplatedTask></ComplatedTask>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);


