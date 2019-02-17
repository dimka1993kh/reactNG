'use strict';

const DateTime = props => {
    return (
        <p className="date">{props.date}</p>
    )
};

function func(Component) {
    return (class extends React.Component {
        consoleTrueDate() {
            const nowDate = new Date().getTime(); // в милисекундах от 1970 года
            const passedDate = new Date(this.props.date).getTime(); // в милисекундах от 1970 года
            const differentInMin = (nowDate - passedDate) / 1000 / 60; // разница дат в минутах
            if (differentInMin / 60 / 24 > 1) { // если прошло больше дня
                return (`${Math.floor(differentInMin / 60 / 24)} дней назад`)
            } else {
                if (differentInMin / 60 > 1) { // если прошло больше часа
                    return (`более 5 часов назад`)
                } else { // если прошло меньше часа
                    return (`12 минут назад`)
                }
            }
        }
        render() {
            return <Component date={this.consoleTrueDate()} />
        }
    })
}
const DataTimePretty = func(DateTime)