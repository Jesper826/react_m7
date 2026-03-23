import './AboutMe.css'

export function AboutMe() {

    return (
        <article className="about-me">
            <h1 className="about-me__title">ik ben jesper</h1>
            <div className="about-me__layout">
                <p className="about-me__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, iusto optio eius sapiente temporibus aliquid inventore itaque, accusamus qui perspiciatis adipisci excepturi aspernatur molestias autem? Itaque, iste culpa. Ipsa, sequi.</p>
                <img className="about-me__image" src="/banaan.jpg" alt="banaan" />
            </div>
        </article>
    )
}