import React from 'react';
import {Checkbox, Form, Segment} from "semantic-ui-react";

function EntryForm({setIsExpense, description, isExpense, setDescription, setValue, value}) {
    return (
        <>
            <Form.Group>
                <Form.Input
                    placeholder={'New shinny thing'}
                    icon={'tags'}
                    width={12}
                    label={'Description'}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <Form.Input
                    width={4}
                    label={'Value'}
                    placeholder={'100,00'}
                    icon={'dollar'}
                    iconPosition={'left'}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </Form.Group>
            <Segment compact>
                <Checkbox toggle label={'Is expensive'} checked={isExpense} onChange={()=> setIsExpense(oldState => !oldState)}/>
            </Segment>
        </>
    );
}

export default EntryForm;