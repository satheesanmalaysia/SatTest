
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {

  function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
  
    while (left < right) {
      const sum = numbers[left] + numbers[right];
  
      if (sum === target) {
        return [left + 1, right + 1];
      } else if (sum < target) {
        left++;
      } 
    }
    return [];
  }
  
  const numbers = [2,7,11,15];
  const target = 17;
  const result = twoSum(numbers, target);
  console.log(result); // Output: [1, 3]
  const showProblem = JSON.stringify(numbers)
  const showResult = JSON.stringify(result)
  return (
    <View style={styles.container}>
      <Text>Passed Values - {showProblem}  </Text>
      <Text>Target - {target}  </Text>
      <Text>Result - {showResult}  </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
