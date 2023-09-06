import NavigationBar from "./NavigationBar";

export default function Header () {
    return (
        <div className="header__header-container">
            <h1 className="appTitle">The Northcoders News</h1>
            <NavigationBar/>
        </div>
    )
}