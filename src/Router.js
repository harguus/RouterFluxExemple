import React, { Component } from 'react';
import { Router, Scene, Modal } from 'react-native-router-flux';

import Page1 from './Page1';
import Page2 from './Page2';

export default class Routers extends Component {
    render() {
        return (
            <Router>
                <Modal>
                    <Scene key='page1' component={Page1} title="Página 1" />
                    <Scene key='page2' component={Page2} title="Página 2" />
                </Modal>
            </Router>
        )
    }
}