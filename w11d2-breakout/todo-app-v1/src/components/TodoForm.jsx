import { useState } from "react"

export default function TodoForm(props){
  const initialData = {name:"", type:""}

  const [formData, setFormData] = useState(initialData)

  const handleChange = (event) => {
    const {name, value} = event.target

    setFormData({...formData, [name]:value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    props.onSubmit(formData)

    setFormData(initialData)
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleChange} placeholder="Enter a task name!"/>
      <button>Add task</button>
    </form>
  )
}