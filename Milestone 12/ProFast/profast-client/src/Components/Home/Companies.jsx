import Marquee from "react-fast-marquee";
import img1 from "../../Assets/brands/amazon.png"
import img2 from "../../Assets/brands/amazon_vector.png"
import img3 from "../../Assets/brands/casio.png"
import img4 from "../../Assets/brands/moonstar.png"
import img5 from "../../Assets/brands/start.png"
import img6 from "../../Assets/brands/randstad.png"

function Companies() {
    return(
        <div className="my-14">
            <Marquee>
                <div className="flex items-center gap-20">
                    <div>
                        <img src={img1} className="h-full w-full" />
                    </div>
                    <div>
                        <img src={img4} className="h-full w-full" />
                    </div>
                    <div>
                        <img src={img3} className="h-full w-full" />
                    </div>
                    <div>
                        <img src={img2} className="h-full w-full" />
                    </div>
                    <div>
                        <img src={img5} className="h-full w-full" />
                    </div>
                    <div>
                        <img src={img6} className="h-full w-full" />
                    </div>
                </div>
            </Marquee>
        </div>
    )
}

export default Companies;