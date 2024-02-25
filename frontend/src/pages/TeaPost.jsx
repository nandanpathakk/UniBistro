import Menu from "../components/Menu";

export default function TeaPost(){
    
    return <div>
        <Menu place={"Tea Post"} api={"https://unibistro-backend.onrender.com/tp"} reviewGet={"https://unibistro-backend.onrender.com/tprating"} reviewPost={"https://unibistro-backend.onrender.com/tpratingcreate"}/>
    </div>
}