import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const { Navigator ,Screen } = createBottomTabNavigator();
export default function BottomNav(){



    return(

<Navigator>
    <Screen />

</Navigator>
    );
}