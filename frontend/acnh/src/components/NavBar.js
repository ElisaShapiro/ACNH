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
            <NavLink  to="/seacreatures">
                Sea Creatures
            </NavLink>
            <NavLink  to="/songs">
                Songs
            </NavLink>
            <NavLink  to="/villagers">
                Villagers
            </NavLink>
            <NavLink to="/login">
                Login
            </NavLink>
            <NavLink to="/signup">
                Sign Up
            </NavLink>
        </>
    )
}

export default NavBar;