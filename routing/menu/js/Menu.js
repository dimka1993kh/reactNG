
const ReactRouter = window.ReactRouterDOM;
const Router = ReactRouterDOM.HashRouter;
const Route = ReactRouterDOM.Route;
const NavLink = ReactRouterDOM.NavLink;
const nameLink = [{
    id: 1,
    name: 'Главная',
    link: ''
    }, {
    id: 2,
    name: 'Дрифт-такси',
    link: 'drift'
    }, {
    id: 3,
    name: 'Time Attack',
    link: 'timeattack'
    }, {
    id: 4,
    name: 'Forza Karting',
    link: 'forza'
    }];
    

    
class Menu extends React.Component {
render() {
    return (
        <Router>
            <Navigation/>
        </Router>
    )
    }
}

class Navigation extends React.Component {
    render() {
        return (
            <nav className={'menu'}> 
                {nameLink.map((item) => {
                    return (
                        <NavLink className={'menu__item'} to={item.link} activeClassName={"menu__item-active"}>{item.name} </NavLink>
                    )
                })}
            </nav>
        )
    }
}









