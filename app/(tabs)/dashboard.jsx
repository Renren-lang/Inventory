import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis, VictoryBar } from 'victory-native';

// Sample data for sales and performance
const salesData = [
  { month: 'Jan', sales: 50 },
  { month: 'Feb', sales: 60 },
  { month: 'Mar', sales: 70 },
  { month: 'Apr', sales: 90 },
  { month: 'May', sales: 100 },
  { month: 'Jun', sales: 120 },
];

const performanceData = [
  { vehicle: 'Toyota Camry', sold: 15, stock: 5 },
  { vehicle: 'Honda Civic', sold: 30, stock: 0 },
  { vehicle: 'Ford Mustang', sold: 50, stock: 2 },
  { vehicle: 'Chevrolet Malibu', sold: 10, stock: 3 },
  { vehicle: 'BMW 3 Series', sold: 60, stock: 12 },
];

const Dashboard = () => {
  // Calculate total sold vehicles and average price
  const totalSold = performanceData.reduce((acc, curr) => acc + curr.sold, 0);
  const totalStock = performanceData.reduce((acc, curr) => acc + curr.stock, 0);
  const avgPrice = 22000; // Just an example; this could be dynamic

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      {/* Sales Trend Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Sales Trend (Monthly)</Text>
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryAxis />
          <VictoryAxis dependentAxis />
          <VictoryLine
            data={salesData}
            x="month"
            y="sales"
            style={{
              data: { stroke: '#FF6347', strokeWidth: 3 },
              parent: { border: '1px solid #ccc' },
            }}
          />
        </VictoryChart>
      </View>

      {/* Key Metrics Section */}
      <View style={styles.keyMetricsContainer}>
        <Text style={styles.metricsTitle}>Key Metrics</Text>
        <View style={styles.metricCard}>
          <Text style={styles.metricText}>Total Vehicles Sold: {totalSold}</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricText}>Total Stock: {totalStock}</Text>
        </View>
        <View style={styles.metricCard}>
          <Text style={styles.metricText}>Average Vehicle Price: ${avgPrice}</Text>
        </View>
      </View>

      {/* Vehicle Performance Bar Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Vehicle Performance</Text>
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryAxis />
          <VictoryBar
            data={performanceData}
            x="vehicle"
            y="sold"
            style={{
              data: { fill: '#007BFF', width: 20 },
              parent: { border: '1px solid #ccc' },
            }}
          />
        </VictoryChart>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  chartContainer: {
    marginBottom: 30,
  },
  chartTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  keyMetricsContainer: {
    marginBottom: 40,
  },
  metricsTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  metricCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  metricText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
});

export default Dashboard;
