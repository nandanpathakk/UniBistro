import Menu from "../components/Menu";

export default function Canteen(){
    return <div>
        <Menu place={"Canteen"} api={"http://localhost:5000/canteen"} reviewGet={"http://localhost:5000/canteenrating"} reviewPost={"http://localhost:5000/canteenratingcreate"}/>
    </div>
}