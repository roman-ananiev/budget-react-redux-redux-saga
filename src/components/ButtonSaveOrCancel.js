import React from 'react';
import {Button, Form} from "semantic-ui-react";

function ButtonSaveOrCancel({addEntry, description, value, isExpense}) {

    return (
        <Button.Group style={{marginTop: 20}}>
            <Button>Cancel</Button>
            <Button.Or/>
            <Button primary onClick={()=>addEntry()}>Add</Button>
        </Button.Group>
    );
}

export default ButtonSaveOrCancel;