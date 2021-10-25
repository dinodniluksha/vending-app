import React from 'react';
import RoundedButton from 'components/RoundedButton';
import Background from 'components/Background';

const TestPage: () => Node = () => {
    return (
        <Background>
        <RoundedButton 
        label = "Submit"
        onPress = {() => {}}
        />
        </Background>
    );
  };



export default TestPage;