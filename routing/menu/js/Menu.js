const ReactRouter = window.ReactRouterDOM;
const Router = ReactRouterDOM.HashRouter;
const Route = ReactRouterDOM.Route;
const NavLink = ReactRouterDOM.NavLink;   

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.data = [{name: 'Главная', link: '/'},
                     {name: 'Дрифт-такси', link: '/drift'},
                     {name: 'Time Attack', link: '/timeattack'},
                     {name: 'Forza Karting', link: '/forza'}]
        console.log(this.props)
    }
render() {
    return (
        <nav className={'menu'}> 
            {this.data.map((item) => {
                return (
                    <NavLink exact className={'menu__item'} to={item.link} activeClassName={"menu__item-active"}>{item.name} </NavLink>
                )
            })}
        </nav>
    )
    }
}
