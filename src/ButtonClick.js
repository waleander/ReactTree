import React from 'react';
import _ from 'lodash';

function ClickyButton({numberOfButtons, onSelection}) {
    const makeButton = v => <button key={v} id={v} onClick={event =>
        onSelection(event.target.id)}>{v}</button>;
    return <div>
        {_.range(1, numberOfButtons + 1).map(makeButton)}
    </div>
}

export default ClickyButton;