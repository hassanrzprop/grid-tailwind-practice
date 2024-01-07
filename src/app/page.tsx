import { Montserrat } from "next/font/google";
const mons = Montserrat({ weight: "500", subsets: ["latin"] });
export default function Home() {
  return (
   <> 
    <div className="grid lg:grid-cols-3 m-3 gap-x-4 gap-y-3 ">
      <div className="bg-gray-700 rounded-lg border-2 border-black text-5xl text-center h-[200px] col-span-2">Hassan Raza</div>
      <div className="bg-gray-700 rounded-lg border-2 border-black text-5xl text-center row-span-2">Hassan Raza</div>
      <div className="bg-gray-700 rounded-lg border-2 border-black text-5xl text-center row-span-2">Hassan Raza</div>
      <div className="bg-gray-700 rounded-lg border-2 border-black text-5xl text-center h-[200px]">Hassan Raza</div>
      <div className="bg-gray-700 rounded-lg border-2 border-black text-5xl text-center h-[200px] col-span-2">Hassan Raza</div>
    </div>
    </>
    
  );
}