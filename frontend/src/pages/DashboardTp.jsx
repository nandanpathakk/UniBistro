import Dashboard from "../components/Dashboard"

export default function DashboardMess(){
    return <div>
        <Dashboard getApi={"https://unibistro-backend.onrender.com/tp"} postApi={"https://unibistro-backend.onrender.com/tpcreate"} delApi={"https://unibistro-backend.onrender.com/tp"} delAllApi={"https://unibistro-backend.onrender.com/tp"}  place={"Tea Post"}></Dashboard>
    </div>
}