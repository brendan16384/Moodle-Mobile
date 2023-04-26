import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, View, Text, TextInput, Image, Button, StyleSheet, Alert } from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Text>Course Overview</Text>
          <View style={styles.courseCard}>
            <Text>CSI-3150</Text>
            <Text>Winter Semester 2023</Text>
          </View>
          <View style={styles.courseCard}>
            <Text>CSI-4500</Text>
            <Text>Winter Semester 2023</Text>
          </View>
          <View style={styles.courseCard}>
            <Text>CSI-4650</Text>
            <Text>Winter Semester 2023</Text>
          </View>
        </View>
        <Text/>
        <View style={styles.container}>
          <Text>Timeline</Text>
          <View style={styles.assignment}>
            <Text>Programming Assignment 1</Text>
            <Text>CSI-4500</Text>
            <Text>February 7, 2023 23:59</Text>
          </View>
          <View style={styles.assignment}>
            <Text>Programming Assignment 2</Text>
            <Text>CSI-4500</Text>
            <Text>March 7, 2023 23:59</Text>
          </View>
          <View style={styles.assignment}>
            <Text>CUDA Assignment</Text>
            <Text>CSI-4650</Text>
            <Text>March 20, 2023 23:55</Text>
          </View>
          <View style={styles.assignment}>
            <Text>Pi Cluster Assignment</Text>
            <Text>CSI-4650</Text>
            <Text>March 24, 2023 23:55</Text>
          </View>
          <View style={styles.assignment}>
            <Text>Project Phase 1</Text>
            <Text>CSI-3150</Text>
            <Text>March 24, 2023 23:59</Text>
          </View>
          <View style={styles.assignment}>
            <Text>OpenMP Assignment</Text>
            <Text>CSI-4650</Text>
            <Text>April 3, 2023 23:55</Text>
          </View>
          <View style={styles.assignment}>
            <Text>Project Phase 2</Text>
            <Text>CSI-3150</Text>
            <Text>April 26, 2023 23:59</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#D9C89E',
  },
  scroll: {
    width: '100%'
  },
  container: {
    //display: 'flex',
    backgroundColor: '#FFFFFF',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: 24,
  },
  courseCard: {
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#DDD',
    borderRadius: 12,
    width:'75%',
    margin: 16,
  },
  assignment: {
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#DDD',
    borderRadius: 12,
    width:'75%',
    margin: 16,
  },
});