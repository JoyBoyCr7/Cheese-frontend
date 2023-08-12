import { Link , useLoaderData, Form} from "react-router-dom"

import { useState } from "react"



function Index(props){
    const cheeses = useLoaderData()

    return (
        <div className="main">
            <h2 className="header">Create a new Cheese Below</h2>
            <Form action="/create" method="post" className="form">
                <div className="inputs">
                    <input required type="text" name="name" placeholder="cheese name" />
                    <input type="text" name="countryOfOrigin" placeholder="Origin"/>
                    <input type="text" name="image" placeholder="cheese image" required/>
                    <input type="submit" value="Create Cheese"/>
                </div>
            </Form>
            <div className="allcheese">
                {cheeses.map((cheese, index) => <div key={index} className="cheese">
                <Link to={`/${cheese._id}`}>
                    <h1>{cheese.name}</h1>
                </Link> 
                <img src={cheese.image} alt={cheese.name} />
                <h3>{cheese.countryOfOrigin}</h3>
                </div>)}
            </div>
        </div>
    )
}
export default Index