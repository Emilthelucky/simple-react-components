import { useState } from "react"
import './styles.css'
import data from './data'

export default function Accordion() {

    const [selected, setSelected] = useState(null)
    const [enableMultipleSelection, setEnableMultipleSelection] = useState(false)
    const [multiple, setMultiple] = useState([])

    const handleSingleSelection = function (getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    const handleMultipleSelection = function (getCurrentId) {
        console.log("enabled")
        let copyMultiple = [...multiple]

        const findCurrentIndex = copyMultiple.indexOf(getCurrentId)
        if (findCurrentIndex === -1) {
            copyMultiple.push(getCurrentId)
        } else {
            copyMultiple.splice(findCurrentIndex, 1)
        }
        console.log(copyMultiple)
        setMultiple(copyMultiple)
    }

    return <div className="wrapper">
        <button onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}>Enable Multiple Selection</button>
        <div className="elements">
            {
                data && data.length > 0 ?
                    data.map(dataItem =>
                        <div className="element">
                            <div className="title">
                                <h3>{dataItem.question}</h3>
                                <div onClick={enableMultipleSelection ? () => handleMultipleSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}>+</div>
                            </div>
                            {
                                enableMultipleSelection ? multiple.indexOf(dataItem.id) !== -1 && <div>{dataItem.answer}</div> : selected === dataItem.id && dataItem.answer && <div>{dataItem.answer}</div>
                            }
                            {/* <p>{selected === dataItem.id ? dataItem.answer : ''}</p> */}
                        </div>
                    )
                    : <div>No Data Found!</div>
            }
        </div>
    </div>
}

