import React, { Component } from 'react';
import {
    VrButton,
    Text,
    Image,
    View,
    asset
} from 'react-vr';

export default class Radhuset extends Component {
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
                            }}
                        >
                            <View
                                style={{
                                    position: 'absolute',
                                    backgroundColor: '#777879',
                                    borderRadius: 0.2,
                                    layoutOrigin: [0.7, 0.7],
                                    fontSize: 1,
                                    fontFamily: 'Arial, Helvetica, sans-serif',
                                    width: 2,
                                    fontWeight: '400',
                                    paddingLeft: 0.1,
                                    paddingRight: 0.1,
                                    paddingBottom: 0.05,
                                    textAlign: 'justify',
                                    transform: [
                                        { translate: [-33, 13, 20] },
                                        { rotateY: 90 },
                                        { scaleX: 16 },
                                        { scaleY: 16 }
                                    ]
                                }}>
                                <Text> Rådhusets historiska arv blandas med moderniteter i en annorlunda och spännande atmosfär. Husets anrika historia är bevarad från golv till tak - de vackra utsmyckningarna finns kvar, takkronorna hänger där de alltid hängt och det som är nytt ger intryck av att alltid funnits där.</Text>
                            </View>
                            <Image
                                source={asset('info-button.png')}
                                style={{
                                    position: 'absolute',
                                    height: 1,
                                    width: 1,
                                    layoutOrigin: [0.7, 0.7],
                                    transform: [
                                        { translate: [-33, 5, 20] },
                                        { rotateY: 90 },
                                        { scaleX: 1.5 },
                                        { scaleY: 1.5 }
                                    ]
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
                                        { translate: [-33, 5, 20] },
                                        { rotateY: 90 },
                                        { scaleX: 1.5 },
                                        { scaleY: 1.5 }
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

module.exports = Radhuset;