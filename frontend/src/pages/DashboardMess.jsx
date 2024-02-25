import Dashboard from "../components/Dashboard"

export default function DashboardMess(){
    return <div>
        <Dashboard getApi={"http://localhost:5000/mess"} postApi={"http://localhost:5000/messcreate"} delApi={"http://localhost:5000/mess"} delAllApi={"http://localhost:5000/mess"} place={"Mess"}></Dashboard>
    </div>
}