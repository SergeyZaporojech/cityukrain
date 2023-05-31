import './cardCity.css';

export function CardCity(prop) {
    return (
        <div class='Card'>
            <h3>{prop.name}</h3>
            <p>Populations: {prop.population} person.</p>
            <p>{prop.discription}</p>
        </div>
    );
};