/** 
 * This file details the design decisions made throughout the app.
 * 
 * 1. A /general folder containing components such as Text, Button, InputField etc. has been used to 
 * promote reusability, maintainability and extendability throughout the app.
 * This reduces the effort it takes to debug and test by encapsulating data into smaller components.
 *      - Custom styles can be applied to these components, along with click methods, titles, and child components.
 *      
 * 2. A standard layout component is used to promote reusbility as well as consistency throughout the pages.
 *    - This will display a title and if needed, other components in consistent positions throughout multiple pages.
 * 
 * 3. The use of arrow functions prevents the need to manually bind functions throughout the app, reducing boiler-plate code.
 * 
 * 4. Tests for main components such as Login and DataView are used to ensure the correct behaviour is evident and
 * the correct data is displayed. Given more time, I would have liked to have implemented tests for all components throughout
 * the Dashboard.
 * 
 * 5. The /utility folder contains enums, interfaces, and strings which can be easily used throughout the app and changed
 * without requiring much effort, making the app easier to extend and change if needed.
 * 
 * 6. A logout button has been added to the Dashboard screen so the user can easily navigate between screens.
 * 
 * NOTE: React-google-charts is showing a warning in console regarding the load version.
 * This will not affect the bar chart being displayed. 
 */