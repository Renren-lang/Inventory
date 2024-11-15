import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';

// Sample data for vehicles
const vehicles = [
  { id: '1', model: 'Toyota Camry', price: 15000, status: 'Available' },
  { id: '2', model: 'Honda Civic', price: 12000, status: 'Sold' },
  { id: '3', model: 'Ford Mustang', price: 25000, status: 'Available' },
  { id: '4', model: 'Chevrolet Malibu', price: 9000, status: 'Under Maintenance' },
  { id: '5', model: 'BMW 3 Series', price: 35000, status: 'Available' },
  { id: '6', model: 'Audi A4', price: 27000, status: 'Sold' }
];

const Status = () => {
  const [vehiclesList, setVehiclesList] = useState(vehicles);

  // Function to handle status update
  const handleStatusUpdate = (id) => {
    // Find the vehicle to update
    const updatedVehicles = vehiclesList.map(vehicle => {
      if (vehicle.id === id) {
        // Cycle through statuses
        const nextStatus = getNextStatus(vehicle.status);
        return { ...vehicle, status: nextStatus };
      }
      return vehicle;
    });

    setVehiclesList(updatedVehicles);
    Alert.alert('Status Updated', 'Vehicle status has been updated successfully!');
  };

  // Function to get the next status in the cycle
  const getNextStatus = (currentStatus) => {
    switch (currentStatus) {
      case 'Available':
        return 'Sold';
      case 'Sold':
        return 'Under Maintenance';
      case 'Under Maintenance':
        return 'Available';
      default:
        return 'Available';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>One-Tap Status Update</Text>
      <FlatList
        data={vehiclesList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.vehicleCard}>
            <Text style={styles.vehicleModel}>{item.model}</Text>
            <Text style={styles.vehiclePrice}>${item.price.toLocaleString()}</Text>
            <Text style={styles.vehicleStatus}>Status: {item.status}</Text>

            {/* One-Tap Status Update Button */}
            <TouchableOpacity
              style={styles.statusButton}
              onPress={() => handleStatusUpdate(item.id)}
            >
              <Text style={styles.statusButtonText}>Update Status</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4F6F9', // Light background color for contrast
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  vehicleCard: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  vehicleModel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  vehiclePrice: {
    fontSize: 16,
    color: '#28A745', // Green color for price
    marginBottom: 10,
  },
  vehicleStatus: {
    fontSize: 14,
    color: '#007BFF', // Blue color for status
    marginBottom: 15,
  },
  statusButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  statusButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Status;
