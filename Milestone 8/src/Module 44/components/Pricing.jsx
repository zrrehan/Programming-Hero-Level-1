import PricingCard from "./PricingCard";
const pricingPlans = [
    {
        planName: "Individual",
        initialOffer: "BDT 199 for 2 months",
        subsequentPrice: "BDT 199/month after",
        features: [
            "1 Premium account",
            "Cancel anytime",
            "Subscribe or one-time payment"
        ],
        color: "#ffd2d7",
        trialButtonText: "Try 2 months for BDT 199",
        paymentOption: "One-time payment",
        finePrint: "BDT 199 for 2 months, then BDT 199 per month after. Offer only available if you haven't tried Premium before."
    },
    {
        planName: "Student",
        initialOffer: "BDT 0 for 1 month",
        subsequentPrice: "BDT 99/month after",
        features: [
            "1 verified Premium account",
            "Discount for eligible students",
            "Cancel anytime",
            "Holo Free for 6 months",
            "Download your Favourite Songs",
            
        ],
        color: "#c4b1d4",
        trialButtonText: "Try 1 month for BDT 0",
        finePrint: "BDT 0 for 1 month, then BDT 99 per month after. Offer available only to students at an accredited higher education institution and if you haven't tried Premium before."
    },
    {
        planName: "Duo",
        price: "BDT 260/month",
        features: [
            "2 Premium accounts",
            "Cancel anytime",
            "Subscribe or one-time payment"
        ],
        color: "#ffc862", 
        trialButtonText: "Get Premium Duo",
        paymentOption: "One-time payment",
        finePrint: "For couples who reside at the same address."
    }
];

function Pricing() {
    return(
        <div className="flex justify-around">
            {
                pricingPlans.map((plan) => <PricingCard key = {plan.planName} plan = {plan}></PricingCard>)
            }
        </div>
    );
}

export default Pricing;