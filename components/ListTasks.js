import React, { useEffect, useRef } from 'react'
import { StyleSheet, FlatList, View } from 'react-native';
import TaskInfor from './TaskInfor';

export default function ListTasks({ tasks, onChangeListTasks }) {
    const flatListRef = useRef(null);
    const renderItem = (({ item }) =>
        <TaskInfor
            index={item.id}
            currentTask={item} tasks={tasks}
            onChangeListTasks={onChangeListTasks}
        />);
    useEffect(() => {
        if (flatListRef.current && tasks.length > 0) {
            flatListRef.current.scrollToEnd();
        }
    }, [tasks]);
    return (
        <View style={styles.container}>
            <FlatList
                data={tasks}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                onContentSizeChange={() => {
                    if (flatListRef.current) {
                        flatListRef.current.scrollToEnd();
                    }
                }}
                onLayout={() => {
                    if (flatListRef.current) {
                        flatListRef.current.scrollToEnd();
                    }
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontFamily: 'GreatVibes-Regular',
        color: 'orange',
        fontSize: 50,
        fontWeight: 800,
    },
    input: {
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        fontSize: 20,
        width: 300,
    },
    button: {
        width: 300,
        height: 50,
    },
})
