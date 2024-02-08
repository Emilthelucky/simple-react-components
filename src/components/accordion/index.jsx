import { useState } from "react"
import './styles.css'
import data from './data'

export default function Accordion() {

    const [multiple, setMultiple] = useState([])

    const handleSelection = function(indexOfList){

        let newMultiple = [...multiple]

        if(multiple.indexOf(indexOfList) === -1){
            newMultiple.push(indexOfList)
        }else{
            newMultiple.splice(indexOfList , 1)
        }
        setMultiple(newMultiple)
    }

    return <div className="wrapper">
        {data.map((item,index) => {
            console.log(index)
            return <div className="items">
                <div className="item">
                    <div className="title" onClick={() => handleSelection(index)}>
                        {item.question}
                        <span>+</span>
                    </div>
                    {multiple.indexOf(index) !== -1 ? <div>{item.answer}</div> : null}
                    
                </div></div>
        })}
    </div>
}