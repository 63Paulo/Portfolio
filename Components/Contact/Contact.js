import { useState } from "react";

const Contact = () => {
    // Code pour récupérer les informations d'un formulaire
    // Les informations saisies sont enregistrées dans la console du navigateur
        
    // Déclaré l'état initial du formulaire avec les guillemets vides
    const [formData, setFormData] = useState({
            name: '',
            name2:'',
            email:'',
            message:''
        })


        // Fonction de gestion du formulaire quand il est soumis
        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(formData);
            
        }

        // Fonction qui permet de gérer les changements de saisies
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
                // Récupérer la valeur saisie 
                value={formData.name} 
                // Appel de la fonction handleChange lorsque qu'il y a un changement
                onChange={handleChange} required />
                
                <label htmlFor="name2">Prénom :</label>
                <input type="text" id="name2" name="name2" 
                value={formData.name2} 
                onChange={handleChange} required />
                
                <label htmlFor="email">Email :</label>
                <input type="email" id="email" name="email" 
                value={formData.email} 
                onChange={handleChange} required />
              
                <label for="message">Message :</label>
                <textarea id="message" name="message" 
                value={formData.message} 
                onChange={handleChange} required></textarea>
                
                
                <input type="submit" value="Envoyer" />
            </form>      
      );
    };
    
export default Contact;
