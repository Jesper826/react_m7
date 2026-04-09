import { useState, useEffect } from 'react';

export function Cat() {
    const [cats, setCatsData] = useState([]);

    useEffect(() => {
        fetch('https://mediacollege.dev/api/cats/')
            .then(response => response.json())
            .then(data => {
                setCatsData(data);
            });
    }, []);

    if (cats.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <section className="cat">
            {cats.map((cat) => (
                <article key={cat.name}>
                    <img src={cat.img} alt={cat.name} />
                    <h3>{cat.name}</h3>
                    <p>Leeftijd: {cat.age}</p>
                    <p>Geslacht: {cat.isMale ? 'Mannelijk' : 'Vrouwelijk'}</p>
                    <p>Kleur: {cat.color}</p>
                </article>
            ))}
        </section>
    );
}
