import React from 'react';

const Contact = () => {
    // Fonction pour réinitialiser les valeurs des champs du formulaire après soumission
    const handleFormSubmit = (event) => {
        // Empêcher le comportement par défaut du formulaire qui provoque le rechargement de la page
        event.preventDefault();
        
        // Réinitialiser les valeurs des champs du formulaire à une chaîne vide
        document.getElementById('name').value = '';
        document.getElementById('name2').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    };

    return (
        <section id="contact">
            <form className="background_contact" data-netlify="true" onSubmit={handleFormSubmit}>
                <h1 className="text-center text-white text-5xl uppercase pt-6 pb-5 ">contact</h1>
                <div className="m-auto w-1/2 flex flex-col">
                    <label htmlFor="name">Nom :</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="name2">Prénom :</label>
                    <input type="text" id="name2" name="name2" />

                    <label htmlFor="email">Email :</label>
                    <input type="email" id="email" name="email" />

                    <label htmlFor="message">Message :</label>
                    <textarea className="h-48 p-2" id="message" name="message"></textarea>
                </div>
                <div className="w-full flex">
                    <input className="mx-auto" type="submit" value="Envoyer" />
                </div>
            </form>
        </section>
    );
};

export default Contact;
