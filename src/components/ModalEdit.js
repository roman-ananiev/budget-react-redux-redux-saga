import React from 'react';
import {Button, Form, Modal} from "semantic-ui-react";
import EntryForm from "./EntryForm";

function ModalEdit({isOpen, setIsOpenModal, addEntry, description, isExpense, setDescription, setIsExpense, setValue, value}) {
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit entry</Modal.Header>
            <Modal.Content>
                <EntryForm
                    description={description}
                    value={value}
                    isExpense={isExpense}
                    setDescription={setDescription}
                    setValue={setValue}
                    setIsExpense={setIsExpense}
                />
            </Modal.Content>
            <Modal.Actions>
                 <Button onClick={()=>setIsOpenModal(false)}>Close</Button>
                 <Button primary onClick={()=>setIsOpenModal(false)}>Ok</Button>
            </Modal.Actions>
        </Modal>
    );
}

export default ModalEdit;