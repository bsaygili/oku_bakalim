import React from 'react';
import { Text, View, Button } from 'react-native';
import colors from '@/app/common/colors';
import usePushNotification from '@/app/shared/usePushNotification';


const Notification = () => {

    const { content, expoPushToken } = usePushNotification();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
            <Text style={{ color: colors.warning }}>Your Expo push token: {expoPushToken}</Text>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text>Title: {content?.title} </Text>
                <Text>Body: {content?.body}</Text>
                <Text>Data: {JSON.stringify(content?.data)}</Text>
            </View>
            <Button
                title="Press to Send Notification"
                onPress={async () => {
                    await console.log('expoPushToken', expoPushToken)
                }}
            />
        </View>
    );
}

export default Notification