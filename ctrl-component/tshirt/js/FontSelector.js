
class FontSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            fonts: AbcApi.getFonts(),
        })
    }
    findCurrentFont(event) {
        const currentFont = this.state.fonts.filter((font) => {
            return font.name === event.target.value
        })
        return currentFont[0];
    }
    render() {
        return (
            <div className="font-picker">
                {this.state.fonts.map((font, index)=>{
                        return (
                            <div className="grid center font-item">
                            <input type="radio" name="font" value={font.name} id={font.name} onChange={() => {this.props.onSelect(this.findCurrentFont(event))}}/>
                            <label htmlFor="abc1" className="grid-1">
                                <PictureFont text={font.name} path={font.path}/>
                            </label>
                            </div>
                            )  
                })}
            </div>
        )
    }
}

