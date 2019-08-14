import React, { Component } from 'react';
import {
    VrButton,
    Text,
    Image,
    View,
    asset
} from 'react-vr';

export default class Kebab extends Component {
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
                                    borderRadius: 0.1,
                                    layoutOrigin: [0.7, 0.7],
                                    width: 1.8,
                                    fontSize: 1,
                                    fontFamily: 'Arial, Helvetica, sans-serif',
                                    fontWeight: '400',
                                    paddingLeft: 0.1,
                                    paddingRight: 0.1,
                                    paddingBottom: 0.05,
                                    textAlign: 'justify',
                                    // textAlignVertical: 'center',
                                    transform: [
                                        { translate: [35, 12, -20] },
                                        { rotateY: -90 },
                                        { scaleX: 16 },
                                        { scaleY: 16 }
                                    ]
                                    // transform: [
                                    //     {
                                    //         translate: [1.3, 1.3, -4]
                                    //     }
                                    // ]
                                }}>
                                <Text>Jalla Kebab är en trevlig restaurang som ligger på Stora Torget i Uppsala. Här finns stadens mest mediokra kebabrulle.</Text>
                                {/* <Text>I Akademibokhandeln på Stora Torget i Uppsala</Text>
                                <Text>möts nytt och gammalt, modernt och</Text>
                                <Text>anrikt, klassiker och nyskrivet. I hjärtat</Text>
                                <Text>av stadens människoliv och handel finns en plats</Text>
                                <Text>fylld av böcker och läsning där man</Text>
                                <Text>känner sig både hemma och välkommen.</Text> */}
                            </View>
                            <Image
                                source={asset('info-button.png')}
                                style={{
                                    position: 'absolute',
                                    height: 1,
                                    width: 1,
                                    layoutOrigin: [0.7, 0.7],
                                    transform: [
                                        { translate: [35, 6, -20] },
                                        { rotateY: -90 },
                                        { scaleX: 2 },
                                        { scaleY: 2 }
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
                                        { translate: [35, 6, -20] },
                                        { rotateY: -90 },
                                        { scaleX: 2 },
                                        { scaleY: 2 }
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

module.exports = Kebab;