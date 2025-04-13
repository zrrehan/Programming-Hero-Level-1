// {
//     planName: "Student",
//     initialOffer: "BDT 0 for 1 month",
//     subsequentPrice: "BDT 99/month after",
//     features: [
//         "1 verified Premium account",
//         "Discount for eligible students",
//         "Cancel anytime"
//     ],
//     color: "#asdjkd"
//     trialButtonText: "Try 1 month for BDT 0",
//     finePrint: "BDT 0 for 1 month, then BDT 99 per month after. Offer available only to students at an accredited higher education institution and if you haven't tried Premium before."
// },
import { Library } from 'lucide-react';
import { CheckCheck } from 'lucide-react';


function PricingCard({plan}) {
    return(
        <div className='bg-[#282424] w-[400px] text-white gap-2 rounded-xl rounded-tl-2xl flex flex-col justify-between'>
            
            {
                plan.initialOffer ? <div style = {{backgroundColor: plan.color}} className={`bg-[${plan.color}] w-fit rounded-tl-2xl rounded-br-xl font-bold text-black p-1 px-5`}>{plan.initialOffer}</div> : null
            } 
            
            <div className='p-3 flex flex-col justify-between gap-3'>
                <div className='font-bold flex items-center gap-4'>
                    <Library className='w-8 h-8' /> Premium
                </div>
                <p style={{ color: plan.color }} className={`text-2xl font-bold`}>{plan.planName}</p>
                <div>
                    {
                        plan.features.map((feature) => <div className='flex gap-2'> <CheckCheck /> {feature}</div>)
                    }
                </div>

                <div className='space-y-3'>
                    <button class="btn w-full rounded-3xl">{plan.trialButtonText}</button>

                    {
                        plan.paymentOption ? <button className='btn hover:bg-white border-[rgba(215,213,213,0.29)] shadow-none bg-[rgba(215,213,213,0.29)] w-full rounded-3xl'>{plan.paymentOption}</button> : null
                    }
                </div>

                <p className='text-center text-xs'>{plan.finePrint} <span className="underline hover:cursor-pointer">Learn More</span></p>
            </div>
        </div>
    )
}
export default PricingCard;