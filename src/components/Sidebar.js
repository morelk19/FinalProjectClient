import { EditIcon, EmailIcon, HamburgerIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function Sidebar() {
    return(
        <List color="white" fontSize = "1.2em" spacing={4}>
            <ListItem>
                <Link to="/"><ListIcon as={HamburgerIcon} color= "white" />Home Page</Link>
            </ListItem>
            <ListItem>
                <Link to="/login"><ListIcon as={EmailIcon} color= "white" />Log In</Link>
            </ListItem>
            <ListItem>
                <Link to="/registration"><ListIcon as={EditIcon} color= "white" />Registration</Link>
            </ListItem>
        </List>
    )
}