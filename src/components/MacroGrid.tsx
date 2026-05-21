import { Meal } from "@/storage/meals";
import { StyleSheet, View } from "react-native";
import MacroCard from "./MacroCard";

type MacroGridProps = {
  meals: Meal[];
};

export default function MacroGrid({ meals }: MacroGridProps) {
  const totals = meals.reduce(
    (acc, meal) => ({
      calories: acc.calories + meal.calories,
      carbs: acc.carbs + meal.carbs,
      protein: acc.protein + meal.protein,
      fat: acc.fat + meal.fat,
    }),
    { calories: 0, carbs: 0, protein: 0, fat: 0 },
  );

  return (
    <View style={styles.grid}>
      <MacroCard
        label="Carbs"
        value={`${totals.carbs}`}
        goal="200g"
        color="#4caf50"
      />
      <MacroCard
        label="Protein"
        value={`${totals.protein}`}
        goal="150g"
        color="#2196f3"
      />
      <MacroCard
        label="Fats"
        value={`${totals.fat}`}
        goal="70g"
        color="#ff9800"
      />
      <MacroCard
        label="Calories"
        value={`${totals.calories}`}
        goal="2500kcal"
        color="#9c27b0"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
});
