import Menu from "../components/Menu";

export default function Canteen(){
    return <div>
        <Menu place={"Canteen"} api={"https://unibistro-backend.onrender.com/canteen"} reviewGet={"https://unibistro-backend.onrender.com/canteenrating"} reviewPost={"https://unibistro-backend.onrender.com/canteenratingcreate"}/>
    </div>
}