import Menu from "../components/Menu";

export default function Mess(){
    return <div>
        <Menu place={"Mess"} api={"http://localhost:5000/mess"} reviewGet={"http://localhost:5000/messrating"} reviewPost={"http://localhost:5000/messratingcreate"}/>
    </div>
}