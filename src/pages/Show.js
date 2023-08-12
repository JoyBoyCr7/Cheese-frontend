import { useLoaderData } from "react-router-dom"
import { Form } from "react-router-dom"

function Show(props){
    const cheese = useLoaderData()
    console.log(cheese)
    return <div>
            <h1>{cheese.name}</h1>
            <img src={cheese.image} alt={cheese.name}/>
            <h1>{cheese.countryOfOrigin}</h1>

            <h2>Update {cheese.name}</h2>
            <Form action={`/update/${cheese._id}`} method="put">
                <input required type="text" name="name" placeholder="cheese name"/>
                <input type="text" name="countryOfOrigin" placeholder="Origin"/>
                <input type="text" name="image" placeholder="cheese image"/>
                <input type="submit" value="update Cheese"/>
            </Form>
            <h2>Delete {cheese.name}</h2>
            <Form action={`/delete/${cheese._id}`} method="post">
                <input type="submit" value="Delete Cheese"/>
            </Form>
            
        </div>
}

export default Show