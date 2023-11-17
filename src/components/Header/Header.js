import "./Header.css" 
import modeIcon from "../../assets/images/mode-white-icon.svg"

export const Header = () => {
  return (
    <header className="header">
        <div className="container flex">
            <h1 className="header-title">Where in the world?</h1>
            <button className="header-btn flex">
                <img className="header-img" src={modeIcon} alt="" />
                Dark Mode
            </button>
        </div>
    </header>
  )
}
