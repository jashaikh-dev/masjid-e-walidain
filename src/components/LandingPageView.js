import React from 'react'
import { Text , View } from 'react-native'

export default class LandingPageView extends React.Component {
    render(){
        return (
            <View style={styles.containerView}>
                <Text>
                    Landing Page for Masjid-E-Walidain
                </Text>
            </View>
        )
    }
}

const styles = {
    containerView : {
        flex: 1,
        backgroundColor: '#2B31AC',
        paddingTop:20
    }
}