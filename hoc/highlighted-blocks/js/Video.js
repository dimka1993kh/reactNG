'use strict';

const Video = props => {
    return (
        <div className="item item-video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
};


function determinePopularity(Component) { // Основная обертка
    return (class extends React.Component{
        calculate() {                     // Определение популярности
            if (this.props.views >= 1000) {
                return true;
            } else if (this.props.views <= 100) {
                return false;
            }
        }
        render(){
            const Wrapper = this.calculate() ? Popular : New; // Выбор типа обертки
            return (
                <Wrapper {...this.props}> 
                    <Component {...this.props}/>
                </Wrapper>
        )
        }
        })
    }

    // константы оберток добавлены в List.js