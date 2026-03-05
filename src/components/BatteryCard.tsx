import type {Battery} from "../types/Battery"

type Props = {
    battery: Battery
}

function BatteryCard({ battery }: Props) {
    return (
        <div className="bg-white shadow rounded-xl p-6 w-64">

            <h2 className="text-gray-500 text-sm mb-2">
                Battery
            </h2>

            <div className="text-3xl font-bold mb-3">
                {battery.level_percent}%
            </div>

            <div className="text-sm text-gray-600">
                <div>Charging: {battery.charging ? "yes" : "no"}</div>
                <div>Mode: {battery.mode ?? "null"}</div>
                <div>State: {battery.state}</div>
            </div>

        </div>
    )
}

export default BatteryCard