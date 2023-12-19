import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    paddingLeft: 12, 
    paddingRight: 12,
    position: 'relative'
  },
  nonContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    paddingTop: 15, 
    paddingBottom: 15,
    position: 'relative'
  },
  bottomLine: {
    borderBottomWidth: 1, 
    borderBottomColor: '#000'
  }
});

export default Styles;
