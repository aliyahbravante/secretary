import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const SBeneficiary = () => {
  const navigation = useNavigation(); // Use the useNavigation hook to get navigation object
  
  // Progress values for display
  const total = 35;
  const completed = 10;

  return (
    <View style={styles.container}>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Text style={styles.sectionTitle}>BENEFICIARY REQUESTS</Text>
        <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#aaa" />
      </View>

      {/* Beneficiary Card */}
      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.cardHeader}>EDUCATIONAL FINANCIAL ASSISTANCE</Text>
          <Text style={styles.cardDescription}>
            Financial aid program supporting educational expenses for students in Barangay III.
          </Text>
          <Text style={styles.date}>December 12, 2024</Text>

          {/* Progress Information */}
          <View style={styles.progressContainer}>
            <Text style={styles.progressText}>{`Progress: ${completed}/${total}`}</Text>
          </View>

          {/* Navigate to SeeMore screen */}
          <TouchableOpacity onPress={() => navigation.navigate('SeeMore')}>
            <Text style={styles.seeMore}>SEE MORE</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
    backgroundColor: '#a01919',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  searchContainer: {
    padding: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 10,
    color: '#333',
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 15,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 3,
  },
  cardHeader: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#a01919',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 12,
    color: '#555',
    marginBottom: 10,
  },
  date: {
    fontSize: 12,
    color: '#4caf50',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  progressContainer: {
    marginTop: 5,
  },
  progressText: {
    fontSize: 12,
    color: '#333',
  },
  seeMore: {
    marginTop: 10,
    color: '#a01919',
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
});

export default SBeneficiary;
