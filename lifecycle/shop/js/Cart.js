class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    let update = false;
    if ((nextProps.isOpen === true && nextProps.items.length !== this.props.items.length) ||(nextProps.isOpen !== this.props.isOpen)) {
      update = true;
    } 
    return update;
  }
  render() {
    return (
      <CartView {...this.props} />
    );
  }
}