import React, { useState, useRef } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

function TaskInfor({ currentTask, tasks, onChangeListTasks }) {
    const [taskName, setTaskname] = useState(currentTask.name);
    const [editingState, setEditingState] = useState(false);
    const [doneTask, setDoneTask] = useState(false);
    const inputRef = useRef(null);


    const editTaskName = (text) => {
        setTaskname(text);
        onChangeListTasks((tasks) =>
          tasks.map((task) => {
            if (task === currentTask) {
              return { ...task, name: text };
            } else {
              return task;
            }
          })
        );
      };
      
    const handleEditTask = () => {
        setEditingState(!editingState);
        inputRef.current.blur();

    }

    const moveTaskDone = () => {
        setEditingState(false);
        setDoneTask(true);
    }

    const removeTask = () => {
        onChangeListTasks(tasks.filter((task) => task != currentTask));
    }



    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TextInput
                    style={[styles.name,
                    {
                        textDecorationLine: doneTask
                            ? 'line-through'
                            : 'none'
                    },
                    { textDecorationStyle: 'solid' },]}
                    value={taskName}
                    ref={inputRef}
                    onChangeText={editTaskName}
                    editable={editingState}
                    onSubmitEditing={editTaskName}
                />
                <TouchableOpacity onPress={handleEditTask} disabled={doneTask}>
                    {editingState ? (
                        <MaterialIcons name="save-alt" size={28} color="orange" />
                    ) : (
                        <AntDesign
                            name="edit"
                            size={28}
                            color={doneTask ? 'gray' : 'orange'}
                        />
                    )}
                </TouchableOpacity>
                <TouchableOpacity onPress={moveTaskDone}>
                    <MaterialIcons
                        name="done"
                        size={28}
                        color={doneTask
                            ? 'gray'
                            : "green"}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={removeTask}>
                    <AntDesign
                        name="delete"
                        size={28}
                        color="red"
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.line}>------------------------------------------------------------</Text>
        </View>
    )
}

export default TaskInfor


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        rowGap: 1,
        alignContent: 'center',
        padding: 0,
        marginHorizontal: 0,
    },
    content: {
        alignItems: 'center',
        justifyContent: 'space-between',
        // columnGap: 20,
        flexWrap: 'nowrap',
        flexDirection: 'row',
        // marginHorizontal: 0,
        paddingHorizontal: 10,
        backgroundColor: '#F5F5DC',
        marginBottom: 10,
    },
    name: {
        fontSize: 20,
        color: '#696969',
    },
    line: {
        lineHeight: 9,
    }
});
