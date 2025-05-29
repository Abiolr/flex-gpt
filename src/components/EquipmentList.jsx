export default function EquipmentList(props) {
    const listEquipmentItems = props.equipmentItems.map((equipmentItem, index) =>
        <li key={equipmentItem + index}>
            {equipmentItem}
            <button
                aria-label={`delete ${equipmentItem}`}
                onClick={() => props.onDeleteItem(index)}
            >
                ⨉
            </button>
        </li>
    )
    
    return (
        <div>
            <h1 className="renderHeader">Equipment on hand:</h1>
            <ul>{listEquipmentItems}</ul>
            <div className="genWorkout">
                <div>
                    <h1>Ready for a workout?</h1>
                    <p>Generate a workout based on your list of equipment </p>
                </div>
                <button
                    onClick={props.getWorkout}
                >
                    Generate workout
                </button>
            </div>
        </div>
    )
}