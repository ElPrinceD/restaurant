const tintColor = "#B8860B"; // Primary golden color
const tintColorSecond = '#DAA520'; // Secondary golden color (a lighter shade)
const gradientButton = 'linear-gradient(to right, #DAA520 0%, #B8860B 100%)'; // Gold gradient button
const lightTextColor = '#000';
const lightTextSecondaryColor = '#666';
const lightBackgroundColor = '#fff'; // Keeping the original light background
const lightCardColor = '#F5F5DC'; // Light beige-like card
const lightBorderColor = '#B8860B';
const lightShadowColor = '#000';
const lightTabIconDefaultColor = '#ccc';
const lightButtonDisabledColor = '#EED5B7'; // Light golden disabled button
const lightPlaceholderColor = '#666';
const lightGradientBackgroundColor = '#f2f2f2'; // Keeping the original light gradient background
const darkTextColor = '#fff';
const darkTextSecondaryColor = '#ccc';
const darkBackgroundColor = '#000'; // Keeping the original dark background
const darkCardColor = '#4B3A2A'; // Dark beige/brown card for a golden-themed dark mode
const darkShadowColor = '#696969';
const darkTabIconDefaultColor = '#ccc';
const darkButtonDisabledColor = '#6E4B16'; // Dark golden disabled button
const darkPlaceholderColor = '#aaa';
const darkGradientBackgroundColor = '#000';

const lightErrorBackground = '#f8d7da'; // Light red background
const lightErrorText = '#721c24'; // Dark red text
const darkErrorBackground = '#721c24'; // Dark red background
const darkErrorText = '#f8d7da'; // Light red text

export default {
  light: {
    text: lightTextColor,
    reverseText: darkTextColor,
    textSecondary: lightTextSecondaryColor,
    background: lightBackgroundColor,
    card: lightCardColor,
    tintSecond: tintColorSecond,
    tint: tintColor,
    border: lightBorderColor,
    shadow: lightShadowColor,
    tabIconDefault: lightTabIconDefaultColor,
    tabIconSelected: tintColor,
    buttonBackground: tintColor,
    buttonDisabled: lightButtonDisabledColor,
    placeholder: lightPlaceholderColor,
    icon: tintColor,
    selectedItem: tintColor,
    selectedText: tintColor,
    gradientBackground: lightGradientBackgroundColor,
    errorBackground: lightErrorBackground,
    errorText: lightErrorText,
  },
  dark: {
    text: darkTextColor,
    reverseText: lightTextColor,
    textSecondary: darkTextSecondaryColor,
    tintSecond: tintColorSecond,
    background: darkBackgroundColor,
    card: darkCardColor,
    tint: tintColor,
    border: tintColor,
    shadow: darkShadowColor,
    tabIconDefault: darkTabIconDefaultColor,
    tabIconSelected: tintColor,
    buttonBackground: tintColor,
    buttonDisabled: darkButtonDisabledColor,
    placeholder: darkPlaceholderColor,
    icon: tintColor,
    selectedItem: tintColor,
    selectedText: tintColor,
    gradientBackground: darkGradientBackgroundColor,
    errorBackground: darkErrorBackground,
    errorText: darkErrorText,
  },
};