import React, {useState} from 'react';
import {Container, Grid, Icon, Segment} from "semantic-ui-react";
import ModalEdit from "./ModalEdit";

function EntryLine({
    id, description, value, isExpense, deleteEntry, isOpenModal, setIsOpenModal, editEntry
}) {
    return (
        <>
            <Segment color={isExpense ? 'red': 'green'}>
                <Grid columns={3} textAlign={'right'}>
                    <Grid.Row>
                        <Grid.Column width={10} textAlign={'left'}>{description}</Grid.Column>
                        <Grid.Column width={3} textAlign={'right'}>${value}</Grid.Column>
                        <Grid.Column width={3}>
                            <Icon name={'edit'} bordered onClick={()=> editEntry(id)}/>
                            <Icon name={'trash'} bordered onClick={()=>deleteEntry(id)}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            {/*<ModalEdit isOpen={isOpenModal} setIsOpenModal={setIsOpenModal}/>*/}
        </>

    );
}

export default EntryLine;