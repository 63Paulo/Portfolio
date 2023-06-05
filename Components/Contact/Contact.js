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
          <section id="contact">
            <form className="background_contact"  onSubmit={handleSubmit}>
                    <h1 className="text-center text-white text-5xl uppercase pt-5 pb-5 ">contact</h1>
                    <div className="m-auto w-1/2 flex flex-col">
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
                        <textarea className="h-48" id="message" name="message " 
                        value={formData.message} 
                        onChange={handleChange} required></textarea>

                        
                    </div>
                    
                    <div className="w-full flex">
                        <input className="mx-auto" type="submit" value="Envoyer" />
                    </div>
                </form>      
          </section>
      );
    };
    
export default Contact;
