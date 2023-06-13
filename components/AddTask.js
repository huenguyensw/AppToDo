import React, { useState } from 'react'
import { StyleSheet, Text, Pressable, TextInput, View, Keyboard } from 'react-native';

export default function AddTask({ tasks, onChangeListTasks, id, setId }) {
    const [task, onChangeTask] = useState('');

    const AddOneTask = () => {
        onChangeListTasks([...tasks, { id: id, name: task }]);
        setId(id + 1);
        Keyboard.dismiss();
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>To Do App</Text>
            <TextInput
                style={styles.input}
                value={task}
                onChangeText={(value) => onChangeTask(value)} placeholder='New Task' />
            <Pressable
                style={styles.button}
                onPress={AddOneTask}
            >
                <Text style={styles.text}>Add</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    titleText: {
        fontFamily: 'GreatVibes-Regular',
        color: 'orange',
        fontSize: 50,
        fontWeight: 800,
        marginBottom: 10,
    },
    input: {
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        fontSize: 20,
        width: 300,
        padding: 5,
        margin: 10,
    },
    button: {
        marginBottom: 20,
        marginTop: 20,
    },
    text: {
        fontFamily: 'GreatVibes-Regular',
        color: 'orange',
        fontSize: 30,
        textAlign: 'center',
    }
})
