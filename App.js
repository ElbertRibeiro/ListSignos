import React from 'react';
import { StatusBar } from 'expo-status-bar';
import HomePage from './src/pages';

export default function App() {
  return (
    <>
    <StatusBar style="auto" backgroundColor="green"/>
    <HomePage />
    </>
  );
}