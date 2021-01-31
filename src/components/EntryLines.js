import React from 'react';
import EntryLine from "./EntryLine";
import {Container} from 'semantic-ui-react'


function  EntryLines({entries={}, deleteEntry, isOpenModal, setIsOpenModal, editEntry}) {
    return(
        <Container>
        {
            entries.map(entry=><EntryLine key={entry.id} {...entry } isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} editEntry={editEntry} deleteEntry={deleteEntry}/>)
        }
        </Container>
        )


}

export default EntryLines;