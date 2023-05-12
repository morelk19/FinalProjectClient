
import { useAuth } from "../Hooks/Auth";
import { Button, Flex, HStack, Heading, Spacer, Text } from "@chakra-ui/react";

const NavBar = () => {
	//we need this in the navbar, so that we can log out
	//instead of passing logout through props,
	// we are importing the useAuth which is Auth's 
	// contxt which allows us to call logout()

	const auth = useAuth();

	
	return (
		<Flex as="nav" p="10px" alignItems="center">
			<Heading as="h1">Ticket Manager</Heading>
			<Spacer />
			<HStack>
				<Text>{auth.userEmail && `Current User: ${auth.userEmail}`}</Text>
			</HStack>
			<Button onClick={()=>{
				auth.logout()
			}}>Logout</Button>
		</Flex>
	)
}
export default NavBar