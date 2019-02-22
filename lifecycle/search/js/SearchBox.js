let searchField;
class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fixed: false };
  }

  render() {
    return <SearchBoxView fixed={this.state.fixed} />
  }

  isFixed() {
      if (window.pageYOffset <= 164) {
        return false;
      }
      if (searchField.getBoundingClientRect().top <= 0) {
        return true;
      }
  }

  setPosition() {
    this.setState({
      fixed: this.isFixed();
    })
  }
  componentDidMount() {
    window.addEventListener('scroll', this.setPosition.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setPosition.bind(this));
  }
}
