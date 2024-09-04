import { StyleSheet, Text, View } from "react-native"
import { horizontalScale, scaleFontSize, verticalScale } from "../utils/ScalingFunction"
import { Image } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faCog, faUser, faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';
import { FontawesomeObject, icon, IconDefinition } from "@fortawesome/fontawesome-svg-core";

const Data = [
    {
        title: 'Home',
        icon: faHome,
    },
    {
        title: 'Settings',
        icon: faCog,
    },
    {
        title: 'Profile',
        icon: faUser,
    },
    {
        title: 'Messages',
        icon: faEnvelope,
    },
    {
        title: 'Notifications',
        icon: faBell,
    }
];


const Item = (props: { title: string, icon: IconDefinition }) => {
    return (
        <View style={styles.itemContainer}>
            <FontAwesomeIcon icon={props.icon} size={scaleFontSize(30)} color="#3D3D3D" />
            <Text style={styles.itemTitle}>{props.title}</Text>
        </View>
    )
}


const RightDrawerContent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image style={styles.profileImage} source={require('../assets/images/profile.png')} />
            </View>
            <View>
                <FlatList
                    data={Data}
                    renderItem={({ item }) => <Item {...item} />}
                    keyExtractor={({ title }) => title}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: horizontalScale(10),
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileImage: {
        width: horizontalScale(120),
        height: horizontalScale(120),
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: horizontalScale(120) / 2
    },
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: verticalScale(12),
        paddingHorizontal: horizontalScale(8),
        alignItems: 'center'
    },
    itemTitle: {
        marginLeft: horizontalScale(20),
        fontSize: scaleFontSize(20),
        fontWeight: '400'
    }
})

export default RightDrawerContent