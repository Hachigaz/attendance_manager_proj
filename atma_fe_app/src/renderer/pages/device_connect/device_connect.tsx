import { Button } from "@mui/material";
import { Link } from "react-router";

export default function DeviceConnectPage(){
    return (
        <div className="">
            Connect Device to continue
            <Link to="/home">
                Home Menu
            </Link>
            <Button variant="outlined">
                Hello world
            </Button>
            <Button variant="outlined">
                Hello world
            </Button>
            <Button variant="outlined">
                Hello world
            </Button>
        </div>
    )
}