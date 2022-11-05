import { createBrowserRouter } from "react-router-dom";
import PriveteRoute from "../../Context/PriveteRoute/PriveteRoute";
import Main from "../../Layout/Main";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import Orders from "../../Pages/Orders/Orders";
import Login from "../../Pages/Profile/Login/Login";
import Signup from "../../Pages/Profile/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/login', element: <Login></Login> },
            { path: '/signup', element: <Signup></Signup> },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <PriveteRoute><Checkout></Checkout></PriveteRoute>
            },
            { path: 'orders', element: <PriveteRoute><Orders></Orders></PriveteRoute> },
        ]
    }
])

export default router;