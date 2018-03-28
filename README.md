# kulr-spottr

This game has of objective to complete the maximum amount of levels in the amount of time defined by the difficulty set by the user.

Task for the user is spot the tile which has a different color. If the user clicks the right tile the game continues and the user gets the next level of difficulty presented. If the click is wrong the game ends.

# Framework used

I decided to use React due that the transition from a exclusive BE developer to FE is smoother. As a state manager I used Redux along with [redux-sauce](https://github.com/infinitered/reduxsauce) that helps to prevent massive amount of code by defining the actions and the reducers in an unique file.
Also a good library that I found to make the state handling easier is [seamless-immutable](https://github.com/rtfeldman/seamless-immutable) in which you can treat the state as the preferred structure (Object or Array) and work with it.

## Start
The project is started by only running `yarn start`

## Test

For testing I used jest as convention to test the reducers.

All tests can be seing by running `yarn test`