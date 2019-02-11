
class App extends React.Component {
    constructor(props) {
        super(props);
        this.data =  [{name: 'Рефераты', link: '/',component: Essay},
                      {name: 'Криэйтор', link: '/creator', component: Creator},
                      {name: 'Гадалка', link: '/fortune', component: Fortune}]
    }
    render() {
        return (
            <Router>
                <Components data={this.data}/>
            </Router>
        )
    }
}

class Components extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="tabs">
            <nav className="tabs__items">
                {this.props.data.map((item) => {
                    return (
                    <NavLink exact className={'tabs__item'} to={item.link} activeClassName={'tabs__item-active'}>{item.name}</NavLink>
                )
                })}
            </nav>
            <div className="tabs__content">
                {this.props.data.map((item) => {
                    return(
                    <Route exact path={item.link} component={item.component}/>
                )
                })}
            </div>
            </div>
        )
    }

}