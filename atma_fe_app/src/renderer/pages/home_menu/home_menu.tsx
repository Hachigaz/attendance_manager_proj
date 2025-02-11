import { Link } from "react-router";
export default function HomeMenuPage(){
    return(
        <div className="">
            Home Menu
            <Link to="/dev_connect">
                Connect Device
            </Link>
        </div>
    )
}