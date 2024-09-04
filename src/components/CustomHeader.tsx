// CustomHeader.js
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { NavigationProp, NavigationState, useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { horizontalScale, scaleFontSize } from '../utils/ScalingFunction';
import { useContext } from 'react';
import DrawerContext from '../context/DrawerContext';


const CustomHeader = ({ route }: BottomTabHeaderProps) => {
    const insets = useSafeAreaInsets();
    const navigate: NavigationProp<ReactNavigation.RootParamList> = useNavigation();
    const headerTitle = route.name === 'Home' ? 'Reddit Clone' : route.name;
    const { openRightDrawer } = useContext(DrawerContext);
    const handleRightDrawerOpen = () => {
        openRightDrawer();
        console.log("right")
    }
    return (
        <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
            <View style={styles.innerContainer}>
                <Pressable onPress={() => navigate.dispatch(DrawerActions.toggleDrawer())}><FontAwesomeIcon icon={faBars} size={horizontalScale(20)} color='white' />
                </Pressable>
                <Text style={styles.title}>{headerTitle}</Text>
            </View>
            <View>
                <Pressable onPress={() => handleRightDrawerOpen()}>
                    <FontAwesomeIcon icon={faUser} size={horizontalScale(20)} color='white' />
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EE0F52',
        flexDirection: 'row',
        padding: horizontalScale(10),
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: scaleFontSize(18),
        fontWeight: 'bold',
        marginLeft: horizontalScale(10)
    },

    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    }

});

export default CustomHeader;
