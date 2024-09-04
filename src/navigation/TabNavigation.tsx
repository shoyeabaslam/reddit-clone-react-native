import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen/HomeScreen';
import CommunityScreen from '../screen/CommunityScreen/CommunityScreen';
import CreateScreen from '../screen/CreateScreen/CreateScreen';
import ChatScreen from '../screen/ChatScreen/ChatScreen';
import InboxScreen from '../screen/InboxScreen/InboxScreen';

// Importing FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUsers, faPlusCircle, faComments, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../components/CustomHeader';



const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                header: (props) => <CustomHeader {...props} />,
                tabBarActiveTintColor: '#EE0F52',
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: ({ color, size }) => {
                    let icon;

                    // Set icon based on route name
                    if (route.name === 'Home') {
                        icon = faHome;
                    } else if (route.name === 'Community') {
                        icon = faUsers;
                    } else if (route.name === 'Create') {
                        icon = faPlusCircle;
                    } else if (route.name === 'Chat') {
                        icon = faComments;
                    } else if (route.name === 'Inbox') {
                        icon = faEnvelope;
                    }

                    // Return the icon with the dynamic color and size
                    return <FontAwesomeIcon icon={icon!} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Community" component={CommunityScreen} />
            <Tab.Screen name="Create" component={CreateScreen} />
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Inbox" component={InboxScreen} />
        </Tab.Navigator>
    );
}




export default TabNavigation;
