import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Authentication from '../Pages/Authentiction';

import SettingsScreen from '../Pages/SettingsScreen';
import test from '../Pages/Test';
import testpage from '../Pages/Testpage';
import menucomponent from '../Pages/menucomponent'

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <><Authentication /><NavigationContainer>
            <Tab.Navigator>
                {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
                <Tab.Screen name="Settings" component={SettingsScreen} />
                {/* <Tab.Screen name="Test" component={test} /> */}
                <Tab.Screen name="TestPage" component={testpage} />
                <Tab.Screen name="Menu" component={menucomponent} />
            </Tab.Navigator>
        </NavigationContainer></>
    );
};

export default Navigation;
