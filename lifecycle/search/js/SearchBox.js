
class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fixed: false };
  }

  render() {
    return <SearchBoxView fixed={this.state.fixed}/>
  }

  isFixed() {
      if (window.pageYOffset <= 164) {
        return false;
      }
      if (this.searchField.getBoundingClientRect().top <= 0) {
        return true;
      }
  }

  setPosition() {
    this.setState({
      fixed: this.isFixed()
    })
  }
  componentDidMount() {
    this.searchField = document.querySelector('.search-box');
    this.setPosition = this.setPosition.bind(this)
    window.addEventListener('scroll', this.setPosition)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setPosition)
  }
}
