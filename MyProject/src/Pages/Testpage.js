import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Menu, IconButton, Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Cardmenu from '../components/cardmenu'

const MyPage = () => {
    const dropdownData = [
        { label: 'Option 1', value: 'option1', icon: 'rocket' },
        { label: 'Option 2', value: 'option2', icon: 'heart' },
        { label: 'Option 3', value: 'option3', icon: 'smile-o' },
    ];
    const data = [
        { iconName: 'ios-home', title: 'Home' },
        { iconName: 'ios-heart', title: 'Favorites' },
        { iconName: 'ios-settings', title: 'Settings' },
    ];
    const [visible, setVisible] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState(null);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        closeMenu();
    };

    return (
        <View style={styles.container}>
            <PaperProvider>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<IconButton icon="dots-vertical" onPress={openMenu} />}
                >
                    {dropdownData.map((item) => (
                        <Menu.Item
                            key={item.value}
                            title={item.label}
                            icon={() => <Icon name={item.icon} size={20} color="black" />}
                            onPress={() => handleOptionSelect(item)}
                        />
                    ))}
                </Menu>
                <Cardmenu data={data} />
                <Text>{selectedOption}</Text>
            </PaperProvider>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

export default MyPage;
