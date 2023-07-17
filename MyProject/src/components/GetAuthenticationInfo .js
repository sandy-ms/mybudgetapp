import { View, Text } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const getAuthenticationInfo = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('userId');
    if (token !== null && userId !== null) {
      console.log('Authentication information retrieved successfully');
      console.log('Token:', { token })
      console.log('userId:', { userId })
      // Do something with the retrieved information
      return { token, userId };
    } else {
      console.log('No authentication information found');
      return null;
    }
  } catch (error) {
    console.log('Failed to retrieve authentication information', error);
    return null;
  }
};


export default getAuthenticationInfo 