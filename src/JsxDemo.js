import React from 'react';

function JsxDemo(props) {
    // return (
    //     <div>
    //      <h1>Hello</h1>      
    //     </div>
    // );
    return React.createElement('div',null,React.createElement('h1',null,'Hello'))
}

export default JsxDemo;