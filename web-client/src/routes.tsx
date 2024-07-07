import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error404Page from "./pages/404";
import HomePage from "./pages/home";
import LoginPage from "./pages/user/login";
import SignupPage from "./pages/user/signup";
import MyProduct from "./pages/my-product";
import CreateProductPage from "./pages/my-product/create";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'login', element: <LoginPage /> },
			{ path: 'signup', element: <SignupPage /> },
            { path: 'my-product', element: <MyProduct />},
			{ path: 'my-product/create', element: <CreateProductPage />},
			{ path: "*", element: <Error404Page /> },
		],
	}
];

const router = createBrowserRouter(routes);

export default router;