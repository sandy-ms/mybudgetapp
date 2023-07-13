
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';

const MyComponent = () => {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);
    return (
        <PaperProvider>
            <View
                // style={{
                //     paddingTop: 10,
                //     flexDirection: 'row',
                //     justifyContent: 'flex-start',
                // }}
                style={styles.container}>
                < Menu visible={visible}
                    onDismiss={closeMenu}
                    anchor={<Button onPress={openMenu}>Show menu</Button>}>
                    <Menu.Item leadingIcon="redo" onPress={() => { }} title="Redo" />
                    <Menu.Item leadingIcon="undo" onPress={() => { }} title="Undo" />
                    <Menu.Item leadingIcon="content-cut" onPress={() => { }} title="Cut" disabled />
                    <Menu.Item leadingIcon="content-copy" onPress={() => { }} title="Copy" disabled />
                    <Menu.Item leadingIcon="content-paste" onPress={() => { }} title="Paste" />
                </Menu>
            </View >
        </PaperProvider >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    menu: {
        marginTop: 10,
        width: 200,
    },
    menuItem: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default MyComponent;