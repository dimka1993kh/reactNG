const dayString = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'];
const monthString = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const monthStringGenitive = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
let massive = [];
let counter = 0;
let startCalendar = 0;
let count = 0;


const nowDate = new Date();
Date.prototype.addDays = function(days) {
  this.setDate(this.getDate() + parseInt(days));
  return this;
};
let TTT = true;



function RRR() {
  let x = nowDate.getDate() - nowDate.getDay() + 1;
  while (x > 0) {
      x -= 7;
      counter++;
  }
  startCalendar = - 7 * counter - (nowDate.getDay() - 1);
 massive.push(nowDate.addDays(startCalendar).getDate())
  while (TTT) {
   let Y = nowDate.addDays(1).getDate();
      massive.push(Y);
      if (massive[massive.length-1] >= 1 && massive.length / 7 === 5) {
        TTT = false
      }
  }
}
RRR()


const Calendar = function(props) {
    const {date, massive} = props;
    return (
        <div className="ui-datepicker">
        <div className="ui-datepicker-material-header">
            <div className="ui-datepicker-material-day">{dayString[date.getDay() - 1]}</div> 
            <div className="ui-datepicker-material-date">
            <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
            <div className="ui-datepicker-material-month">{monthStringGenitive[date.getMonth() + 1]}</div>
            <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
            </div>
        </div>
        <div className="ui-datepicker-header">
            <div className="ui-datepicker-title">
            <span className="ui-datepicker-month">{monthString[date.getMonth() + 1]}</span>&nbsp;<span class="ui-datepicker-year">{date.getFullYear()}</span>
            </div>
        </div>
        <table className="ui-datepicker-calendar">
            <colgroup>
            <col/>
            <col/>
            <col/>
            <col/>
            <col/>
            <col className="ui-datepicker-week-end"/>
            <col className="ui-datepicker-week-end"/>
            </colgroup>
            <thead>
            <tr>
                <th scope="col" title="Понедельник">Пн</th>
                <th scope="col" title="Вторник">Вт</th>
                <th scope="col" title="Среда">Ср</th>
                <th scope="col" title="Четверг">Чт</th>
                <th scope="col" title="Пятница">Пт</th>
                <th scope="col" title="Суббота">Сб</th>
                <th scope="col" title="Воскресенье">Вс</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className = {`${massive[0] === date.getDate() ? "ui-datepicker-today" : null} ${massive[0] > 25 ? "ui-datepicker-other-month" : null}`}>{massive[0]}</td>
                <td className = {`${massive[1] === date.getDate() ? "ui-datepicker-today" : null} ${massive[1] > 25 ? "ui-datepicker-other-month" : null}`}>{massive[1]}</td>
                <td className = {`${massive[2] === date.getDate() ? "ui-datepicker-today" : null} ${massive[2] > 25 ? "ui-datepicker-other-month" : null}`}>{massive[2]}</td>
                <td className = {`${massive[3] === date.getDate() ? "ui-datepicker-today" : null} ${massive[3] > 25 ? "ui-datepicker-other-month" : null}`}>{massive[3]}</td>
                <td className = {`${massive[4] === date.getDate() ? "ui-datepicker-today" : null} ${massive[4] > 25 ? "ui-datepicker-other-month" : null}`}>{massive[4]}</td>
                <td className = {`${massive[5] === date.getDate() ? "ui-datepicker-today" : null} ${massive[5] > 25 ? "ui-datepicker-other-month" : null}`}>{massive[5]}</td>
                <td className = {`${massive[6] === date.getDate() ? "ui-datepicker-today" : null} ${massive[6] > 25 ? "ui-datepicker-other-month" : null}`}>{massive[6]}</td>
            </tr>
            <tr>
                <td className = {massive[7] === date.getDate() ? "ui-datepicker-today" : null}>{massive[7]}</td>
                <td className = {massive[8] === date.getDate() ? "ui-datepicker-today" : null}>{massive[8]}</td>
                <td className = {massive[9] === date.getDate() ? "ui-datepicker-today" : null}>{massive[9]}</td>
                <td className = {massive[10] === date.getDate() ? "ui-datepicker-today" : null}>{massive[10]}</td>
                <td className = {massive[11] === date.getDate() ? "ui-datepicker-today" : null}>{massive[11]}</td>
                <td className = {massive[12] === date.getDate() ? "ui-datepicker-today" : null}>{massive[12]}</td>
                <td className = {massive[13] === date.getDate() ? "ui-datepicker-today" : null}>{massive[13]}</td>
            </tr>
            <tr>
                <td className = {massive[14] === date.getDate() ? "ui-datepicker-today" : null}>{massive[14]}</td>
                <td className = {massive[15] === date.getDate() ? "ui-datepicker-today" : null}>{massive[15]}</td>
                <td className = {massive[16] === date.getDate() ? "ui-datepicker-today" : null}>{massive[16]}</td>
                <td className = {massive[17] === date.getDate() ? "ui-datepicker-today" : null}>{massive[17]}</td>
                <td className = {massive[18] === date.getDate() ? "ui-datepicker-today" : null}>{massive[18]}</td>
                <td className = {massive[19] === date.getDate() ? "ui-datepicker-today" : null}>{massive[19]}</td>
                <td className = {massive[20] === date.getDate() ? "ui-datepicker-today" : null}>{massive[20]}</td>
            </tr>
            <tr>
                <td className = {massive[21] === date.getDate() ? "ui-datepicker-today" : null}>{massive[21]}</td>
                <td className = {massive[22] === date.getDate() ? "ui-datepicker-today" : null}>{massive[22]}</td>
                <td className = {massive[23] === date.getDate() ? "ui-datepicker-today" : null}>{massive[23]}</td>
                <td className = {massive[24] === date.getDate() ? "ui-datepicker-today" : null}>{massive[24]}</td>
                <td className = {massive[25] === date.getDate() ? "ui-datepicker-today" : null}>{massive[25]}</td>
                <td className = {massive[26] === date.getDate() ? "ui-datepicker-today" : null}>{massive[26]}</td>
                <td className = {massive[27] === date.getDate() ? "ui-datepicker-today" : null}>{massive[27]}</td>
            </tr>
            <tr>
                <td className = {`${massive[28] === date.getDate() ? "ui-datepicker-today" : null} ${massive[28] < 7 ? "ui-datepicker-other-month" : null}`}>{massive[28]}</td>
                <td className = {`${massive[29] === date.getDate() ? "ui-datepicker-today" : null} ${massive[29] < 7 ? "ui-datepicker-other-month" : null}`}>{massive[29]}</td>
                <td className = {`${massive[30] === date.getDate() ? "ui-datepicker-today" : null} ${massive[30] < 7 ? "ui-datepicker-other-month" : null}`}>{massive[30]}</td>
                <td className = {`${massive[31] === date.getDate() ? "ui-datepicker-today" : null} ${massive[31] < 7 ? "ui-datepicker-other-month" : null}`}>{massive[31]}</td>
                <td className = {`${massive[32] === date.getDate() ? "ui-datepicker-today" : null} ${massive[32] < 7 ? "ui-datepicker-other-month" : null}`}>{massive[32]}</td>
                <td className = {`${massive[33] === date.getDate() ? "ui-datepicker-today" : null} ${massive[33] < 7 ? "ui-datepicker-other-month" : null}`}>{massive[33]}</td>
                <td className = {`${massive[34] === date.getDate() ? "ui-datepicker-today" : null} ${massive[34] < 7 ? "ui-datepicker-other-month" : null}`}>{massive[34]}</td>
            </tr>
            
            </tbody>
        </table>
        </div>
    )
    
}