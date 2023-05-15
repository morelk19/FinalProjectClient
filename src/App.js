
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalLayout from "./Layouts/GlobalLayout";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import ShowTicketList from "./Pages/ShowTicketList";
import ShowTicketDetails from "./Pages/ShowTicketDetails";
import CreateTicket from "./Pages/CreateTicket";
import UpdateTicketInfo from "./Pages/UpdateTicketInfo";

//importing four components 




function App() {


	//login and registration page

	const router = createBrowserRouter([
		{
			path: "/",
			element: <GlobalLayout />,
			children: [
				{
					index: true,
					element: <HomePage />,
				},
				{
					path: "login",
					element: <LoginPage />
				},
				{
					path: "registration",
					element: <RegistrationPage />
				},
				{
					path: "create-ticket",
					element: <CreateTicket />
				},
				{
					path: "show-ticket/:id",
					element: <ShowTicketDetails />
				},
				{
					path: "edit-ticket/:id",
					element: <UpdateTicketInfo />
				},

			],
		},
	]);

  return (
    <div className="App-header">
			<RouterProvider router={router} />
    </div>
  );
}

export default App;
