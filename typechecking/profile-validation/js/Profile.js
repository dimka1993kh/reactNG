'use strict';

const profileStyle = {
  border: '1px solid #cccccc',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  margin: '5px'
};

const imageStyle = {
  width: '200px',
  height: '200px'
};

const Profile = props => {

  return (
    <div className="col-md-4 text-center" style={{marginBottom: '10px'}}>
      <div style={profileStyle}>
        <h2>{props.first_name} {props.last_name}</h2>
        <div>
          <img src={props.img ? props.img : './images/profile.jpg'} className="img-thumbnail" style={imageStyle}/>
        </div>
        <p>vk: <a href={props.url}>{props.url}</a></p>
        <p>birthday: <a href={props.birthday}>{props.birthday ? props.birthday : 'дата рождения не указана'}</a></p>
      </div>
    </div>
  );
};

const validateVk = (props, propName, componentName) => {
  let url = props[propName];
  let isUrlVk = (typeof url === 'string') && (/^(https{0,1}:\/\/)?(www\.)?(vk.com\/)(id[0-9]+|[A-Za-z0-9_-]+)/).test(url);
  if(!isUrlVk) {
    return new Error(`Неверный параметр ${propName} в компоненте
    ${componentName}: параметр должен быть адресом страницы "Вконтакте"`);
  }
    return null;
}
/*const validateBirthday = (props, propName, componentName) => {
  let bDay = props[propName];
if (bDay) {
  return bDay.split('-').forEach((element, index) => {
    if (index === 0) {
      let isValidateYear = (typeof element === 'string') && (element <= new Date().getFullYear())
      console.log('isValidateYear',isValidateYear)
      if (!isValidateYear) {
        return new Error(`Если Ваш год рождения ${element}, то Вы либо не родились, либо допустили ошибку. Пожалуйста, введите верный год`)
      }
      return null;

    } else if (index === 1) {
      let isValidateMonth = (typeof element === 'string') && (element <= 12 && element >= 1)
      console.log('isValidateMonth',isValidateMonth)
      if (!isValidateMonth) {
        return new Error(`Если Ваш месяц рождения ${element}, то Вы, видимо, ошибаетесь `)
      }
      return null;

    } else {
      function daysInMonth() {
        return new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
      }
      let isValidateDay = (typeof element === 'string') && (element <= daysInMonth() && element >= 0)
      console.log('isValidateDay',isValidateDay)
      if (!isValidateDay) {
        return new Error(`Если Ваш день рождения ${element}, то Вы, видимо, ошибаетесь `)
      }
      return null;

    }
    console.log(element, index)
  })
}
return null;
  
  
}*/
const validateBirthday = (props, propName, componentName) => {
  let bDay = props[propName];
  const nowDate = new Date();
if ((/\d+\-\d+\-\d+/).test(bDay)) {
  let hhh = bDay.split('-');
  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  if (nowDate.getFullYear() < hhh[0] || hhh[0] < 1970) {
    return new Error(`Если Ваш год рождения ${bDayDate.getFullYear()}, то Вы либо не родились, либо допустили ошибку. Пожалуйста, введите верный год`)
  }
  if (hhh[1] < 1 || hhh[1] > 12) {
    return new Error(`Если Ваш месяц рождения ${hhh[1]}, то Вы, видимо, ошибаетесь `)
  }

  if (hhh[2] > daysInMonth(hhh[1], nowDate.getDate())) {
    return new Error(`Если Ваш день рождения ${bDayDate.getDate()}, то Вы, видимо, ошибаетесь `)
  }
  return null;

} else {
  return new Error(`Допущена ошибка в дате рождения ${props.first_name}. Введена не дата`)
}

}


Profile.propTypes = {
  url: validateVk,
  birthday: validateBirthday
}


/*
key={`profile_${i}`} profiles: [
  {
    first_name: 'Alexey',
    last_name: 'Korzhov',
    url: 'https://vk.com/anonimizer_me',
    birthday: 'efq'
  },
  {
    first_name: 'Pavel',
    last_name: 'Durov',
    img: 'https://pp.userapi.com/c836333/v836333001/31189/8To0r3d-6iQ.jpg',
    url: 'https://vk.com/id1',
  },
  {
    first_name: 'Super',
    last_name: 'User',
    url: 'https://vk.com/superuser',
    birthday: '1988-03-21'
  },
  {
    first_name: 'Unknown',
    last_name: 'User',
    url: 'https://vk.com/id2',
  },
  {
    first_name: 'Igor',
    last_name: 'Popov',
    url: 'https://vk.com/id17',
  },
  {
    first_name: 'Oleg',
    last_name: 'Konev',
    url: 'https://vk.com/id62',
    birthday: '1974-02-11'
  }
]
*/