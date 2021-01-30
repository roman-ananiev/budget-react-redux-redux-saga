import React from 'react';
import {Button, Form} from "semantic-ui-react";

function ButtonSaveOrCancel(props) {
    return (
        <Button.Group style={{marginTop: 20}}>
            <Button>Cabcel</Button>
            <Button.Or/>
            <Button primary>Add</Button>
        </Button.Group>
    );
}

export default ButtonSaveOrCancel;