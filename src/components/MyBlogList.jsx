import { useState } from "react";

const blogPosts = [
    {
        id: 1,
        title: "Come avviare un blog di successo",
        description: "Scopri i passaggi fondamentali per creare e far crescere un blog di successo nel 2024."
    },
    {
        id: 2,
        title: "10 strumenti indispensabili per blogger",
        description: "Una lista dei migliori strumenti per ottimizzare contenuti, SEO e gestione del tuo blog."
    },
    {
        id: 3,
        title: "Strategie SEO per principianti",
        description: "Tecniche di base per migliorare il posizionamento del tuo blog sui motori di ricerca."
    },
    {
        id: 4,
        title: "Come monetizzare un blog",
        description: "Metodi efficaci per trasformare il tuo blog in una fonte di reddito."
    },
    {
        id: 5,
        title: "Creare contenuti virali",
        description: "Suggerimenti e strategie per creare articoli che catturano l’attenzione e vengono condivisi."
    }
];



const MyBlogList = () => {

    const [articolo, impostaArticolo] = useState(blogPosts)
    const [titoloNuovo, impostaNuovoArticolo] = useState("")

    const aggiungiArticolo = e => {
        e.preventDefault();
        const titolo = titoloNuovo.trim();
        if (!titolo) return;

        const nuovo = {
            id: articolo.length + 1,
            title: titolo,
            description: ""
        };

        const articoliAggiornati = ([...articolo, nuovo]);
        impostaArticolo(articoliAggiornati);
        impostaNuovoArticolo("");
    }

        const rimuoviArticolo = i => {
        const articoliAggiornati = articolo.filter((articolo, articoloIndex) => {
            return articoloIndex !== i
        })
        .map((articolo, index) => ({ ...articolo, id: index + 1 }));
        impostaArticolo(articoliAggiornati);
    }

    return (
        <>
            <form onSubmit={aggiungiArticolo}>
                <input
                    type="text"
                    placeholder='aggiungi un articolo'
                    value={titoloNuovo}
                    onChange={(e) => { impostaNuovoArticolo(e.target.value) }}
                />
                <button className="Invio" type='submit'>Inserisci l'articolo nuovo</button>
            </form>

            <ul className="box-articoli">
                {articolo.map((blog, index) => (
                    <li className="articolo"
                        key={blog.id}>
                        {blog.id + ")"}{" "}{blog.title}
                        <button className="Remove" onClick={() => rimuoviArticolo(index)}>
                            Elimina
                        </button>
                    </li>
                ))}
            </ul >

        </>
    )
}

export default MyBlogList