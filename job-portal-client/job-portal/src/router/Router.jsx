import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import CreateJob from "../pages/CreateJob.jsx";
import MyJobs from "../pages/MyJobs.jsx";
import SalaryPage from "../pages/SalaryPage.jsx";
import UpdateJob from "../pages/UpdateJob.jsx";
import Login from "../components/Login.jsx";
// import ProtectedRoute from "../components/ProtectedRoute.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App/>,
		children: [
			{path: "/", element: <Home/>},
			{
				path: "post-job",
				element:
					<CreateJob/>
			},
			{
				path: "my-job",
				element:
					<MyJobs/>
			},
			{path: "salary", element: <SalaryPage/>},
			{path: "/login", element: <Login/>},
			{
				path: `/edit-job/:id`,
				element: <UpdateJob/>,
				loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
			}
		]
	}
])

export default router