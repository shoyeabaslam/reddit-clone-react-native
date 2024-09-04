import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigation from './TabNavigation';
import LeftDrawerContent from '../components/LeftDrawerContent';


const LeftDrawer = createDrawerNavigator();

const LeftDrawerNavigator = () => {
    return (
        <LeftDrawer.Navigator screenOptions={{ drawerPosition: 'left', headerShown: false }}
            drawerContent={(props) => <LeftDrawerContent {...props} />}
        >
            <LeftDrawer.Screen name="TabScreen" component={TabNavigation} />
        </LeftDrawer.Navigator>
    );
};

export default LeftDrawerNavigator;
