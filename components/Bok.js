import React, { Component } from 'react';
import {
    VrButton,
    Text,
    Image,
    View,
    asset
} from 'react-vr';

export default class Bok extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayingInfoPanel: false
        }
        this.toggleDisplayText = this.toggleDisplayText.bind(this)
    }

    toggleDisplayText() {
        if (!this.state.displayingInfoPanel) {
            this.setState({ displayingInfoPanel: true })
        } else {
            this.setState({ displayingInfoPanel: false })
        }
    }
    render() {
        return (
            <View>
                <VrButton onClick={this.toggleDisplayText}>
                    {this.state.displayingInfoPanel === true ?
                        (<View
                            style={{
                                position: 'absolute',
                                transform: [
                                    { translate: [4, 4, -20] }
                                ]
                            }}
                        >
                            <View
                                style={{
                                    position: 'absolute',
                                    backgroundColor: '#777879',
                                    borderRadius: 0.1,
                                    layoutOrigin: [0.7, 0.7],
                                    width: 1.2,
                                    fontSize: 1,
                                    fontFamily: 'Arial, Helvetica, sans-serif',
                                    fontWeight: '400',
                                    paddingLeft: 0.1,
                                    paddingRight: 0.1,
                                    paddingBottom: 0.05,
                                    textAlign: 'center',
                                    transform: [
                                        { translateY: 4.8 },
                                        { scaleX: 10 },
                                        { scaleY: 10 }
                                    ]
                                }}>
                                <Text>I Akademibokhandeln på Stora Torget i Uppsala finns en plats fylld av böcker och läsning där man känner sig både hemma och välkommen.</Text>
                            </View>
                            <Image
                                source={asset('info-button.png')}
                                style={{
                                    position: 'absolute',
                                    height: 1,
                                    width: 1,
                                    layoutOrigin: [0.7, 0.7],
                                }}
                            />
                        </View>
                        )
                        : (
                            <Image
                                source={asset('info-button.png')}
                                style={{
                                    position: 'absolute',
                                    height: 1,
                                    width: 1,
                                    layoutOrigin: [0.7, 0.7],
                                    transform: [
                                        { translate: [4, 4, -20] }
                                    ]
                                }}
                            />
                        )
                    }
                </VrButton>
            </View>
        )
    }
}

module.exports = Bok;