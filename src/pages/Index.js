import { Link , useLoaderData, Form} from "react-router-dom"

function Index(props){
    const cheeses = useLoaderData()

    return (
        <div>
            <h2>Create a new Cheese </h2>
            <Form action="/create" method="post">
                <input type="text" name="name" placeholder="cheese name"/>
                <input type="text" name="countryOfOrigin" placeholder="Origin"/>
                <input type="text" name="image" placeholder="cheese image"/>
                <input type="submit" value="create Cheese"/>
            </Form>

            {cheeses.map((cheese, index) => <div key={index} className="cheese">
            <Link to={`/${cheese._id}`}>
                <h1>{cheese.name}</h1>
            </Link> 
            <img src={cheese.image} alt={cheese.name}/>
            <h3>{cheese.countryOfOrigin}</h3>
            
        </div>)}
        </div>
    )
}
export default Index