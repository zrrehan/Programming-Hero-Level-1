import { motion, scale } from "motion/react"

function Hero() {
    return(
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <motion.img
                    animate = {{y: [-200, -100, -200], }}
                    transition={{ repeat: Infinity, duration: 5 }}
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <motion.img
                    animate={{ x: [200, 50, 200]}}
                    transition={{repeat: Infinity, duration: 3}}
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <motion.h1 
                        className="text-5xl font-bold"
                        animate = {{rotate: [0, 320, 210, 290, 270], transition: {duration: 2}}}    
                    >Box Office News!</motion.h1>
                    <motion.p className="py-6"
                        initial = {{scale: 0}}
                        animate = {{scale: 1}}
                    >
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </motion.p>
                    <motion.button animate = {{x: 550}}className="btn btn-primary">Get Started</motion.button>
                </div>
            </div>
        </div>
    )
}

export default Hero;