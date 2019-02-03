
class TextRenderLine extends React.Component {
	constructor(props) {
		super(props)
	}
	changeText(event) {
		this.props.onChange(event.target.value)
	}
	render () {
		return (
			<div class="type-text">
				<textarea name="text" id="font-text" cols="30" rows="2" placeholder="Введите текст для футболки" onChange={this.changeText.bind(this)}></textarea>
			</div>

		)
	}
}
