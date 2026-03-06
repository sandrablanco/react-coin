import {Link, Outlet} from 'react-router-dom';

function Root() {
    return (
        <>
        <div>
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
            <Outlet /> {/*activa las rutas hijas*/}
        </div>
        </>
    );
}
export default Root;    