const navigation = [
    {
        name: 'Рефераты',
        link: '',
        component: Essay
    },{
        name: 'Криэйтор',
        link: 'creator',
        component: Creator
    },{
        name: 'Гадалка',
        link: 'fortune',
        component: Fortune
    }
]

class App extends React.Component {
    constructor(props) {
        super(props)
        console.log('App', location)
    }
    
    render() {
        return (
            <Router>
            <div className="tabs">
                <NavigationLink/>
                <Components/>
            </div>
            </Router>
        )
    }
}

class NavigationLink extends React.Component {
    constructor(props) {
        super(props)
        console.log('NavigationLink', location)
    }
    render() {
        return (
            <nav className="tabs__items">
                    {navigation.map((item) => {
                        return (
                        <NavLink className={'tabs__item'} to={item.link} activeClassName={'tabs__item-active'}>{item.name}</NavLink>
                    )
                    })}
                </nav>
        )
    }

}
class Components extends React.Component {
    render() {
        return (
                <div className="tabs__content">
                    {navigation.map((item) => {
                            return(
                            <Route exact path={`/${item.link}`} component={item.component}/>
                        )
                        })}
                </div>
        )
    }
}










/*
<div class="tabs">
  <nav class="tabs__items">
    <a class="tabs__item" href="#/">Рефераты</a>
    <a class="tabs__item" href="#/creator">Криэйтор</a>
    <a class="tabs__item" href="#/fortune">Гадалка</a>
  </nav>
  <div class="tabs__content">
    ...
  </div>
</div>*/