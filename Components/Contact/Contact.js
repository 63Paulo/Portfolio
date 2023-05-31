const Contact = () => {
    // Ici les fonctions Js utilisés
    const handleSubmit = (event) => {
        event.preventDefault();
        
    }
      return (
          <form className="contact" id="contact" onSubmit={handleSubmit}>
                <h1>CONTACT</h1>
                <label for="name">Nom :</label>
                <input type="text" id="name" name="name" required />
                <label for="name2">Prénom :</label>
                <input type="text" id="name2" name="name2" required />
                <label for="email">Email :</label>
                <input type="email" id="email" name="email" required />
              
                <label for="message">Message :</label>
                <textarea id="message" name="message" required></textarea>
                <input type="submit" value="Envoyer" />
            </form>      
      );
    };
    
    export default Contact;
    
