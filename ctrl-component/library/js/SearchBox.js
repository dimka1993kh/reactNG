'use strict'

class SearchBox extends React.Component {
    constructor(props) {
        super(props)
    }
    newSearch(event) {
        event.preventDefault();
        this.props.filterBooks(event.currentTarget.value)
    }
    render() {
        return (
            <input type="text" placeholder="Поиск по названию или автору" defaultValue={this.props.value} onChange={this.newSearch.bind(this)} value={this.props.value}/>
        );
    }
}