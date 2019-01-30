'use strict';

const data = [
    {
        lable: 'React'
    },
    {
        lable: 'Компоненты',
        text: 'Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим состоянием, а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой.'
    },
    {
        lable: 'Выучил раз, используй везде!',
        text: 'После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке мобильных приложений с использованием React Native.'
    },
    {
        lable: 'Использование JSX',
        text: 'JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода.'
    }
]

class Accordion extends React.Component {
    render() {
        return (
            <main className={'main'}>
                <Label lable={true} data={data[0]}/>
                { 
                    data.map((element, index)=>{
                        if (index !== 0) {
                            return <Section element={element}/>
                        }
                    })
                }
                
            </main>
        )
    }
}

class Label extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
        if (this.props.lable) {
            return (
                <h2 className={'title'}>{this.props.data.lable}</h2>
            )
        } else {
            return (
                <h3 className={'sectionhead'}>{this.props.element.lable}</h3>
            )
        }

    }
}

class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            open: false
        })   
    }
    getClassName() {
        this.setState ({
            open: !this.state.open
        })
    }
    render () {
        return (
            <section className={`section ${this.state.open ? "open" : ""}`} onClick={()=>{this.getClassName()}}> 
                <Button/>
                <Label element={this.props.element}/>
                <Text element={this.props.element}/>
            </section>
        )
    }
}

class Text extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div className={'articlewrap'}>
                <div className={'article'}>{this.props.element.text}</div>
            </div>
        )
    }
}

class Button extends React.Component {
    render () {
        return (
            <button>
                ::before
                "toogle"
                ::after
            </button>
        )
    }
}

ReactDOM.render(
    <Accordion/>,
    document.getElementById('accordian')
  );