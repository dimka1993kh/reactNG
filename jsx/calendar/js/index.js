const now = new Date();

ReactDOM.render(
    <Calendar date={now} massive={massive}/>,
  document.getElementById('root')
);