class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      currentPge: this.props.completed,
      totlaPages: this.props.total
    })
   
    this.data = {
      datasets: [
    {
      data: [100, 0],
      backgroundColor: '#4ca89a',
      borderWidth: 0,

    },
    {
      data: [1, 14],
      backgroundColor: ['#96d6f4', 'white'],
      borderWidth: 0,
    }],
    }
  }
  calculate() {
    this.data.datasets[1].data = [this.props.completed / this.props.total, 1 - this.props.completed / this.props.total];

  }

  componentWillUpdate() {
    this.calculate()
    console.log(this.props)
  }
  componentDidUpdate() {
    console.log(this.state)
    this.chart.update()
  }

  componentDidMount() {
    this.chart = new Chart("progressCanvas", {
      type: 'doughnut',
      data: this.data,
      options: {
        tooltips: {enabled: false},
        hover: {mode: null},
        cutoutPercentage: 45*100/59,
        rotation: 0
      },

    });
    console.log(this.chart)
    }
    
    
  render() {    
    return (
      <canvas id="progressCanvas" className="progress" />
    );
  }
}
