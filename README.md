# Dynamic UI from JSON object
The goal of this idea is to dynamically update the UI using a JSON object without deployment. 


## Work in progress
This is still in POC stage. Most of the fetures are not implemented yet. Would appreciate if you could provide inputs or comments.

## Components
Here are some parts of the app the you might need to consider.

1. JSON Object
   * Properties of the component you want to create.
   * TODO - Generating/Fetching this JSON from a backend service.
   * Example: [sample-data1.js](src/config/sample-data1.js) 
2. Templates
   * List of predefined styles that is useful for your site. You could imagine it as your bootstrap classes.
   * This is made for consistency and reusability of styles.
   * TODO - Generating/Fetching this JSON from a backend service.
   * Example: [template.js](src/config/template.js)

## Usage
Here's a sample usage wherein you just need to provide a valid JSON object.
```javascript
import React, { useState } from 'react';
import { Container } from 'reactstrap';

// TOD0: Import as an NPM Package.
import GenericComponent from './components/GenericComponent';
import Sample1 from  './config/sample-data1';

function App() {
  return (
    <Container>
      <GenericComponent {...Sample1} />
    </Container>
  );
}
export default App;
```

## Limitations
So far, here's the list of know limitation of this component.
* __element__ property within the JSON object is dependent to [style.js](src/components/GenericComponent/style.js). Still working on it to make the styled component dynamic. If the value of __element__ is not defined, it will be resolved as 'div'.

## Try it locally
```bash
npm run start
```