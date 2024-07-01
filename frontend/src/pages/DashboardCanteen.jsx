import Dashboard from "../components/Dashboard"

export default function DashboardMess(){
    return <div>
        <Dashboard getApi={"https://unibistro-backend.onrender.com/canteen"} postApi={"https://unibistro-backend.onrender.com/canteencreate"} delApi={"https://unibistro-backend.onrender.com/canteen"} delAllApi={"https://unibistro-backend.onrender.com/canteen"} password={"canteen"} place={"Canteen"}></Dashboard>
    </div>
}