import Toast from 'react-native-toast-message';

export const showToast = (
  message1: string,
  message2: string,
  type?: boolean,
) => {
  Toast.show({
    type: type ? 'success' : 'error',
    position: 'bottom',
    text1: message1,
    text2: message2,
    visibilityTime: 7000,
    autoHide: true,
    topOffset: 10,
    bottomOffset: 10,
    onShow: () => {},
    onHide: () => {}, // called when Toast hides (if `autoHide` was set to `true`)
    onPress: () => {},
    props: {}, // any custom props passed to the Toast component
  });
};
