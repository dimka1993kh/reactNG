function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

let counter = 0;

class App extends React.Component {
	componentWillMount() {
		this.setState({
			data: [],
			series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
			labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
			colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
		})
	}

	componentDidMount() {
		this.populateArray();
		setInterval(this.populateArray.bind(this), 2000);
	}

	populateArray() {
		const	series = 5;
		const serieLength = 5;

    let data = new Array(series).fill(new Array(serieLength).fill(0));
    data = data.map(serie => serie.map(item => getRandomInt(0, 20)));
		this.setState({ data });
	}

	render() {
		const { data, colors, labels, series } = this.state;
		const max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);
    const chart = this.state;
		return (
			<section>
        <Charts chart={chart} max={max} className={['Charts', 'Charts--serie', 'Charts--item']}/>
				<Charts chart={chart} max={max} className={['Charts', 'Charts--serie stacked', 'Charts--item stacked']}/>
				<Charts chart={chart} max={max} className={['Charts', 'Charts--serie layered', 'Charts--item layered']}/>
				<Charts chart={chart} max={max} className={['Charts horizontal', 'Charts--serie', 'Charts--item']}/>
				<Legend className={'Legend'} labels={labels} colors={colors}/>			
			</section>
		);
	}
}

class Charts extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
			return (
					<div className={this.props.className[0]}>
					{ this.props.chart.data.map((serie, serieIndex) => {
						var sortedSerie = serie.slice(0),
							sum;
						sum = serie.reduce((carry, current) => carry + current, 0);
						sortedSerie.sort(compareNumbers);
						return  <ChartsSerie serieIndex={serieIndex} data={this.props} serie={serie} max={this.props.max} className={this.props.className} sum={sum}/>
					}) }
				</div> 
			)
	}
}
class ChartsSerie extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log(this.props.data.chart)
			return (
					<div className={this.props.className[1]}
						key={ this.props.serieIndex }
						style={this.props.className[0] === 'Charts horizontal' ? {height: 'auto'} : {height: 250}}
					>
					<label>{ this.props.data.chart.labels[this.props.serieIndex] }</label>
					{ this.props.serie.map((item, itemIndex) => {
						var color = this.props.data.chart.colors[itemIndex], style;
						var size = this.props.className[1] === 'Charts--serie stacked' ? (item / this.props.sum * 100) : (item / (this.props.max) * 100);

						style = {
							backgroundColor: color,
							zIndex: item,
						};
						this.props.className[1] === 'Charts--serie stacked' ? style.opacity = 1 : style.opacity = item/this.props.max + .05;
						this.props.className[0] === 'Charts horizontal' ? style.width = size + '%' : style.height = size + '%';

					return <ChartsItem style={style} itemIndex={itemIndex} color={color} item={item} className={this.props.className}/>
					}) }
					</div>
				);
	} 
}
class ChartsItem extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
			return (
					<div
						className={this.props.className[2]}
						style={ this.props.style }
						key={ this.props.itemIndex }
					>
						<b style={{ color: this.props.color }}>{ this.props.item }</b>
					 </div>
				);
	}
}

class Legend extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className={this.props.className}>
        {this.props.labels.map((label, labelIndex) => {
           return (
            <div>
              <span className="Legend--color" style={{ backgroundColor: this.props.colors[labelIndex % this.props.colors.length]  }} />
              <span className="Legend--label">{ label }</span>
            </div>
          );
        })}
      </div>
		);
	}
}




