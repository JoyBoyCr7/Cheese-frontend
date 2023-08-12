import { useLoaderData } from "react-router-dom"
import { Form } from "react-router-dom"
import { useState } from "react"


function Show(props){
    const cheese = useLoaderData()
    /// testing
    console.log(cheese)
    //  testing

    const [completed, setcompleted] = useState(true)
    function changeState(event){
        if (event.target.value.trim() === ""){
            setcompleted(!completed)
            event.target.value = ""
            alert(`Please input a ${event.target.placeholder}`)
        }
        
    }

    return <div className="show">
            <h1>{cheese.name}</h1>
            <img src={cheese.image} alt={cheese.name}/>
            <h1>{cheese.countryOfOrigin}</h1>

            <h2>Update {cheese.name}</h2>
            <Form action={`/update/${cheese._id}`} method="put">
                <input required type="text" name="name" placeholder="cheese name" onChange={changeState}/>
                <input required type="text" name="countryOfOrigin" placeholder="Origin" onChange={changeState}/>
                <input required type="text" name="image" placeholder="cheese image" onChange={changeState}/>
                <input type="submit" value="update Cheese"/>
            </Form>
            <h2>Delete {cheese.name}</h2>
            <Form action={`/delete/${cheese._id}`} method="post">
                <input type="submit" value="Delete Cheese"/>
            </Form>
            
        </div>
}

export default Show