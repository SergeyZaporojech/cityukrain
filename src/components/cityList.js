import { CardCity } from "./cardCity";

export function CityList(prop) {
    return (
        <div>
            <h2>Citys Ukrain:</h2>
            {prop.citys.map(c => <CardCity key={c.id} {...c} />)};
        </div>
    );
};