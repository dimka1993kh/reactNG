const Calendar = function(props) { 
    const {date} = props, 
    numberOfWeek = [1,2,3,4,5], 
    numberOfDay = [1,2,3,4,5,6,7], 
    dayString = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'], 
    monthString = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'], 
    month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']; 
    let varDay = new Date(), 
    day, 
    firstDayCounted = false; 
    
    function nowWeekDay(day) { 
        let weekDay = day.getDay(); 
        if (weekDay === 0){ 
            weekDay = 7; 
        } 
        return weekDay; 
    } 
    
    function className(dateObject) { 
        if (dateObject.getDate() === date.getDate()) { 
            return "ui-datepicker-today"; 
        } else if (dateObject.getMonth() !== date.getMonth()) { 
            return "ui-datepicker-other-month"; 
        } else { 
            return null; 
        } 
    } 
    let table = numberOfWeek.map((week) => { 
        let string = numberOfDay.map((elem) => { 
        if (firstDayCounted === false) { 
            varDay.setDate(0); 
            const dayOfWeek = nowWeekDay(varDay); 
            varDay = new Date(); 
            varDay.setDate(1 - dayOfWeek); 
            firstDayCounted = true; 
        } else { 
            varDay.setDate(varDay.getDate() + 1); 
        } 
            day = varDay.getDate(); 
        return ( 
            <td className={className(varDay)}>{day}</td> 
        ) 
        }) 
        return ( 
            <tr> {string} </tr> 
        ) 
    }) 
    
    return ( 
    <div className="ui-datepicker"> 
        <div className="ui-datepicker-material-header"> 
        <div className="ui-datepicker-material-day">{dayString[date.getDay() - 1]}</div> 
        <div className="ui-datepicker-material-date"> 
        <div className="ui-datepicker-material-day-num">{date.getDate()}</div> 
        <div className="ui-datepicker-material-month">{month[date.getMonth()]}</div> 
        <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
    </div> 
    </div> 
    <div className="ui-datepicker-header"> 
        <div className="ui-datepicker-title"> 
            <span className="ui-datepicker-month">{monthString[date.getMonth()]}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span> 
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
                {table} 
            </tbody> 
        </table> 
    </div> 
    ) 
    }