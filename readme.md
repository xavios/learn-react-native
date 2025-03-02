https://github.com/academind/react-native-practical-guide-code

## Goals Application

`Text`, `View` elements from `react-native` are transformed to native elements.
https://reactnative.dev/docs/components-and-apis

We will create our components with just composing the core components.

In React Native we do not have CSS.
StyleSheet objects will help in designing the components. <-- based on CSS

### Flexbox

By default the `<View />` uses flexbox. Default `flexDirection` is `column`.
Available values: `row`, `column`, `row-reverse`, `column-reverse`.
By default views only take up that much space as their content requires.

Unlike in CSS, the styles are not cascading.

### ScrollView

ScrollView enables you to have view, that is by default scrollable.
ScrollView renders always all the items that it has inside of it,
regardless if it is viewable on the screen or not. This can create
easily performance problems.

### FlatList

FlatList solves this issue. Props for Flatlist to remember: renderItem,
keyExtractor, data.
