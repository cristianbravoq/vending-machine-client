import "./style.css"

function Welcome() {
    
    return (
    <div className="">
        <div className="absolute h-screen w-screen welcome opacity-60">
            <div className="circles">
                <span className="circle1"></span>
                <span className="circle2"></span>
                <span className="circle3"></span>
            </div>
        </div>
        <div className="flex justify-center items-center h-screen title">
            <p className="max-sm:text-3xl sm:text-4xl text-white font-extrabold z-30">Bienvenidos</p>
        </div>
    </div>
    )
}

export default Welcome;