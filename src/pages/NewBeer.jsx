import { useState } from "react"
import { Button, Form } from "react-bootstrap";


function NewBeer(){
    const [formData, setFormData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: '' 
    });

   const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("here")
        fetch("https://ih-beers-api2.herokuapp.com/beers/new", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => console.log("Success: ", data))
        .catch(err => console.log("Failed: ", err));

    }

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    return(
        <>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" name="name" value={formData.name} onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group  >
                    <Form.Label>Tagline</Form.Label>
                    <Form.Control type="text" placeholder="tagline" name="tagline" value={formData.tagline} onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group  >
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" name="description" value={formData.description} onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group  >
                    <Form.Label>First brewed</Form.Label>
                    <Form.Control type="text" placeholder="First brewed" name="first_brewed" value={formData.first_brewed} onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group  >
                    <Form.Label>Brewers Tips</Form.Label>
                    <Form.Control type="text" placeholder="Brewers Tips" name="brewers_tips" value={formData.brewers_tips} onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group  >
                    <Form.Label>Attenuation Level</Form.Label>
                    <Form.Control type="number" placeholder="Attenuation Level" name="attenuation_level" value={formData.attenuation_level} onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group  >
                    <Form.Label>Contributed By</Form.Label>
                    <Form.Control type="text" placeholder="Contributed By" name="contributed_by" value={formData.contributed_by} onChange={handleInputChange}/>
                </Form.Group> 

                <Button type="submit" variant="primary" >
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default NewBeer