import Image from "next/image"

function ShowImage() {
    return(
        <div className=" justify-between">
            <img src="https://www.themealdb.com/images/media/meals/ctg8jd1585563097.jpg" className="h-[500px] w-[500px]" alt="" />

            <Image 
                src= "https://www.themealdb.com/images/media/meals/ctg8jd1585563097.jpg" 
                width={500}
                height={500} />
        </div>
    )
}

export default ShowImage