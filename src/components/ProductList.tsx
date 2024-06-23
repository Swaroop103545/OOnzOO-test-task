import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import {connect} from 'react-redux';
import {fetchProducts, setFilters} from '../context/actions/ProductAction';
import {Picker} from '@react-native-picker/picker';
import {CommonStyles, FilterStyles, ProductStyles, colors} from './Styles';

const ProductList = ({products, fetchProducts, setFilters}: any) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  // To show no of products initially
  const [showCount, setShowCount] = useState<number>(5);
  const [priceRange, setPriceRange] = useState<{
    min: number | null;
    max: number | null;
  }>({min: null, max: null});

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    // Extracting categories from products
    const uniqueCategories = [
      'All',
      ...new Set(
        products.map((product: {category: string}) => product.category),
      ),
    ];
    setCategories(uniqueCategories);
  }, [products]);

  const applyFilters = () => {
    let filteredProducts = products;

    // Category filter
    if (filters.category !== 'All' && filters.category !== '') {
      filteredProducts = filteredProducts.filter(
        (product: {category: string}) => product.category === filters.category,
      );
    }

    // Price range filter
    if (
      filters.priceRange &&
      filters.priceRange.min !== null &&
      filters.priceRange.max !== null
    ) {
      filteredProducts = filteredProducts.filter(
        (product: {price: number}) =>
          product.price >= filters.priceRange.min! &&
          product.price <= filters.priceRange.max!,
      );
    }

    // ShowCount limit
    return filteredProducts.slice(0, showCount);
  };

  const [filters, setLocalFilters] = useState({
    category: 'All',
    priceRange: null as {min: number | null; max: number | null} | null,
  });

  const handleCategoryChange = (value: string) => {
    const newFilters = {...filters, category: value};
    setLocalFilters(newFilters);
    setFilters(newFilters);
    setSelectedCategory(value);
  };

  const handlePriceRangeChange = (min: number | null, max: number | null) => {
    const newFilters = {...filters, priceRange: {min, max}};
    setLocalFilters(newFilters);
    setFilters(newFilters);
    setPriceRange({min, max});
  };

  const resetFilters = () => {
    const newFilters = {category: 'All', priceRange: null};
    setLocalFilters(newFilters);
    setFilters(newFilters);
    setSelectedCategory('All');
    setPriceRange({min: null, max: null});
  };

  const handleShowMore = () => {
    setShowCount(showCount + 5); // Increase showCount by 5
  };

  const size = 40;

  return (
    <View style={{paddingHorizontal: 10}}>
      <Text style={ProductStyles.Title}>Product List</Text>

      <View>
        <View style={FilterStyles.Container}>
          <Text>Category: </Text>
          <Picker
            selectedValue={selectedCategory}
            style={ProductStyles.Picker}
            onValueChange={itemValue => handleCategoryChange(itemValue)}>
            {categories.map((category, index) => (
              <Picker.Item key={index} label={category} value={category} />
            ))}
          </Picker>
        </View>

        <View style={FilterStyles.PriceRange}>
          <Text>Price Range: </Text>
          <TouchableOpacity
            style={FilterStyles.Chip}
            onPress={() => handlePriceRangeChange(null, null)}>
            <Text>Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={FilterStyles.Chip}
            onPress={() => handlePriceRangeChange(0, 20)}>
            <Text>$0 - $20</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={FilterStyles.Chip}
            onPress={() => handlePriceRangeChange(20, 50)}>
            <Text>$20 - $50</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={FilterStyles.Chip}
            onPress={() => handlePriceRangeChange(50, 100)}>
            <Text>$50 - $100</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={FilterStyles.Chip}
            onPress={() => handlePriceRangeChange(100, null)}>
            <Text>Above $100</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={applyFilters()}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View style={[ProductStyles.Card]}>
              {/* <Image
                source={{uri: item.image}}
                style={{
                  width: PixelRatio.getPixelSizeForLayoutSize(size),
                  height: PixelRatio.getPixelSizeForLayoutSize(size),
                }}
              /> */}
              <View style={CommonStyles.fdRow}>
                <View
                  style={[
                    {
                      backgroundColor:
                        index % 2 == 0 ? colors.green : colors.grey100,
                    },
                    ProductStyles.verticalBar,
                  ]}
                />
                <View style={{marginLeft: 14}}>
                  <Text numberOfLines={2}>{item.title}</Text>
                  <Text>Price: ${item.price}</Text>
                </View>
              </View>
            </View>
          )}
          ListEmptyComponent={() => (
            <View style={ProductStyles.NoData}>
              <Text>No products found matching the filters.</Text>
            </View>
          )}
        />

        {products.length > showCount && (
          <TouchableOpacity
            style={ProductStyles.ShowMoreBTN}
            onPress={handleShowMore}>
            <Text style={{color: colors.green}}>Show More</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const mapStateToProps = (state: {products: any; loading: any; error: any}) => ({
  products: state.products,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps, {fetchProducts, setFilters})(
  ProductList,
);
