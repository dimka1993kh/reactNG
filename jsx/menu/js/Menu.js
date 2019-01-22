
const Menu = function(props) {
    const {items, opened} = props;
    let string = items.map((item) => {
        return (
            <li><a href={item.href}>{item.title}</a></li>
        )
    })
    if (opened) {
        return (
            <div className="menu menu-open">
            <div className="menu-toggle"><span></span></div>
            <nav>
                <ul>
                {string}
                </ul>
            </nav>
            </div>
        )
    } else {
        return (
            <div className="menu">
                 <div className="menu-toggle"><span></span></div>
            </div>
        )
    }

}