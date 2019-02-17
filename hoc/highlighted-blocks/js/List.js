'use strict';

const List = props => {
    const Poplarity = determinePopularity(Video);
    const News = determinePopularity(Article);
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <Poplarity {...item} />
                );

            case 'article':
                return (
                    <News {...item} />
                );
        }
    });
};
