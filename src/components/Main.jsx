import { useState } from "react"

export default function Main () {
    const [equipmentItems, setEquipmentItems] = useState([])
    
    const listEquipmentItems = equipmentItems.map((equipmentItem) =>
        <li key={equipmentItem}>{equipmentItem}</li>)

    function submitForm(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newEquipmentItem = formData.get("equipmentItem").trim()
        if (newEquipmentItem != "")
            setEquipmentItems(prevItems => [...prevItems, newEquipmentItem])
    }

    return (
        <main>
            <form onSubmit={submitForm} className="equipment-form">
                <input
                    type="text"
                    placeholder="e.g. dumbbells"
                    aria-label="add equipment"
                    name="equipmentItem"/>
                <button>Add equipment</button>
            </form>
            <ul>{listEquipmentItems}</ul>
        </main>
    )
}