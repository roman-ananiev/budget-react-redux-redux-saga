import React from 'react';
import { Grid, Segment} from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function DisplayBalances(props) {
    return (
        <Segment textAlign={'center'}>
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance title={'Incoming:'} value={0} color='green'/>
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance value={0} title={'Expensis:'} color='red'/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
}

export default DisplayBalances;