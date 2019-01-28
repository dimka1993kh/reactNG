'use strict'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      activeFilter: 'All'
    };
  }
  selectFilter(filter) {
    this.setState({
      activeFilter: filter
    })
  }
  filterProjects(){
    if (this.state.activeFilter === 'All') {
      return this.props.projects;
    } else {
      return (this.props.projects.filter((project) => {
        return project.category === this.state.activeFilter
      }))
    }
  }
  render() {
    return (
      <div>
          <Toolbar
            filters={this.props.filters}
            selected={this.state.activeFilter}
            onSelectFilter={(filter) => {this.selectFilter(filter)}} />
          <Portfolio projects={this.filterProjects()} />
      </div>
    )
  }
}