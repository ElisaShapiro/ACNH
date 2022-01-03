import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <>
            <NavLink exact to="/">
                Home
            </NavLink>
            <NavLink  to="/art">
                Art
            </NavLink>
            <NavLink  to="/bugs">
                Bugs
            </NavLink>
            <NavLink  to="/fish">
                Fish
            </NavLink>
            <NavLink  to="/fossils">
                Fossils
            </NavLink>
            <NavLink  to="/songs">
                Songs
            </NavLink>
            <NavLink  to="/seacreatures">
                Sea Creatures
            </NavLink>
            <NavLink  to="/villagers">
                Villagers
            </NavLink>
        </>
    )
}

export default NavBar;