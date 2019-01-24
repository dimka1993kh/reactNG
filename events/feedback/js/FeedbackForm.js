'use strict';
const form = {
    salutation: 'Мисис',
    name: 'Алевтина',
    subject: 'У меня важный вопрос',
    message: 'Как оформить доставку?',
    email: 'mis@test.co',
    snacks: ['пирог']
  };
  let lastForm = {},
  salutationField,
  nameField,
  subjectField,
  messageField,
  emailField,
  snacksField,
  inputGroup;

const FeedbackForm = ({data, onSubmit}) => {

    const saveForm = (event) => {
        event.preventDefault();
        console.log(lastForm)
        }
    const defaultSnacks = (event) => {
        //const snacksFields = inputGroup.querySelectorAll('.contact-form__input--checkbox');
        //snacksFields.forEach((field) => {
            console.log(event.target)

                return event.currentTarget.value === data.snacks[0] ? true : false;
            
            
        //})
    }    
    
    const changeName = (event) => {
        lastForm.name = nameField.value;
    }
    const changeSalutation = (event) => {
        if (event.currentTarget.checked) {
            lastForm.salutation = event.currentTarget.value;
        }
    }
    const changeSubject = (event) => {
        lastForm.subject = subjectField.value;
    }
    const changeMessage = (event) => {
        lastForm.message = messageField.value;
    }
    const changeEmail = (event) => {
        lastForm.email = emailField.value;
    }
    const changeSnacks = (event) => {
        if (event.currentTarget.checked) {
            lastForm.snacks = event.currentTarget.value;
        }
    }
    return (
        <form className="content__form contact-form">
        <div className="testing">
          <p>Чем мы можем помочь?</p>
        </div>
        <div className="contact-form__input-group">
          <input className="contact-form__input contact-form__input--radio" id="salutation-mr" name="salutation" type="radio" value="Мистер" defaultChecked={false} onChange={changeSalutation}/>
          <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>
          <input className="contact-form__input contact-form__input--radio" id="salutation-mrs" name="salutation" type="radio" value="Мисис" defaultChecked onChange={changeSalutation}/>
          <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Мисис</label>
          <input className="contact-form__input contact-form__input--radio" id="salutation-ms" name="salutation" type="radio" value="Мис" defaultChecked={false} onChange={changeSalutation}/>
          <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мис</label>
        </div>
        <div className="contact-form__input-group">
          <label className="contact-form__label" htmlFor="name">Имя</label>
          <input className="contact-form__input contact-form__input--text" id="name" name="name" type="text" defaultValue={data.name} onChange={changeName} ref={element => nameField = element}/>
        </div>
        <div className="contact-form__input-group">
          <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
          <input className="contact-form__input contact-form__input--email" id="email" name="email" type="email" defaultValue={data.email} onChange={changeEmail} ref={element => emailField = element}/>
        </div>
        <div className="contact-form__input-group">
          <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
          <select className="contact-form__input contact-form__input--select" id="subject" name="subject" defaultValue={data.subject} onChange={changeSubject} ref={element => subjectField = element}>
            <option>У меня проблема</option>
            <option>У меня важный вопрос</option>
          </select>
        </div>
        <div className="contact-form__input-group">
          <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
          <textarea className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6" cols="65" defaultValue={data.message} onChange={changeMessage} ref={element => messageField = element}></textarea>
        </div>
        <div className="contact-form__input-group" ref={element => inputGroup = element}>
          <p className="contact-form__label--checkbox-group">Хочу получить:</p>
          <input className="contact-form__input contact-form__input--checkbox" id="snacks-pizza" name="snacks" type="checkbox" value="пицца" /*onload={defaultSnacks()} defaultChecked={console.log(checkedBox)*/ defaultChecked={"пицца" === data.snacks[0] ? true : false}/>
          <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
          <input className="contact-form__input contact-form__input--checkbox" id="snacks-cake" name="snacks" type="checkbox" value="пирог" /*onload={defaultSnacks()} defaultChecked={console.log(checkedBox)*/ defaultChecked={"пирог" === data.snacks[0] ? true : false}/>
          <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
        </div>
        <button className="contact-form__button" type="submit" onClick={saveForm}>Отправить сообщение!</button>
        <output id="result" />
      </form> 
    )
}