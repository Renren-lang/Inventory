import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Picker, ActivityIndicator, TouchableOpacity, Image } from 'react-native';

// Sample data with image names
const vehicles = [
  { id: '1', model: 'Toyota Camry', price: 15000, status: 'Available', image: require('../../assets/toyota_camry.png') },
  { id: '2', model: 'Honda Civic', price: 12000, status: 'Sold', image: require('../../assets/honda_civic.png') },
  { id: '3', model: 'Ford Mustang', price: 25000, status: 'Available', image: require('../../assets/ford_mustang.png') },
  { id: '4', model: 'Chevrolet Malibu', price: 9000, status: 'Sold', image: require('../../assets/chevrolet_malibu.png') },
  { id: '5', model: 'BMW 3 Series', price: 35000, status: 'Available', image: require('../../assets/bmw_3_series.png') },
  { id: '6', model: 'Audi A4', price: 27000, status: 'Available', image: require('../../assets/audi_a4.png') }
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [status, setStatus] = useState('');
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  const [loading, setLoading] = useState(false);

  // Function to filter vehicles
  const filterVehicles = () => {
    setLoading(true); // Start loading

    // Simulate a delay for filtering
    setTimeout(() => {
      const filtered = vehicles.filter(vehicle => {
        const matchesModel = vehicle.model.toLowerCase().includes(searchQuery.toLowerCase());

        let matchesPrice = true;
        if (priceRange) {
          if (priceRange === '0-10000' && vehicle.price > 10000) matchesPrice = false;
          if (priceRange === '10000-20000' && (vehicle.price < 10000 || vehicle.price > 20000)) matchesPrice = false;
          if (priceRange === '20000-30000' && (vehicle.price < 20000 || vehicle.price > 30000)) matchesPrice = false;
          if (priceRange === '30000+' && vehicle.price < 30000) matchesPrice = false;
        }

        const matchesStatus = status ? vehicle.status === status : true;

        return matchesModel && matchesPrice && matchesStatus;
      });

      setFilteredVehicles(filtered); // Update state with filtered vehicles
      setLoading(false); // End loading
    }, 500); // Simulate delay (500ms)
  };

  useEffect(() => {
    filterVehicles(); // Filter vehicles on load or when any filter changes
  }, [searchQuery, priceRange, status]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vehicle Search</Text>
      
      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search by model..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Price Filter */}
      <Picker
        selectedValue={priceRange}
        style={styles.picker}
        onValueChange={setPriceRange}>
        <Picker.Item label="Price Range" value="" />
        <Picker.Item label="Under $10,000" value="0-10000" />
        <Picker.Item label="$10,000 - $20,000" value="10000-20000" />
        <Picker.Item label="$20,000 - $30,000" value="20000-30000" />
        <Picker.Item label="Over $30,000" value="30000+" />
      </Picker>

      {/* Status Filter */}
      <Picker
        selectedValue={status}
        style={styles.picker}
        onValueChange={setStatus}>
        <Picker.Item label="Status" value="" />
        <Picker.Item label="Available" value="Available" />
        <Picker.Item label="Sold" value="Sold" />
      </Picker>

      {/* Loading Indicator */}
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007bff" />
        </View>
      ) : (
        <FlatList
          data={filteredVehicles}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.vehicleCard}>
              <Image source={item.image} style={styles.vehicleImage} />
              <Text style={styles.vehicleModel}>{item.model}</Text>
              <Text style={styles.vehiclePrice}>${item.price}</Text>
              <Text style={styles.vehicleStatus}>{item.status}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  searchInput: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 15,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  picker: {
    height: 50,
    marginBottom: 20,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  vehicleCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  vehicleImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  vehicleModel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  vehiclePrice: {
    fontSize: 16,
    color: '#28a745',
  },
  vehicleStatus: {
    fontSize: 14,
    marginTop: 5,
    color: '#007bff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Search;
