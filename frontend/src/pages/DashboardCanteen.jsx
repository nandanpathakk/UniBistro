import Dashboard from "../components/Dashboard"

export default function DashboardMess(){
    return <div>
        <Dashboard getApi={"http://localhost:5000/canteen"} postApi={"http://localhost:5000/canteencreate"} delApi={"http://localhost:5000/canteen"} delAllApi={"http://localhost:5000/canteen"} place={"Canteen"}></Dashboard>
    </div>
}