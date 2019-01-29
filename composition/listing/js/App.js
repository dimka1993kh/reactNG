'use strict';

class Card extends React.Component {
  constructor (props) {
    super(props);
    console.log('props',props)
  }
  color() {
    console.log('colors')
    switch(this.props.item.type) {
      case 'unisex':
        return "black";
      case 'male':
        return "blue";
      case 'female':
        return "orange";
    }
  }
  render() {
    return <Item color={this.color()} item={this.props.item} />
  }
}

const App = ({items}) => {
  console.log(items)
  return (
    <main>
    {items.map(item => {
      return <Card item={item}/>
    })}
  </main> 
  
  )};


