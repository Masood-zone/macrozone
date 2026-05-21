# MacroZone

MacroZone is a React Native meal tracking app built with Expo SDK 55 and Expo Router. It lets users log meals, track daily macros, and review what they have eaten through a clean tab-based interface.

## How This App Was Built

This project started as an Expo starter and was gradually turned into a full mobile app. The development path matters here, because each layer introduced one part of the app's behavior:

1. Project setup established Expo, Expo Router, TypeScript, and the basic folder structure.
2. Core concepts and styling introduced a shared color system, global styles, and simple reusable layout primitives.
3. Navigation and layout moved the app into a stack plus tabs structure so the main screens could be reached quickly.
4. UI components broke the screen into focused pieces like the macro grid, recent meals, share button, copy button, and reminder switch.
5. Data management added AsyncStorage so meals persist and the UI can recalculate totals from saved data.
6. Extra user experience features added haptics, sharing, clipboard support, notifications, and meal deletion.

The result is a compact but realistic app that demonstrates how a small Expo project grows into something structured and stateful.

## Walkthrough

### 1. Project Setup

The app was initialized with Expo and Expo Router, which gave it file-based routing from the start. The workspace is organized around src/app for screens, src/components for reusable UI, src/storage for persistence, and src/styles for shared tokens.

This setup matters because it keeps the app easy to reason about. Screens are just files, and the routing structure mirrors the user experience instead of hiding it behind a separate navigation config.

### 2. Core Concepts and Styling

The earliest version of the app focused on getting something visible on the screen and then making it consistent. That meant creating global colors and layout styles in src/styles/global.ts and reusing them everywhere instead of restyling each screen from scratch.

The app uses a dark, high-contrast visual system with a few clear design tokens:

- background for the main app surface
- header for structural areas
- surface for cards and inputs
- primary for actions and emphasis
- text and textSecondary for hierarchy

This is the foundation that keeps the app visually coherent as more screens and components get added.

### 3. Navigation and Layout

The app uses Expo Router's root stack plus a tabs navigator. The root layout renders the tab group, and the tab group provides three main entry points: Home, Add Meal, and All Meals.

That decision keeps navigation simple:

- Home shows today's summary.
- Add Meal is the data entry surface.
- All Meals is the longer history view and cleanup surface.

Because the navigation is file-based, the app stays easy to extend. Adding a screen means adding a file and registering it in the relevant layout, instead of rebuilding a navigation tree by hand.

### 4. UI Components

The screens are intentionally built from small reusable pieces. The macro cards, meal items, recent meals list, share button, copy button, and reminder toggle all do one thing well and can be composed together on the home screen.

That component split is what keeps the app from becoming a single large screen file. It also makes the UI easier to update later because a change to one piece, like the meal row design, automatically applies everywhere it is used.

### 5. Data Management

Meals are stored locally with AsyncStorage. The storage layer exposes functions for adding, loading, deleting, and clearing meals, and each meal includes an id plus a createdAt timestamp.

The important behavior is not just saving data. The app also reloads meals when the Home or All Meals screens gain focus, so the totals and lists stay current after adding or deleting entries. That is why the home screen can feel live even though the data is stored locally.

### 6. Extra User Experience Features

Several mobile-specific touches were added to make the app feel complete:

- Haptics confirm successful meal actions.
- Share lets users send a summary out to other apps.
- Clipboard copy makes it easy to reuse a daily summary.
- Notifications schedule meal reminders.
- Clear-all and delete actions support quick day-to-day reset.

These features are not required for basic tracking, but they make the app feel like a real device-focused product rather than a demo.

### 7. Build and Deployment

The project is ready for Expo/EAS workflows. That means the same codebase can be run locally during development and packaged later for device distribution.

## Current App Behavior

The finished app works like this:

- The home screen shows the date, macro totals, a copy button, reminder toggle, and recent meals.
- The Add Meal screen saves new entries and returns the user home.
- The All Meals screen lists all stored meals and supports deletion and clearing.
- Totals update from saved data rather than hardcoded values.

## Key Features

- Track meals with calories, protein, carbs, and fat.
- View today's totals in a macro grid on the home screen.
- Review the latest meals directly on the home screen.
- Browse the full meal history on the All Meals screen.
- Add new meals from a dedicated form.
- Delete individual meals or clear all stored meals.
- Share or copy a daily summary.
- Enable meal reminder notifications.
- Provide haptic feedback for a more polished mobile experience.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the app:

```bash
npx expo start
```

You can then open the app in Expo Go, an Android emulator, an iOS simulator, or the web preview, depending on your environment.

## Available Scripts

- `npm run start`: Start the Expo development server.
- `npm run android`: Open the app on Android.
- `npm run ios`: Open the app on iOS.
- `npm run web`: Open the app in a web browser.
- `npm run lint`: Run Expo lint checks.
- `npm run reset-project`: Restore the starter project structure.

## Reference Material

The full crash-course walkthrough is preserved in React Native Crash Course.md for reference if you want the original step-by-step source material.
