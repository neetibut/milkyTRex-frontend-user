import Shopchoice from "../components/Shopchoice"
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"
const Tea=()=>{


    return <>
    
    <div>
        
    
        <ul className="flex gap-3 ml-40 pb-10">
            <li>Home &gt;</li>
            <li>Product &gt;</li>
            <li>Tea</li>
        </ul>

        <Shopchoice/>

        <div className="flex flex-row justify-center  mt-20 pb-20 ">
            <section className="flex flex-col border-4 px-10 py-10 mr-6 w-1/6">
                <div className="flex justify-center  mb-4" >
                    <img src="https://koph.co/img/icons/cocoa.svg" className="w-16 h-16 "></img>
                </div>
                <div>
                    <h1 className="text-center font-bold text-xl">Cocoa & Nutty</h1>
                    <h2 className="text-center">Taste Note</h2>
                </div>
            </section>
            <section className="flex flex-col border-4 px-10 py-10 mr-6 w-1/6">
                <div className="flex justify-center mb-4" >
                    <img src="https://koph.co/img/icons/medium-scale.svg" className="w-16 h-16 "></img>
                </div>
                <div>
                    <h1 className="text-center font-bold text-xl">Medium</h1>
                    <h2 className="text-center">Roast Level</h2>
                </div>
            </section>
            <section className="flex flex-col border-4 px-10 py-10 mr-6 w-1/6">
                <div className="flex justify-center  mb-4" >
                    <img src="https://koph.co/img/icons/house-blend.svg" className="w-16 h-16 "></img>
                </div>
                <div>
                    <h1 className="text-center font-bold text-xl">House Blend</h1>
                    <h2 className="text-center">Mixed Origin</h2>
                </div>
            </section>
        </div>
        
    </div>
    
    </>
}



export default Tea