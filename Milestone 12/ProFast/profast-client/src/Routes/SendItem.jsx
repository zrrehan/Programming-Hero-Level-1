import { useState } from "react";
import { warehouse } from "../Components/Coverage/warehouses";

function SendItem() {
    const [senderWarehouse, setSenderWareHouse] = useState([])
    const [recieverWarehouse, setRecieverWareHouse] = useState([]);

    function formHandler(event) {
        event.preventDefault();
        const form = event.target;
        let formData = new FormData(form);
        
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    }

    function regionChange( person) {
        const region = event.target.value;
        const warehousesData =  warehouse.filter(data => {
            return data.region === region;
        });

        const wareHouses = warehousesData.map((data) => <option>{data.city}</option>)
        if(person === "sender") {
            setSenderWareHouse(wareHouses);
        } else {
            setRecieverWareHouse(wareHouses);
        }

    }
    return(
        <div className="text-[#03373D]">
            <h1>Add Parcel</h1>

            <form onSubmit={formHandler}>
                <h1>Enter your parcel details</h1>
                <input type="radio" value = "yes" name="document" className="radio checked:text-[#CAEB66] checked:border-[#CAEB66]" defaultChecked /> <span className="font-semibold ml-2">Document</span>
                <input name = "document" value = "no" className="ml-6 radio checked:text-[#CAEB66] checked:border-[#CAEB66]" type="radio" /> <span className="font-semibold ml-2">Non-document</span>

                <fieldset className="flex flex-col gap-5 md:flex-row lg:justify-between mt-6">
                    <div className="md:w-[50%] ">
                        <legend className="font-semibold">Parcel Name</legend>
                        <input name = "parcelName" type="text" className="input w-full rounded-3xl" placeholder="Parcel Name" />
                    </div>

                    <div className="md:w-[50%]">
                        <legend className="font-semibold">Parcel Weight (KG)</legend>
                        <input name="parcelWeight" type="number" className="input  w-full rounded-3xl" placeholder="Parcel Weight" />
                    </div>
                </fieldset>

                <div className="divider"></div>

                {/* sender and receiver details  */}
                <div className="md:flex justify-between gap-6">
                    <div className="md:w-[50%]">
                        <h1 className="text-xl font-semibold mb-3">Sender Details</h1>
                        <div className="md:grid grid-cols-2 gap-4">
                            <div className="">
                                <legend className="font-semibold">Sender Name</legend>
                                <input name="senderName" type="text" className="input  w-full rounded-3xl" placeholder="Sender name" />
                            </div>

                            <div className="">
                                <legend className="font-semibold">Sender Region </legend>
                                {/* <input name="parcelWeight" type="number" className="input  w-full rounded-3xl" placeholder="Sender Region" /> */}
                                <select onChange={() => regionChange("sender")} defaultValue="Select a Region" className="select w-full rounded-3xl">
                                    <option disabled={true}>Select a Region</option>
                                    <option>Dhaka</option>
                                    <option>Chattogram</option>
                                    <option>Khulna</option>
                                    <option>Barisal</option>
                                    <option>Rajshahi</option>
                                    <option>Rangpur</option>
                                    <option>Sylhet</option>
                                </select>
                            </div>

                            <div className="">
                                <legend className="font-semibold">Address</legend>
                                <input name="parcelWeight" type="number" className="input  w-full rounded-3xl" placeholder="Address" />
                            </div>
                            <div className="">
                                <legend className="font-semibold">Sender Contact No</legend>
                                <input name="parcelWeight" type="number" className="input  w-full rounded-3xl" placeholder="Sender Contact No" />
                            </div>

                            <div className="col-span-2"> 
                                <legend className="font-semibold ">Sender Pickup ware House </legend>
                                <select defaultValue="Select Pickup ware House" className="select w-full rounded-3xl">
                                    <option disabled={true}>Select Pickup ware House</option>
                                    {
                                        senderWarehouse
                                    }
                                </select>
                            </div>

                            <div className="col-span-2"> {/*text area div  */}
                                <legend className="font-semibold ">Pickup Instruction</legend>
                                <textarea className="textarea w-full h-[150px]" placeholder="Pickup Instruction"></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-[50%]">
                        <h1 className="text-xl font-semibold mb-3">Reciever Details</h1>
                        <div className=" md:grid grid-cols-2 gap-4">
                            <div className="">
                                <legend className="font-semibold">Reciever Name</legend>
                                <input name="parcelWeight" type="text" className="input  w-full rounded-3xl" placeholder="Reciever name" />
                            </div>

                            <div className="">
                                <legend className="font-semibold">Reciever Region</legend>
                                <select onChange={() => regionChange("reciever")} defaultValue="Select a Region" className="select w-full rounded-3xl">
                                    <option disabled={true}>Select a Region</option>
                                    <option>Dhaka</option>
                                    <option>Chattogram</option>
                                    <option>Khulna</option>
                                    <option>Barisal</option>
                                    <option>Rajshahi</option>
                                    <option>Rangpur</option>
                                    <option>Sylhet</option>
                                </select>
                            </div>

                            <div className="">
                                <legend className="font-semibold">Address</legend>
                                <input name="parcelWeight" type="number" className="input  w-full rounded-3xl" placeholder="Address" />
                            </div>
                            <div className="">
                                <legend className="font-semibold">Reciever Contact No</legend>
                                <input name="parcelWeight" type="number" className="input  w-full rounded-3xl" placeholder="Reciever Contact No" />
                            </div>

                            <div className="col-span-2">
                                <legend className="font-semibold ">Reciever Pickup Ware House</legend>
                                <select defaultValue="Select Pickup ware House" className="select w-full rounded-3xl">
                                    <option disabled={true}>Select Pickup ware House</option>
                                    {
                                        recieverWarehouse
                                    }
                                </select>
                            </div>

                            <div className="col-span-2"> {/*text area div  */}
                                <legend className="font-semibold ">Delivery Instruction</legend>
                                <textarea className="textarea w-full h-[150px]" placeholder="Delivery Instruction"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn rounded-xl px-5 bg-[#CAEB66] my-4">Proceed Confirm Booking</button>
            </form>
        </div>
    )
}

export default SendItem;