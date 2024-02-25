import Header from "../components/Header";
import figure10 from "../assets/figure10.svg";
import figure9 from "../assets/figure9.svg";
import group from "../assets/Group.svg"

export default function Home() {
    return <div className="bg-[#79E777] min-h-screen relative">
        <Header />
        <div className="flex flex-col mt-[50px] ml-[203px] gap-9">
            <div className="text-[120px]/[110px] font-bold font-red-hat text-[#1F1D2B]">
                <p>Code</p>
                <p className="text-white">Eat</p>
                <p>Repeat</p>
            </div>
            <div className="flex justify-between w-[400px] font-['Raleway'] font-medium">
                <div>
                    <button className="border border-black rounded-full w-[180px] py-[10px]">Contact Us</button>
                </div>
                <div>
                    <button className="border border-black bg-black text-white rounded-full w-[180px] py-[10px]">Menu</button>
                </div>
            </div>
        </div>
                <img className="absolute top-[50px] h-[400px]" src={figure10} />
                <img className="absolute top-[417px] h-[230px] left-[30px]" src={figure9} />
                <img className="absolute top-[140px] h-[505px] left-[1040px] " src={group} />
    </div>
}