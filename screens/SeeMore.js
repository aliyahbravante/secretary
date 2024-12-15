import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SeeMore = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/* Title */}
      <Text style={styles.sectionTitle}>EDUCATIONAL FINANCIAL ASSISTANCE</Text>

      {/* Table Content */}
      <ScrollView>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.headerCell}>NAME</Text>
            <Text style={styles.headerCell}>STATUS</Text>
            <Text style={styles.headerCell}>DATE OF SUBMISSION</Text>
            <Text style={styles.headerCell}>ACTION</Text>
          </View>
          {/* Single Row */}
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>CRUZ, Sofia M.</Text>
            <Text style={styles.tableCell}>APPROVED</Text>
            <Text style={styles.tableCell}>06/14/2024</Text>
            <Text style={styles.actionCell}>View Requirements</Text>
          </View>
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
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 15,
    color: '#333',
  },
  table: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  tableHeader: {
    backgroundColor: '#a01919',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
    color: '#333',
  },
  actionCell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
    color: '#a01919',
    textDecorationLine: 'underline',
  },
});

export default SeeMore;
