import { useState } from "react"
import { useNavigate } from "react-router-dom"


const MainForm = () => {

    let navigate = useNavigate()

    const [error , setError] = useState("") 

    const [data , setData] = useState({name:"", room: ""})
    
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const validation = () => {

        if (!data.name) {
            setError("Please Enter your name")
            return false
        }
        if (!data.room) {
            setError("Please select a room")
            return false
        }
        setError("")
        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validation()
        if(isValid) {
            navigate(`/chat/${data.room}`, {state: data});
        }
    }
    
    return (
        <div className="px-3 py-4 shadow bg-white text-dark border rounded row">
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                    <h2 className="text-success mb-4">Welcome To JusChat</h2>
                </div>
                <div className="form-group mb-4">
                    <input type="text" className="form-control bg-light" name="name" placeholder="Enter name" onChange={handleChange}  />
                </div>
                <div className="form-group mb-4">
                    <select className="form-select bg-light" name="room" aria-label="Default select example" onChange={handleChange} >
                        <option value=" ">Select Room</option>
                        <option value="gaming">Gaming</option>
                        <option value="SocialMedia">Social Media</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-success w-100 mb-2">Submit</button>
                {error ? <small className = "text-danger m-auto">{error}</small> : ""}              
            </form>
        </div>

    )
}

export default MainForm