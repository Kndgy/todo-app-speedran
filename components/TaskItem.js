
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";
import { Feather, MaterialIcons } from '@expo/vector-icons';

const TaskItem = (props) => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.indexContainer}>
                <Text style={styles.index}>{props.index}</Text>
            </View> */}
            <View style={styles.taskContainer}>
                <TouchableOpacity onPress={() => props.deleteTask()}>
                  <Feather style={styles.delete} name="circle" size={24} color='#fff' />
                </TouchableOpacity>
                <Text style={styles.task}>{props.task}</Text>
                {/* <TouchableOpacity onPress={() => props.deleteTask()}>
                  <MaterialIcons style={styles.delete} name="delete-outline" size={18} color='#fff' />
                </TouchableOpacity> */}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    indexContainer: {
        width: 25,
    },
    index: {
        color: '#fff',
        fontSize: 20,
    },
    taskContainer: {
        flexDirection: 'row',
        flex: 1,
        paddingVertical: 0,
    },
    task: {
        color: '#fff',
        fontSize: 16,
    },
    delete: {
        marginRight: 20,
    },
});

export default TaskItem