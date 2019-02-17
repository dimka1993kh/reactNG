'use strict';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
            this.setState(response.data);
            //console.log(this.state.list)
        });
    }

    render() {
        return (
            <div id="app">
                <NewMouthTable list={this.state.list} />
                <NewSortTable list={this.state.list} />
                <NewYearTable list={this.state.list} />
            </div>
        );
    }
};

function sort(Component, oldKey, newKey) {
    return (
        class extends React.Component {
            constructor(props) {
                super(props)
                console.log(this.props)
            this.state = {
                list: props.list
            }
            }
            createLists(oldKey, newKey) {
                    if (oldKey !== newKey) {
                        let newArray = this.state.list.map(function (obj) {
                            console.log(obj)
                            obj[newKey] = obj[oldKey];
                            delete obj[oldKey];
                            obj[newKey] = newKey === 'month' ? new Date(obj.date).getMonth() : (newKey === 'year' ? new Date(obj.date).getFullYear() : obj[newKey])
                            return obj;
                        });
                        console.log(newArray)
                        return newArray;

                    } else {
                        return this.state.list;
                    }
            }
            render() {
                const yyy = this.createLists(oldKey, newKey)
                return (
                    <Component list = {yyy}/>
                )
            }
        }
    )
}

const NewMouthTable = sort(MonthTable,'date', 'month');
const NewSortTable = sort(SortTable,'date', 'date');
const NewYearTable = sort(YearTable,'date', 'year');