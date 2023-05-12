import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineLogin }  from "react-icons/ai"
import { GiArchiveRegister }  from "react-icons/gi"


export default function Sidebar() {
    return(
        <List color="white" fontSize = "1.2em" spacing={4}>
            <ListItem>
                <Link to="/"><ListIcon as={AiOutlineHome} color= "white" />Home Page</Link>
            </ListItem>
            <ListItem>
                <Link to="/login"><ListIcon as={AiOutlineLogin} color= "white" />Log In</Link>
            </ListItem>
            <ListItem>
                <Link to="/registration"><ListIcon as={GiArchiveRegister} color= "white" />Registration</Link>
            </ListItem>
        </List>
    )
}