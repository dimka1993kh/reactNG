class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.data = {
      datasets: [
        {data: [100, 0], backgroundColor: '#4ca89a', borderWidth: 0},
        {data: [this.props.completed, this.props.total], backgroundColor: ['#96d6f4', 'white'], borderWidth: 0}
      ]
    }
  }
  calculate(newProps) {
    this.data.datasets[1].data = [newProps, this.props.total - newProps];
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.completed !== this.props.completed) {
      this.calculate(nextProps.completed);
      this.chart.update();
      return true;
    }
    return false;
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
      }
    });
    }
       
  render() {    
    return (
      <canvas id="progressCanvas" className="progress"/>
    );
  }
}


