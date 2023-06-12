import { useCallback } from 'react';
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AddTask from './components/AddTask';
import ListTasks from './components/ListTasks';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'GreatVibes-Regular': require('./assets/fonts/GreatVibes-Regular.ttf'),
  });

  const [tasks, onChangeListTasks] = useState([]);
  const [id, setId] = useState(0);
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View style={styles.container}
      onLayout={onLayoutRootView}
    >
      <AddTask
        tasks={tasks}
        id={id}
        setId={setId}
        onChangeListTasks={onChangeListTasks}
      />
      <ListTasks
        tasks={tasks}
        onChangeListTasks={onChangeListTasks}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
