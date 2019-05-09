import React, { Component } from 'react'
import { ButtonGroup } from 'react-native-elements'

export default class UButtonGroup extends Component {

    constructor(props) {
        super(props)
        this.state = { index: 0 }
        this.toggle = this.toggle.bind(this)
    }

    toggle(index) {
        if (!this.state.index == index) {
            this.setState({ index })
            this.props.handlePress()
        }
    }

    render() {
        const buttons = ['Grid', 'List']
        const { index } = this.state
        return (
            <ButtonGroup
                onPress={this.toggle}
                selectedIndex={index}
                buttons={buttons}
            />
        )
    }
}