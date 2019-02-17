class App extends React.Component {

  render () {

    return (
      <Router>
        <ConponentsTable/>
      </Router>
    )
  }
}

class ConponentsTable extends React.Component {

  render () {

    return (
      <div className="tabs">
        <nav className="tabs__items">
          <NavLink exact className={'tabs__item'} to={'/'} activeClassName={'tabs__item-active'}>Рефераты</NavLink>
          <NavLink className={'tabs__item'} to={'/creator'} activeClassName={'tabs__item-active'}>Криэйтор</NavLink>
          <NavLink className={'tabs__item'} to={'/fortune'} activeClassName={'tabs__item-active'}>Гадалка</NavLink>
        </nav>

        <div className="tabs__content">
          <Route exact path={'/'} component={Essay}/>
          <Route path={'/creator'} component={Creator}/>
          <Route path={'/fortune'} component={Fortune}/>
        </div>
      </div>
    )
  }
}