'use client'

import CountUp from "react-countup"


const AnimatedCounter = ({ amount }: { amount: number }) => {
    return (
        <div className="w-full">
            <CountUp
                end={amount}
                decimal=","
                duration={2.75}
                decimals={2}
                prefix="$"
            />
        </div>
    )
}

export default AnimatedCounter