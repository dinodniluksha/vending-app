import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

const Background = ({children}) => (
<View style={styles.box}>
    {children}
</View>
);

const styles = StyleSheet.create({
    box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'lightyellow',
    },
  });
export default Background;