


//const {AutoComplete} = antd;
/*
const Autocomplete = () => (
  <div>
    Тип квартиры:<br/>
    <select>
      <option>Квартира в новостройке</option>
      <option>Готовая квартира</option>
      <option>Загородный дом</option>
    </select>
   </div>
);
*/

const source = {
  'new_building,': 'Квартира в новостройке',
  'old_building,': 'Готовая квартира',
  'countryhouse': 'Загородный дом'
}
class AutoCompleteTest extends React.Component {
  constructor(...arg) {
    super(...arg)
    this.state = {
      apartment: []
    };
  }
  handleChange = (value) => {
    this.setState({apartment: value});
  };
  render() {
    return (
      <AutoComplete
      defaultValue="123"
      direction="down"
      selectedPosition="above"
      dataSource={source}
      value={this.state.apartment}
      onChange={this.handleChange}
      lable='Тип квартиры:'
      />
    )
  }
}
