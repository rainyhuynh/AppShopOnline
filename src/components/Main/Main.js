import React, { Component } from 'react'
import Drawer from 'react-native-drawer'
import Menu from './Menu'
import Shop from './Shop/Shop'

export default class Main extends Component{
    closeControlPanel = () => {
        this._drawer.close()
    };

    openControlPanel = () => {
        this._drawer.open()
    };

    render(){
        const {navigator} = this.props

        return(
             <Drawer
                ref={(ref) => this._drawer = ref}
                content={<Menu navigation={ navigator } />}
                openDrawerOffset={0.4}
                tapToClose
                >
                <Shop open={ this.openControlPanel.bind(this) }/>
            </Drawer>
        )
    }
}