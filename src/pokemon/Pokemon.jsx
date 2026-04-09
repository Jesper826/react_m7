import { useEffect, useState } from 'react';
import styles from './Pokemon.module.css';

const TYPE_CLASS_MAP = {
    fire: styles.typeFire,
    grass: styles.typeGrass,
    water: styles.typeWater,
    psychic: styles.typePsychic,
    electric: styles.typeElectric,
};

export function Pokemon() {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/1025')
            .then((response) => response.json())
            .then((data) => {
                setPokemon(data);
            });
    }, []);

    if (pokemon === null) {
        return (
            <section className={styles.pokemon}>
                <h2>Fetching Pokemon</h2>
            </section>
        );
    }

    return (
        <section className={styles.pokemon}>
            <h2 className={styles.name}>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <div className={styles.types}>
                {pokemon.types.map((entry) => {
                    const typeName = entry.type.name;
                    return (
                        <span
                            key={typeName}
                            className={`${styles.typeBadge} ${TYPE_CLASS_MAP[typeName] ?? styles.typeDefault}`}
                        >
                            {typeName}
                        </span>
                    );
                })}
            </div>
        </section>
    );
}
