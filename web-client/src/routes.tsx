import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error404Page from "./pages/404";
import HomePage from "./pages/home";
import LoginPage from "./pages/user/login";
import SignupPage from "./pages/user/signup";
import MyProduct from "./pages/my-product";
import CreateProductPage from "./pages/my-product/create";
import EditProductPage from "./pages/my-product/edit";
import RequireAuth from "./components/auth/require-auth";
import { ProductDetailsPage } from "./pages/marketplace/product-details";
import { MyActivityPage } from "./pages/my-activity";

const routes: RouteObject[] = [
	{ path: 'login', element: <LoginPage /> },
	{ path: 'signup', element: <SignupPage /> },
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <HomePage /> },
            { path: 'my-product', element: <RequireAuth> <MyProduct /> </RequireAuth>},
			{ path: 'my-product/create', element: <RequireAuth> <CreateProductPage /> </RequireAuth>},
			{ path: 'my-product/edit/:productId', element: <RequireAuth> <EditProductPage /> </RequireAuth>},
			{ path: 'product/:productId', element: <RequireAuth> <ProductDetailsPage /> </RequireAuth> },
			{ path: 'my-activity', element: <RequireAuth> <MyActivityPage /> </RequireAuth> },
			{ path: "*", element: <Error404Page /> },
		],
	}
];

const router = createBrowserRouter(routes);

export default router;