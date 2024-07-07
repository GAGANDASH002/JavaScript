function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    // if a function reference is returned instead of being called,
    // then its whole lexical scope is returned.
    return displayName;
  }

const myFunc = makeFunc();
myFunc();