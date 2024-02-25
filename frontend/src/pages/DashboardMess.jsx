import Dashboard from "../components/Dashboard"

export default function DashboardMess(){
    return <div>
        <Dashboard getApi={"https://unibistro-backend.onrender.com/mess"} postApi={"https://unibistro-backend.onrender.com/messcreate"} delApi={"https://unibistro-backend.onrender.com/mess"} delAllApi={"https://unibistro-backend.onrender.com/mess"} place={"Mess"}></Dashboard>
    </div>
}