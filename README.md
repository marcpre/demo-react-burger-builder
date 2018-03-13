# demo-react-burger-builder

## Install

`npm install`

## Run

`npm start`


## Testing

Use [Enzyme](https://github.com/airbnb/enzyme) for testing.

For example:

```
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
```

See `<NavigationItems/>` component for example test.

## Deployment

### Preparation

1. Adjust base path

`<BrowserRouter basename="/my-app/">`

2. Build with npm

`npm run build`

3. Upload only `/build` folder to server


### Example: Deploy on firebase

1. Run `npm install -g firebase-tools` to install firebase tools

2. Login and init `firebase login` && `firebase init`

3. Select `Hosting`, use `build` folder and deploy as `SPA` project 
