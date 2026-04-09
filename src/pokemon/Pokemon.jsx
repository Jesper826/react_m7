import { useEffect, useState } from 'react';
import styles from './Pokemon.module.css';

const TYPE_CLASS_MAP = {
    fire: styles.typeFire,
    grass: styles.typeGrass,
    water: styles.typeWater,
    psychic: styles.typePsychic,
    electric: styles.typeElectric,
    normal: styles.typeNormal,
    flying: styles.typeFlying,
    poison: styles.typePoison,
    ground: styles.typeGround,
    rock: styles.typeRock,
    bug: styles.typeBug,
    ghost: styles.typeGhost,
    steel: styles.typeSteel,
    ice: styles.typeIce,
    dragon: styles.typeDragon,
    dark: styles.typeDark,
    fairy: styles.typeFairy,
    fighting: styles.typeFighting,
};

export function Pokemon() {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/1')
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
                <h3>stats</h3>
                <ul>
                    {pokemon.stats.map((stat) => (
                        <li key={stat.stat.name}>
                            <strong>{stat.stat.name}:</strong> {stat.base_stat}
                        </li>
                    ))}
                </ul>
                <h4> Moves </h4>
                <ul>
                    {pokemon.moves.slice(0, 5).map((move) => (
                        <li key={move.move.name}>{move.move.name}</li>
                    ))}
                </ul>   
            </div>
            
        </section>
    );
}
