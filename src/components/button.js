import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import theme from "../utils/theme";


function Button ({  navigation, onPress, title, ...props }) { return (

    <TouchableOpacity onPress={onPress} style={theme.styles.appButtonContainer} {...props}>
      <Text style={theme.styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
)
  };

export default Button


