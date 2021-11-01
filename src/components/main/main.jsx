import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { colors } from '../../theme';
import Home from '../home/home';
import RSVP from '../rsvp/rsvp';
import Contact from '../contact/contact';

const Main = () => (
    <main style={{backgroundColor: colors.mainBackgroundColor}}>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/rsvp" render={(routeProps) => <RSVPSwitch {...routeProps} />} />
            <Route path="/contact" render={() => <Contact />} />
            <Redirect from="*" to="/" />
        </Switch>
    </main>
);

const RSVPSwitch = (props) => (
    <section>
        <Switch>
            <Route exact path="/rsvp" render={() => <RSVP />} />
            <Route path="/rsvp/:id" render={() => <Contact {...props} /> } />
        </Switch>
    </section>
);

export default Main;