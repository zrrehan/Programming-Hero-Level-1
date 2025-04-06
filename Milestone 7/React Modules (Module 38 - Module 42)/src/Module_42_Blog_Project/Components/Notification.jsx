import { CiBellOn, CiTimer } from "react-icons/ci";
function Notification({ bookmarked, totalReadingTime }) {
    return(
        <div>
            <div className="bg-cyan-800 text-white w-[700px] p-8 rounded-4xl text-3xl flex justify-between">
                <div>Notification</div>

                <div class = "space-x-4">
                    <div class="indicator">
                        <CiTimer />
                        {
                            totalReadingTime == 0 ? <div></div> : <span class="badge indicator-item ">{totalReadingTime}</span>
                        }
                    </div>
                    <div class="indicator">
                        <CiBellOn />
                        {
                            bookmarked.length == 0 ? <div></div> : <span class="badge indicator-item ">{bookmarked.length}</span>
                        }
                    </div>
                </div>
            </div>
        
            {
                bookmarked.map((data) => <div className= "bg-gray-300 rounded-2xl p-9 my-4 text-xl w-[700px]">{data.title}</div>)
            }
        </div>
    );
}

export default Notification