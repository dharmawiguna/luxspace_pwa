import logo from '../images/content/logo.png';
function Splash(){
    return(
        <section>
            <div className="container mx-auto min-h-screen">
                <div className="flex flex-col items-center justify-center h-screen">
                    <div className="w-full md:w-4/12 text-center">
                        <img src={logo} alt="Luxspace | Fullfill your house with beautiful furniture" className="mx-auto mb-8" />
                        <p>
                            Kami menyediakan furniture berkelas yang membuat ruangan terasa honey
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Splash;