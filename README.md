# MacroZone

MacroZone is a React Native meal tracking app built with Expo SDK 55 and Expo Router. It helps users log meals, track daily macros, and review recent intake from a simple tab-based interface.

## Project Summary

This app was developed as a step-by-step crash course project and grew from a basic Expo starter into a small but complete tracking experience. The build focused on a few core ideas:

1. Set up an Expo Router project with a root stack and a tab navigator for Home, Add Meal, and All Meals.
2. Created reusable UI components for the date header, macro cards, recent meals, sharing, copying summaries, and reminder toggles.
3. Built the Add Meal screen with form validation, haptic feedback, and navigation back to the home screen after saving.
4. Added local persistence with AsyncStorage so meals survive app restarts.
5. Calculated macro totals from stored meals and refreshed the UI whenever the home or meals screens regain focus.
6. Added meal deletion, clear-all support, share and copy actions, and reminder scheduling through Expo notifications.

The result is a lightweight nutrition log that keeps the interface focused while still covering common mobile app patterns like routing, storage, notifications, and device actions.

## Key Features

- Track meals with calories, protein, carbs, and fat.
- View today’s totals in a macro grid on the home screen.
- Review the latest meals directly on the home screen.
- Browse the full meal history on the All Meals screen.
- Add new meals from a dedicated form.
- Delete individual meals or clear all stored meals.
- Share or copy a daily summary.
- Enable meal reminder notifications.
- Provide haptic feedback for a more polished mobile experience.

## Development Notes

The project uses file-based routing under src/app, shared design tokens in src/styles/global.ts, persistent storage in src/storage/meals.ts, and reusable components in src/components. The home screen loads meals when it comes into focus so the totals and recent list always reflect the latest stored data.

## Getting Started

Install dependencies:

npm install

Start the app:

npx expo start

You can then open the app in Expo Go, an Android emulator, an iOS simulator, or the web preview, depending on your environment.

## Available Scripts

- npm run start: Start the Expo development server.
- npm run android: Open the app on Android.
- npm run ios: Open the app on iOS.
- npm run web: Open the app in a web browser.
- npm run lint: Run Expo lint checks.
- npm run reset-project: Restore the starter project structure.

## Related Notes

The full crash-course walkthrough is preserved in React Native Crash Course.md for reference.
