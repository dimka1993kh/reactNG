let emailField;

class SubscribeForm extends React.Component {
    constructor(props) {
        super(props)
        this.state =({
            validEmail: ''
        })
    }
    validEmail(event) {
        event.preventDefault();
        this.setState({
            validEmail: (emailField.validity.valid) ? 'is-valid' : 'is-error'
        })
    }
    render() {
        return (
            <div className="subscribe__form">
                <form className={`form form--subscribe ${this.state.validEmail}`}> 
                    <h4 className="form-title">Подписаться:</h4>
                    <div className="form-group">
                        <label htmlFor="input-email" className="sr-only">Email</label>
                        <input type="email" id="input-email" placeholder="Email" className="form-control" onChange={this.validEmail.bind(this)} ref={el => emailField = el} required/>
                    <div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
                    <button type="submit" className="form-next" >
                        <i className="material-icons">keyboard_arrow_right</i>
                    </button>
                    </div>
                </form>
            </div>
        )
    }
}