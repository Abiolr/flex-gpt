import { useState } from "react"
import Workout from "./Workout"
import EquipmentList from "./EquipmentList"

export default function Main () {
    const [equipmentItems, setEquipmentItems] = useState([])

    function submitForm(event) {
        event.preventDefault()
        const formElement = event.currentTarget
        const formData = new FormData(formElement)
        const newEquipmentItem = formData.get("equipmentItem").trim()
        if (newEquipmentItem != ""){
            setEquipmentItems(prevItems =>
                [...prevItems, newEquipmentItem])
        }
        formElement.reset()
    }

    const [workoutShown, setWorkoutShown] = useState(false)

    function showWorkout() {
        setWorkoutShown(true)
    }

    return (
        <main>
            <form onSubmit={submitForm}
                className="equipment-form">
                <input
                    type="text"
                    placeholder="e.g. dumbbells"
                    aria-label="add equipment"
                    name="equipmentItem"/>
                <button>Add equipment</button>
            </form>
            {equipmentItems.length > 0 && (
            <>
                <EquipmentList
                    equipmentItems={equipmentItems}
                    showWorkout={showWorkout}/>
                {workoutShown && <Workout />}
            </>
            )}
        </main>
    )
}