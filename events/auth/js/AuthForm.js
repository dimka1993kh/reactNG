'use strict';

const AuthForm = ({onAuth}) => {
    const submitForm = (event) => {
        event.preventDefault();
        console.log(userObject)
        if ((onAuth !== undefined) && (typeof onAuth === 'function')) {
            onAuth(userObject);
        }
    }
    let userNameField,
    userEmailField,
    userPasswordField;
    const userObject = {};

    const userName = (event) => {
        userObject.name = userNameField.value;
    }
    const userEmail = (event) => {
        userObject.email = userEmailField.value;
    }
    const userPassword = (event) => {
        userObject.password = userPasswordField.value;
    }
    const checkFunc = (event) => {
        let symbols;
        if (event.currentTarget.type === "email") {
            symbols = /['0-9','@','.','-','_','a-z','A-Z']/;
        } else if (event.currentTarget.type === "password") {
            symbols = /['0-9','_','a-z','A-Z']/;
        }
        if (!symbols.test(event.currentTarget.value[event.currentTarget.value.length - 1])) {
            event.currentTarget.value = event.currentTarget.value.slice(0, -1);
        }
    }
return (
    <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={submitForm}>
  <div className="Input">
    <input required type="text" placeholder="Имя" onChange={userName} ref={element => userNameField = element}/>
    <label></label>
  </div>
  <div className="Input">
    <input type="email" placeholder="Электронная почта" onChange={userEmail} ref={element => userEmailField = element} onKeyUp={checkFunc}/>
    <label></label>
  </div>
  <div className="Input">
    <input required type="password" placeholder="Пароль" onChange={userPassword} ref={element => userPasswordField = element} onKeyUp={checkFunc}/>
    <label></label>
  </div>
  <button type="submit">
    <span>Войти</span>
    <i className="fa fa-fw fa-chevron-right"></i>
  </button>
</form>
)
}