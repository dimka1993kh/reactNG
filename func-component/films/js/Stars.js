'use strict';

const Stars = ({count}) => {
  let stars = [];
  let result = 0;
  for (let i = 1; i <= count; i++) {
    result = count < 1 || count > 5 || typeof count !== 'number' ? null : <Star />;
    stars.push(result);
  }
  
  return <ul className="card-body-stars u-clearfix"><li>{stars}</li></ul>;
}

Stars.defaultProps = {
  count: 0
};



