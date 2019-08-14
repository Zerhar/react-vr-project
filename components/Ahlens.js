import React, { Component } from 'react';
import {
    VrButton,
    Text,
    Image,
    View,
    asset
} from 'react-vr';

export default class Ahlens extends Component {
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
                                    {
                                        translate: [-11, 4, -20]
                                    }
                                ]
                            }}
                        >
                            <View
                                style={{
                                    position: 'absolute',
                                    backgroundColor: '#777879',
                                    borderRadius: 0.1,
                                    layoutOrigin: [0.7, 0.7],
                                    width: 1.5,
                                    fontSize: 1,
                                    fontFamily: 'Arial, Helvetica, sans-serif',
                                    fontWeight: '400',
                                    paddingLeft: 0.1,
                                    paddingRight: 0.1,
                                    paddingBottom: 0.05,
                                    textAlign: 'justify',
                                    // textAlignVertical: 'center',
                                    transform: [
                                        { translateY: 5.3 },
                                        { scaleX: 10 },
                                        { scaleY: 10 }
                                    ]
                                }}>
                                <Text>Åhlénshuset vid Stora Torget i Uppsala invigdes i början av 1960-talet som varuhuset Tempo. Husets hålmönstrade betongfasad ritades av arkitekten Bengt Edlund för den välkända arkitektfirman Backström & Reinius.</Text>
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
                                        {
                                            translate: [-11, 4, -20]
                                        }
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

module.exports = Ahlens;