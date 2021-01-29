import React from 'react';
import {Container, Header, Segment, Statistic, Grid, Icon, Form, Button} from 'semantic-ui-react'

const App = () => {
    return (
        <Container>
            <Header as={'h1'}>Budget</Header>
            <Statistic size={'small'}>
                <Statistic.Label>Your balance:</Statistic.Label>
                <Statistic.Value>2 550</Statistic.Value>
            </Statistic>
            <Segment textAlign={'center'}>
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <Statistic size={'tiny'} color={'green'}>
                                <Statistic.Label style={{textAlign:'left'}}>
                                    Incoming:
                                </Statistic.Label>
                                <Statistic.Value>1,045.22</Statistic.Value>
                            </Statistic>
                        </Grid.Column>
                        <Grid.Column>
                            <Statistic size={'tiny'} color={'red'}>
                                <Statistic.Label style={{textAlign:'left'}}>
                                    Expensis :
                                </Statistic.Label>
                                <Statistic.Value>1,045.22</Statistic.Value>
                            </Statistic>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
                <Header as={'h3'}>History</Header>
            <Segment color={'red'}>
                <Grid columns={3} textAlign={'right'}>
                    <Grid.Row>
                        <Grid.Column width={10} textAlign={'left'}>Something</Grid.Column>
                        <Grid.Column width={3} textAlign={'right'}>$10.00</Grid.Column>
                        <Grid.Column width={3}>
                            <Icon name={'edit'} bordered/>
                            <Icon name={'trash'} bordered />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment color={'green'}>
                <Grid columns={3} textAlign={'right'}>
                    <Grid.Row>
                        <Grid.Column width={10} textAlign={'left'}>Something</Grid.Column>
                        <Grid.Column width={3} textAlign={'right'}>$10.00</Grid.Column>
                        <Grid.Column width={3}>
                            <Icon name={'edit'} bordered/>
                            <Icon name={'trash'} bordered />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment color={'red'}>
                <Grid columns={3} textAlign={'right'}>
                    <Grid.Row>
                        <Grid.Column width={10} textAlign={'left'}>Something</Grid.Column>
                        <Grid.Column width={3} textAlign={'right'}>$10.00</Grid.Column>
                        <Grid.Column width={3}>
                            <Icon name={'edit'} bordered/>
                            <Icon name={'trash'} bordered />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Header as={'h3'}>Add new transaction</Header>
            <Form unstackable>
                <Form.Group>
                    <Form.Input placeholder={'New shinny thing'} icon={'tags'} width={12} label={'Description'}/>
                    <Form.Input width={4} label={'Value'} placeholder={'100,00'} icon={'dollar'} iconPosition={'left'}></Form.Input>
                </Form.Group>
                <Button.Group style={{marginTop: 20}}>
                    <Button>Cabcel</Button>
                    <Button.Or/>
                    <Button primary>Add</Button>

                </Button.Group>
            </Form>

        </Container>
    );
};

export default App;
