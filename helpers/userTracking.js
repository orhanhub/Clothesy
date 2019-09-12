// User Interaction Tracking Module:
// contains functions that can be used for user interaction tracking
// when required, can be desctructured {objKey, objKey} and fired at the imported location

module.exports = {
  logModule: evnt => {
    console.log(evnt.target);
  }
};
