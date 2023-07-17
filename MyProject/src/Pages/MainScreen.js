import React, { useEffect, useState } from 'react';
import { View, Button, Text } from 'react-native';
import Username from '../components/GetAuthenticationInfo ';
// import { AuthContext } from '../components/AuthContext';

const SettingsScreen = ({ navigation }) => {
    const [authInfo, setAuthInfo] = useState(null);

    useEffect(() => {
        const fetchInfo = async () => {
            const authInfo = await Username();
            console.log(authInfo)
            if (authInfo) {
                const { token, userId } = authInfo
                console.log('Token:', token);
                console.log('UserId:', userId)
                setAuthInfo(authInfo)
            }
        };
        fetchInfo();
    }, []);
    // const { token, userId, logout } = useContext(AuthContext);
    return (
        <View>
            {authInfo ? (
                <>
                    <Text>Token: {authInfo.token}</Text>
                    <Text>UserID: {authInfo.userId}</Text>
                </>
            ) : (
                <Text>No authentication information found.</Text>
            )}
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

export default SettingsScreen;
