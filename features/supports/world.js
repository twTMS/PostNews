var {defineSupportCode} = require('cucumber');
var Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

function CustomWorld({attach}) {
  this.driver = nightmare;
}

defineSupportCode(function ({ setWorldConstructor, AfterAll,setDefaultTimeout }) {
    setWorldConstructor(CustomWorld)
    setDefaultTimeout(60 * 1000);
    AfterAll(async function () {
        await nightmare.end()
    })
})