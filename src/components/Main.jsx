export default function Main () {
    const equipmentItems = ["dumbells", "pull-up bar", "kettle bell"]
    
    const listEquipmentItems = equipmentItems.map((equipmentItem) =>
        <li key={equipmentItem}>{equipmentItem}</li>)

    function submitForm(event) {
        event.preventDefault()
        console.log("Form freaking submitted!")
    }

    return (
        <main>
            <form onSubmit={submitForm} className="equipment-form">
                <input
                    type="text"
                    placeholder="e.g. dumbbells"
                    aria-label="add equipment"
                    name="equipment"/>
                <button>Add equipment</button>
            </form>
            <ul>{listEquipmentItems}</ul>
        </main>
    )
}