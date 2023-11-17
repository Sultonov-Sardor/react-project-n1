import "./Input.css"
import search from "../../assets/images/search.svg"

export const Input = () => {

  return (
    <div className="container flex-box">
        <form className="input-left flex">
            <img className="input-img" src={search} alt="" />
            <input className="input" type="search" placeholder="      Search for a country…"/>
        </form>
        <select className="select-right" name="" id="">
          <option className="select-option" value="ALL"> ALL</option>
        </select>
    </div>
  )
}
