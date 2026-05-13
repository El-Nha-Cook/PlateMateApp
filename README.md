# PlateMate

PlateMate is a production-style Vue.js meal planner application built to explore scalable frontend architecture, reusable Composition API patterns, and AI-assisted development workflows.

This project was created as preparation for the Vue.js Conference workshop:
"Proven Patterns for Building Production-Grade Vue Apps."

## Project Goals

The goal of PlateMate is to simulate a small but scalable production-grade Vue application while keeping the feature scope simple and maintainable.

The project focuses on:

- Vue 3 Composition API
- reusable components and composables
- scalable folder organization
- state management with Pinia
- testing with Vitest
- collaborative Git workflows
- AI-assisted development practices using tools like GitHub Copilot and Cursor

## Features

Current planned features:

- Recipe Library
- Weekly Meal Planner
- Grocery List Generator
- Daily Calorie & Protein Summary
- Saved Recipes
- Responsive UI

## Tech Stack

- Vue 3
- TypeScript
- Vite
- Pinia
- Vitest
- Tailwind CSS
- ESLint
- Prettier

## Why This Project?

This project supports the following learning objectives:

- understanding production-grade Vue architecture
- practicing scalable frontend organization
- applying Composition API patterns
- learning collaborative workflows
- evaluating AI-assisted coding practices

## Planned Architecture

The application follows a modular and scalable folder structure.

```plaintext
src/
├── assets/
├── components/
│   ├── recipes/
│   ├── planner/
│   ├── grocery/
│   └── ui/
├── composables/
├── stores/
├── pages/
├── router/
├── types/
├── utils/
└── tests/
```

## Planned Components

### UI Components

- BaseButton.vue
- BaseInput.vue
- BaseCard.vue

### Recipe Components

- RecipeCard.vue
- RecipeList.vue

### Planner Components

- MealPlanner.vue
- MealDayCard.vue

### Grocery Components

- GroceryList.vue

## Planned Composables

The project will use reusable composables to separate logic from UI components.

Examples:

- useRecipes.ts
- useMealPlanner.ts
- useNutritionTotals.ts
- useLocalStorage.ts

## State Management

Pinia stores will manage shared application state.

Planned stores:

- recipeStore
- mealPlanStore
- groceryStore

## Testing Goals

The project will include unit testing with Vitest.

Planned test cases:

- recipe filtering
- nutrition calculations
- grocery list generation
- composable behavior
- component rendering

## AI-Assisted Development

This project explores how AI coding assistants can support frontend development workflows while maintaining code quality and architectural consistency.

AI tools may be used for:

- scaffolding components
- generating boilerplate
- suggesting refactors
- generating test cases
- improving documentation

All AI-generated code will be reviewed and refactored when necessary.

## Team Workflow

Development workflow:

1. Create GitHub issues
2. Create feature branches
3. Open pull requests
4. Conduct peer reviews
5. Merge approved changes into main

## Initial MVP Goals

The first milestone focuses on:

- displaying recipe cards
- adding recipes to meal plans
- generating grocery lists
- calculating calories and protein
- building reusable Vue components

## Future Improvements

Potential future enhancements:

- drag-and-drop meal planning
- backend integration
- authentication
- persistent cloud storage
- AI-powered meal recommendations
- dark mode

## Installation

```bash
npm install
npm run dev
```

## Project Status

Currently in early development and architecture planning stage.

## Contributors

- Nha Pham
- El Brewster
