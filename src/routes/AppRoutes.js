import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProdutorRoutes from './ProdutorRoutes';
import MelhoresProdutoresRoutes from './MelhoresProdutoresRoutes';

import Coracao from '../assets/coracao.svg';
import Home from '../assets/home.svg';

const Tab = createBottomTabNavigator();

export default function AppRoutes(){
    return <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#2A9F85',
        tabBarInactiveTintColor: '#C7C7C7',
        tabBarIcon: ({ color }) => {
          let Icon = Home;

          if (route.name === 'Melhores Produtores'){
            Icon = Coracao
          }

          return <Icon color={color}/>
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
      })}>
        <Tab.Screen name='Home' component={ProdutorRoutes}/>
        <Tab.Screen name='Melhores Produtores' component={MelhoresProdutoresRoutes}/>
      </Tab.Navigator>
    </NavigationContainer>
}