import Menu from "../components/Menu";

export default function TeaPost(){
    
    return <div>
        <Menu place={"Tea Post"} api={"http://localhost:5000/tp"} reviewGet={"http://localhost:5000/tprating"} reviewPost={"http://localhost:5000/tpratingcreate"}/>
    </div>
}