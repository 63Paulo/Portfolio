import { useState } from "react";

const Contact = () => {
    // Code to retrieve information from a form
    // The information entered is saved in the browser console
        
    // Declare the initial state of the form with the empty quotes
    const [formData, setFormData] = useState({
            name: '',
            name2:'',
            email:'',
            message:''
        })
        // Function for managing the form when it is submitted
        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(formData);
            
        }
        // Function that allows you to manage input changes
        const handleChange = (event) => {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value
            })
        }
      return (
          <form className="contact" id="contact" onSubmit={handleSubmit}>
                <h1 className="contact homepageH1">CONTACT</h1>
                <label htmlFor="name">Nom :</label>
                <input type="text" id="name" name="name" 
                // Retrieve entered value
                value={formData.name} 
                // Call of the handleChange function when there is a change
                onChange={handleChange} required />
                
                <label htmlFor="name2">Prénom :</label>
                <input type="text" id="name2" name="name2" 
                value={formData.name2} 
                onChange={handleChange} required />
                
                <label htmlFor="email">Email :</label>
                <input type="email" id="email" name="email" 
                value={formData.email} 
                onChange={handleChange} required />
              
                <label htmlFor="message">Message :</label>
                <textarea id="message" name="message" 
                value={formData.message} 
                onChange={handleChange} required></textarea>
                
                
                <input type="submit" value="Envoyer" />
            </form>      
      );
    };
    
export default Contact;
