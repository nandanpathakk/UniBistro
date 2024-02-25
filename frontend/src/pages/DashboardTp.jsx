import Dashboard from "../components/Dashboard"

export default function DashboardMess(){
    return <div>
        <Dashboard getApi={"http://localhost:5000/tp"} postApi={"http://localhost:5000/tpcreate"} delApi={"http://localhost:5000/tp"} delAllApi={"http://localhost:5000/tp"}  place={"Tea Post"}></Dashboard>
    </div>
}