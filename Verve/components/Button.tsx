import React, { memo } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  useColorScheme,
} from "react-native";
import Colors from "../constants/Colors";

type ButtonProps = {
  onPress?: () => void;
  title?: string;
  disabled?: boolean;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  children?: React.ReactNode;
  activeOpacity?: number;
};

const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  disabled = false,
  style,
  textStyle,
  children,
  activeOpacity = 0.6,
}) => {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? "light"];

  const styles = StyleSheet.create({
    button: {
      backgroundColor: themeColors.buttonBackground,
      padding: 10,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonDisabled: {
      backgroundColor: themeColors.buttonDisabled,
    },
    text: {
      color: themeColors.text,
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
    },
  });
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.buttonDisabled,
        ...(Array.isArray(style) ? style : [style]),
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
    >
      {children ? (
        children
      ) : (
        <Text
          style={[
            styles.text,
            ...(Array.isArray(textStyle) ? textStyle : [textStyle]),
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default memo(Button);
