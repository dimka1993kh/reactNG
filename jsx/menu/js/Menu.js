
const Menu = function(props) {
    const {items, opened} = props;
    if (opened) {
        return (
            <div class="menu menu-open">
            <div class="menu-toggle"><span></span></div>
            <nav>
                <ul>
                <li><a href={items[0].href}>{items[0].title}</a></li>
                <li><a href={items[1].href}>{items[1].title}</a></li>
                <li><a href={items[2].href}>{items[2].title}</a></li>
                </ul>
            </nav>
            </div>
        )
    } else {
        return (
            <div class="menu">
                 <div class="menu-toggle"><span></span></div>
            </div>
        )
    }

}