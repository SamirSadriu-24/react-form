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
    return (
        <>
            <form>
                <input
                    type="text"
                    placeholder='Cerca un post'
                />
            </form>

            <ul className="box-articoli">
                {blogPosts.map((blog, index) => (
                    <li className="articolo"
                        key={index}>
                        {blog.title}
                    </li>
                ))}
            </ul>

        </>
    )
}

export default MyBlogList