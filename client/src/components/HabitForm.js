import {useState} from 'react'

function HabitForm() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const habit ={ title, description}

        const response = await fetch('/api/habits', {
            method: 'POST',
            body: JSON.stringify(habit),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok){
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setDescription('')
            setError(null)
            console.log('new habit added')
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
    <h3>Add new Habit</h3>
    <label>Habit title:</label>
    <input type = "text" onChange={(e) => setTitle(e.target.value)} value={title} />
    <label>Habit Description: </label>
    <input type = "text" onChange={(e) => setDescription(e.target.value)} value={description} />
    <button type = "submit">Add new habit</button>
    {error && error}
    </form>
    </div>
  )
}

export default HabitForm