import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './stacks/AuthStack';
import BottomStack from './stacks/BottomStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function RootNavigator() {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const keepLoggedIn = async () => {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                setIsLogged(true);
            } else return;
        };
        keepLoggedIn();
    }, []);
    
    return (
        <NavigationContainer>
            {isLogged ? <BottomStack /> : <AuthStack />}
        </NavigationContainer>
    )
}