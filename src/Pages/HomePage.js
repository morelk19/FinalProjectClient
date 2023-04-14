import { useEffect, useState } from "react";
import { useAuth } from "../Hooks/Auth";
import ShowTicketList from "./ShowTicketList";

const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT

const HomePage = () => {
	const [message, setMessage] = useState("")
	const [loggedIn, setLoggedIn] = useState('');
	const [, setUserID ] = useState('');
	const auth = useAuth()
	console.log(auth);

	
	useEffect(()=>{
		const fetchMessage = async () => {
			const headers = {
				"Content-Type": "application/json",
				 [process.env.REACT_APP_TOKEN_HEADER_KEY]: auth.userToken
			}

			headers[process.env.REACT_APP_TOKEN_HEADER_KEY] = auth.userToken
			// headers.process.env.REACT_APP_TOKEN_HEADER_KEY = auth.userToken

			console.log(headers)
			try{
				const response = await fetch(`${urlEndpoint}/users/message`, {
					method: "GET",
					headers: headers,
				});
				const responseJSON = await response.json();
				console.log(responseJSON)
				if(responseJSON.success)
				{
					setMessage(responseJSON.message)
					
					setUserID(responseJSON.userID)
				}else{
					throw responseJSON.message
				}
				 

			}catch(e){
				console.log(e)
				auth.logout();
				setMessage("");
			setLoggedIn(false);
			}

			
		}
		console.log(auth.userToken);
		if (auth.userToken !== null) {
			fetchMessage()
			setLoggedIn(true);
		}
		if (auth.userToken === null) {
			setMessage("");
			setLoggedIn(false);
		}
	}, [auth.userToken])

	

	return (
		<div>
			<h1>Home Page</h1>
			<p>Message: {message}</p>
			{loggedIn
        ? <ShowTicketList/>
        : ''
      }
		</div>

	)
}

export default HomePage