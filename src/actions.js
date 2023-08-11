import { baseUrl } from "./base_Url";
import { json, redirect } from "react-router-dom";

export const createAction = async({request}) => {
    const formData = await request.formData()

    const newCheese = {
        name: formData.get("name"),
        countryOfOrigin: formData.get("countryOfOrigin"),
        image: formData.get("image")
    }

    await fetch(`${baseUrl}/cheese`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCheese)
        
    })
    console.log(JSON.stringify(newCheese))
    return redirect('/')
}

export const updateAction = async({request, params}) => {
    const id = params.id
    const formData = await request.formData()

    const updatedCheese = {
        name : formData.get("name"),
        countryOfOrigin: formData.get("countryOfOrigin"),
        image: formData.get("image")
    }
   
    await fetch(`${baseUrl}/cheese/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedCheese)
    })
    console.log(JSON.stringify(updatedCheese))
    return redirect(`/${id}`)
}


export const deleteAction = async({params}) => {
    const id = params.id
    await fetch(`${baseUrl}/cheese/${id}`,{
        method: "Delete",
    })
    return redirect(`/`)
}

