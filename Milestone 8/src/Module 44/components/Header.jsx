import { Menu } from 'lucide-react';
import { CircleX } from 'lucide-react';
import { useState } from 'react';

let menu = ["Home", "Marketplace", "About Us", "Pricing"];

function Header() {
    const [open, setOpen] = useState(false);

    return(
        <div className="flex justify-around">
            <div className='text-2xl font-bold'>Music Library</div>

            <ol className="hidden md:flex gap-7 ">
                {
                    menu.map(items => <li key = {items}>{items}</li>)
                }
            </ol>

            <div className="flex gap-5">
                <button className="btn btn-primary">Sign Up</button>
                <div className="md:hidden">
                    <div onClick={() => setOpen(!open)}>
                        {
                            !open ? <Menu /> : <CircleX />
                        }
                    </div>
                    <div className= {`bg-amber-200 text-black p-1 rounded-md relative duration-500 ${open ? "top-0" : "-top-56"}`}>
                        {
                            menu.map(items => <button key = {items} className='btn block mb-2 w-full btn-ghost'>{items}</button>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header