import React from 'react';

function WithoutJsx(props) {
    // return  React.createElement('div',null,'<h1>hello justolearn<h1>')
     return  React.createElement('div',null,React.createElement('h1',null,"Welcome Everyone"))

}

export default WithoutJsx;