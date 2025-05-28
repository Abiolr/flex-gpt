import { useState } from "react"

export default function Main () {
    const [equipmentItems, setEquipmentItems] = useState([])
    
    const listEquipmentItems = equipmentItems.map((equipmentItem) =>
        <li key={equipmentItem}>{equipmentItem}
            <button
                aria-label="delete"
            >
                ⨉
            </button>
        </li>)

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
                <h1 className="renderHeader">Equipment on hand:</h1>
            <ul>{listEquipmentItems}</ul>
            <div className="genWorkout">
                <div>
                    <h1>Ready for a workout?</h1>
                    <p>Generate a full-body workout based on your list of equipment </p>
                </div>
                <button>Generate workout</button>
            </div>
            </>
            )}
        </main>
    )
}