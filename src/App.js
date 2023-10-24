import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import Login from "./pages/Login";
import ProtectedRoutes from "./middlewares/protectedRoutes";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route element={<ProtectedRoutes />}>
					<Route path="/home/:token" element={<HomePage />} />
					<Route path="/admin" element={<AdminPage />} />
				</Route>
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Router>
	);
};

export default App;
