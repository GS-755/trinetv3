import { Button, Text, View } from "react-native";
import Styles from "../style/Styles";

const History = (): JSX.Element => {
  return (
    <>
      <View style={Styles.nonContainer}>
        <View style={Styles.container}>
          <View className="mt-3 mb-3 h-80">
            <Text className="mb-2 text-left">8 Mbps -> MB/s</Text>
            <Text className="font-bold text-xl text-right">= 1 MB/s</Text>
            <View className="mt-3" style={Styles.bottomLine}></View>
          </View>
        </View>
      </View>
      <View>
        <Button title="Xoá lịch sử"></Button>
      </View>
    </>
  );
}

export { History };