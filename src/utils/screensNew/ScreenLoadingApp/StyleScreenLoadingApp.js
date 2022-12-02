import { StyleSheet } from 'react-native'
import generalStylesApp from '../../styles/generalStylesApp';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center'
    },

    viewImgLogo: {
        width: 175,
        height: 175,
        backgroundColor: generalStylesApp.ColorFromApp.SECOND_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 9,
    },

    styleImgLogo: {
        width: 178,
        height: 174,
    }
})

export default styles