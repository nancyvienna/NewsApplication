

import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import StackNavigator from './src/Navigation/StackNavigator';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './src/State/QueryClient';



export default function App() {
  return (
<QueryClientProvider client={queryClient}>
  <StackNavigator></StackNavigator>
</QueryClientProvider>
  
  );
}