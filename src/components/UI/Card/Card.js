import "./card.css"

export const Card = ({img, name, population, region, capital}) => {
  return (
    <li className="card">
        <img className="card-img" src={img} alt="" />
        <h2 className="card-title">{name}</h2>
        <p className="card-pop">Population: {population}</p>
        <p className="card-reg">Region: {region}</p>
        <p className="card-cap">Capital: {capital}</p>
    </li>
  )
}
