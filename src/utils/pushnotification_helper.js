import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    await GetFCMToken(); // Corrected function name
  }
}

async function GetFCMToken() { // Corrected function name
  let fcmtoken = await AsyncStorage.getItem("fcmtoken");
  console.log(fcmtoken, "old token");
  if (!fcmtoken) {
    try {
      const fcmtoken = await messaging().getToken();
      if (fcmtoken) {
        console.log(fcmtoken, "new token");
        await AsyncStorage.setItem("fcmtoken", fcmtoken);

        // Send a push notification (assuming you have a working sendPushNotification function)
        try {
          sendPushNotification(
            fcmtoken,
            'cBZRiZGtSJ6suBkJmqvVgS:APA91bHnFGfgCNq_O8dxyzquB8uIQ4YQv8Xr4SoIMQOrTQvYHJ7UgqYs28EwRP3t5MVOreM4stU2hgHtd5Pj3Kwo71zP7SIihOkrhjidsa8l0HGxH_3vVU48754HhfswgZfV0WElJmbA',
            'Authentication Success',
            'Biometric authentication was successful!'
          );
        } catch (error) {
          console.log(error, "error sending push notification");
        }
      }
    } catch (error) {
      console.log(error, "error in fcmtoken");
    }
  }
}

export const NotificationListener = () => { // Corrected function name
  // Assume a message-notification contains a "type" property in the data payload of the screen to open

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });

  messaging().onMessage(async remoteMessage => {
    console.log("notification on foreground state......", remoteMessage);
  });
}