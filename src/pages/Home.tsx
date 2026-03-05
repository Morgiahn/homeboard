import { useEffect, useState } from "react"
import BatteryCard from "../components/BatteryCard"
import type {Battery} from "../types/Battery"

function Home() {

    const [battery, setBattery] = useState<Battery | null>(null)

    useEffect(() => {

        fetch("http://192.168.1.61:9001/status")
            .then(res => res.json())
            .then(data => setBattery(data))
            .catch(err => console.error(err))

    }, [])

    return (
        <div className="p-6">

            <h1 className="text-2xl font-bold mb-6">
                Dashboard
            </h1>

            {battery ? (
                <BatteryCard battery={battery} />
            ) : (
                <div>Loading battery...</div>
            )}

        </div>
    )
}

export default Home