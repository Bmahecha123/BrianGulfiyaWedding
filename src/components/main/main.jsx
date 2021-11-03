import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { colors } from '../../theme';
import Home from '../home/home';
import RSVP from '../rsvp/rsvp';
import Registry from '../registry/registry';

const Main = () => (
    <main style={{backgroundColor: colors.mainBackgroundColor}}>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/rsvp" render={(routeProps) => <RSVPSwitch {...routeProps} />} />
            <Route path="/registry" render={() => <Registry />} />
            <Redirect from="*" to="/" />
        </Switch>
    </main>
);

const RSVPSwitch = () => (
    <section>
        <Switch>
            <Route exact path="/rsvp" render={() => <RSVP />} />
        </Switch>
    </section>
);

export default Main;