import React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const LeftDrawerContent = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.header}>
                <Text style={styles.profileName}>John Doe</Text>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => props.navigation.navigate('LogoutScreen')}>
                    <Text style={styles.logoutText}>Log Out</Text>
                </TouchableOpacity>
            </View>

        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    profileIcon: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    footer: {
        marginTop: 'auto',
        marginBottom: 20,
        alignItems: 'center',
    },
    logoutText: {
        fontSize: 16,
        color: '#ff0000',
    },
});

export default LeftDrawerContent;
