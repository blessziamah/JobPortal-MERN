import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import CreateJob from "../pages/CreateJob.jsx";
import MyJobs from "../pages/MyJobs.jsx";
import SalaryPage from "../pages/SalaryPage.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{path: "/", element: <Home />},
			{path: "post-job", element: <CreateJob />},
			{path: "my-job", element: <MyJobs />},
			{path: "salary", element: <SalaryPage />}
		]
	}
])

export default router