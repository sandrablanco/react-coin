import {Link, Outlet} from 'react-router-dom';

function Root() {
    return (
        <>
        <nav>
            <Link to="/">Home</Link> | 
            <Link to="/favorites"> Favorites</Link>
           
        </nav>
         <Outlet /> {/*activa las rutas hijas*/}
        </>
    );
}
export default Root;    