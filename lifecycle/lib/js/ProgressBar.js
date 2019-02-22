/*class ProgressBar extends React.Component {
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
}*/


let canvas;

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
// Заявим переменные, так как state после вызова setState меняется не сразу и программ работает с запозданием
    this.progressOnPI = this.props.completed / this.props.total * Math.PI * 2;
    this.progress = this.props.completed * 100 / this.props.total;
    this.radiusOuter = 52;
    this.radiusInner = 45;
    this.lineWidth = 7;
  }
  shouldComponentUpdate(nextProps) { // при изменении пропс будем рассчитывать прогресс и создавать новый канвас
      this.progressOnPI = nextProps.completed / nextProps.total * Math.PI * 2;
      this.progress = nextProps.completed * 100 / nextProps.total
      this.createCanvas(); 
      return true;
   // }
    
  }
  createCanvas(nextProps) { // слздаем канвас, предварительно очищая старый
    canvas.width = canvas.clientWidth + 2 * this.lineWidth;
    canvas.height = canvas.clientHeight + 2 * this.lineWidth;

    let ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, this.radiusOuter , 0, Math.PI * 2, false);
    ctx.lineWidth = 7;
    ctx.strokeStyle = '#4ca89a';
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, this.radiusInner , 0, this.progressOnPI, false);
    ctx.lineWidth = 7;
    ctx.strokeStyle = '#96d6f4';
    ctx.stroke();
    ctx.font = '24px Arial';
    ctx.lineWidth = 1;
    ctx.textAlign = 'center';
    ctx.strokeText(`${this.progress.toFixed(0)}%`, canvas.width/2, canvas.height/2);
  }
  render() {    
    return (
      <canvas id="progressCanvas" className="progress" ref={el => canvas = el}></canvas>
    );
  }
  componentDidMount() { // после рендеринга компонента добавляем кольца на канвас
    this.createCanvas(); 
    
  }
}
