import { useState } from "react"
import Workout from "./Workout"
import EquipmentList from "./EquipmentList"
import { getWorkoutFromFlexGPT } from "./ai"

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

    const [workout, setWorkout] = useState("")

    async function getWorkout() {
        const workoutMD = await getWorkoutFromFlexGPT(equipmentItems)
        setWorkout(workoutMD)
    }

    function deleteEquipmentItem(indexToDelete) {
        setEquipmentItems(prevItems => 
            prevItems.filter((item, currentIndex) => {
                return currentIndex !== indexToDelete
            })
        )
        setWorkout("")
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
                    getWorkout={getWorkout}
                    onDeleteItem={deleteEquipmentItem}/>
                {workout && <Workout workout={workout}/>}
            </>
            )}
        </main>
    )
}