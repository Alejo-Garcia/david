# Blaze - David

## Installation

1. Clone the project.
2. Navigate to the project directory.
3. Install the required dependencies using `npm install -force` – the force flag is used as the project was built on a new experimental version of react-navigation which has a problem with dependencies.
4. Install the required iOS dependencies using `bundle install && npx pod-install`.
5. Install the app on iOS using `npm run ios`.
6. Run the metro bundler if needed with `npx react-native start`.

## Testing

1. Install `brew tap wix/brew`.
2. Install `brew install applesimutils`.
3. Create a build version for Detox using `npx detox build --configuration ios.sim.debug`.
4. Run the metro bundler with `npx react-native start`.
5. Run the tests with `npx detox test --configuration ios.sim.debug`.

## Notes

- Due to time constraints the app was built and tested only on iOS.
