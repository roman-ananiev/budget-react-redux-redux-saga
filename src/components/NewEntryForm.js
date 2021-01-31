import React, {useState} from 'react';
import {Form} from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";

function NewEntryForm({addEntry, description, isExpense, setDescription, setIsExpense, setValue, value}) {
    return (
        <Form unstackable>
            <EntryForm
                description={description}
                value={value}
                isExpense={isExpense}
                setDescription={setDescription}
                setValue={setValue}
                setIsExpense={setIsExpense}
            />
            <ButtonSaveOrCancel addEntry={addEntry}/>
        </Form>
    );
}

export default NewEntryForm;