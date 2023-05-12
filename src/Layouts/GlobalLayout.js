import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

const GlobalLayout = () => {
	return (
		<Grid templateColumns="repeat(6,1fr)" bg="gray.50">
			<GridItem
			as="aside"
			colSpan={{ base: 6, lg: 2, xl: 1 }}
			backgroundColor="blue.400"
			minHeight= {{ lg:"100vh" }}
			p= {{ base:  "20", lg: "30px" }}
			>
				<Sidebar />
			</GridItem>
			<GridItem 
			as= "main"
			colSpan={{ base: 6, lg: 4, xl: 5 }}
			p="40px"
			>
			<NavBar/>
			<Outlet/>
			</GridItem>

		</Grid>
	)
}

export default GlobalLayout