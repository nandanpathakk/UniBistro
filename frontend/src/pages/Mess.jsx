import Menu from "../components/Menu";

export default function Mess(){
    return <div>
        <Menu place={"Mess"} api={"https://unibistro-backend.onrender.com/mess"} reviewGet={"https://unibistro-backend.onrender.com/messrating"} reviewPost={"https://unibistro-backend.onrender.com/messratingcreate"}/>
    </div>
}