import MealItem from "@/components/MealItem";
import { clearAllMeals, getMeals, Meal } from "@/storage/meals";
import { globalStyles } from "@/styles/global";
import { useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const MealsScreen = () => {
  const [meals, setMeals] = useState<Meal[]>([]);

  const loadMeals = async () => {
    const data = await getMeals();
    setMeals(data);
  };

  const handleClearAll = async () => {
    await clearAllMeals();
    loadMeals();
  };

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, []),
  );

  return (
    <ScrollView style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.title}>All Meals</Text>
        <TouchableOpacity onPress={handleClearAll}>
          <Text style={styles.clearButton}>Clear All Meals</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={globalStyles.sectionTitle}>Recent Meals</Text>
        {meals.length === 0 ? (
          <Text style={globalStyles.empty}>No meals added yet.</Text>
        ) : (
          meals
            .slice(0, 5)
            .map((meal) => (
              <MealItem
                key={meal.id}
                id={meal.id}
                name={meal.name}
                calories={meal.calories}
                protein={meal.protein}
                carbs={meal.carbs}
                fat={meal.fat}
                onDelete={loadMeals}
              />
            ))
        )}
      </View>
    </ScrollView>
  );
};

const styles = {
  clearButton: {
    color: "red",
    fontSize: 16,
  },
};

export default MealsScreen;
