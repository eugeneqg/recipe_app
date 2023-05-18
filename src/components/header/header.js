import NavBar from "./navbar/navbar";
import Search from "./search/search";
import "./header.sass";

const Header = () => {
    return (
        <header className="back mb-4">
            <NavBar/>
            <Search/>
        </header>
    )
}

export default Header;