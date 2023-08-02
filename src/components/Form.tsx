import { useState } from "react"
import { Sub } from "../interface/Subs"


interface FormState {
    inputValue: Sub
}

interface FormProps {
    onNewSub: (newSub: Sub) => void
}


const Form = ({onNewSub}: FormProps) => {

    const [inputValues, setInputValues] = useState<FormState["inputValue"]>({
        nick: '',
        subsMonths: 0,
        avatar:'',
        description:''
    })
 

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        onNewSub(inputValues)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder="Nick"/>
                <input onChange={handleChange} value={inputValues.subsMonths} type="number" name="subsMonths" placeholder="SubsMonths"/>
                <input onChange={handleChange} value={inputValues.avatar} type="text" name="avatar" placeholder="Avatar"/>
                <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="Description"/>

                <button>Save subs!</button>
            </form>
        </div>
    )
}

export default Form