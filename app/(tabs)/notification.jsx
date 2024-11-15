import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';

// Sample data for vehicles
const vehicles = [
  { id: '1', model: 'Toyota Camry', price: 15000, status: 'Available', stock: 5 },
  { id: '2', model: 'Honda Civic', price: 12000, status: 'Sold', stock: 0 },
  { id: '3', model: 'Ford Mustang', price: 25000, status: 'Available', stock: 1 },
  { id: '4', model: 'Chevrolet Malibu', price: 9000, status: 'Under Maintenance', stock: 3 },
  { id: '5', model: 'BMW 3 Series', price: 35000, status: 'Available', stock: 10 },
  { id: '6', model: 'Audi A4', price: 27000, status: 'Sold', stock: 0 }
];

const Notification = () => {
  const [vehiclesList, setVehiclesList] = useState(vehicles);
  const [notifications, setNotifications] = useState([]);

  // Handle vehicle status update
  const handleStatusUpdate = (id) => {
    const updatedVehicles = vehiclesList.map(vehicle => {
      if (vehicle.id === id) {
        const nextStatus = getNextStatus(vehicle.status);
        let newStock = vehicle.stock;
        if (nextStatus === 'Sold') {
          newStock = 0;
        }

        return { ...vehicle, status: nextStatus, stock: newStock };
      }
      return vehicle;
    });

    setVehiclesList(updatedVehicles);
    checkForNotifications(updatedVehicles);
  };

  // Check for notifications (sold, low stock)
  const checkForNotifications = (updatedVehicles) => {
    const newNotifications = [];

    updatedVehicles.forEach(vehicle => {
      if (vehicle.status === 'Sold') {
        newNotifications.push(`${vehicle.model} has been sold.`);
      } else if (vehicle.stock <= 2 && vehicle.status !== 'Sold') {
        newNotifications.push(`${vehicle.model} stock is running low.`);
      }
    });

    if (newNotifications.length > 0) {
      setNotifications(newNotifications);
    }
  };

  // Get next status in cycle
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
      <Text style={styles.title}>Vehicle Stock & Status</Text>

      {/* Notification Section */}
      {notifications.length > 0 && (
        <View style={styles.notificationContainer}>
          {notifications.map((notification, index) => (
            <Text key={index} style={styles.notificationText}>
              {notification}
            </Text>
          ))}
        </View>
      )}

      {/* Vehicle List */}
      <FlatList
        data={vehiclesList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.vehicleCard}>
            <Text style={styles.vehicleModel}>{item.model}</Text>
            <Text style={styles.vehiclePrice}>${item.price.toLocaleString()}</Text>
            <Text style={styles.vehicleStatus}>Status: {item.status}</Text>
            <Text style={styles.vehicleStock}>Stock: {item.stock}</Text>

            {/* Status Update Button */}
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
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 25,
    textAlign: 'center',
    color: '#333',
  },
  notificationContainer: {
    backgroundColor: '#F5A623', // Vibrant orange for notification
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  },
  notificationText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 5,
  },
  vehicleCard: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  vehicleModel: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  vehiclePrice: {
    fontSize: 18,
    color: '#28A745',
    marginBottom: 12,
  },
  vehicleStatus: {
    fontSize: 16,
    color: '#007BFF', // Blue for status
    marginBottom: 5,
  },
  vehicleStock: {
    fontSize: 16,
    color: '#FF6347', // Red for low stock
    marginBottom: 15,
  },
  statusButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 14,
    paddingHorizontal: 25,
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

export default Notification;
