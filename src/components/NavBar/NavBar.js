import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navBar">
            <div>
                <img src={require('../img/messi.jpg')} />
            </div>
            <div>
            <ul className='options'>
                <li>
                    <NavLink className={({isActive}) => (isActive ? 'active' : 'inactive')} to="/">
                        Todo
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => (isActive ? 'active' : 'inactive')} to="/category/men's clothing">
                        Hombre
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => (isActive ? 'active' : 'inactive')} to="/category/women's clothing">
                        Mujer
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => (isActive ? 'active' : 'inactive')} to="/category/jewelery">
                        Joyeria
                    </NavLink>
                </li>                             
            </ul>
            </div>
            <div>
                <Link to="/cart">
                <CartWidget/>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;