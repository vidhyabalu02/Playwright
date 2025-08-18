let browser = "Chrome"
let testType = "Smoke"


function launchBrowser(browser) {

  if(browser=="Chrome") {
    console.log("Launching Chrome Browser")
  } else if (browser=="Edge") {
     console.log("Launching Edge Browser")
  } else if(browser=="Safari") {
    console.log("Launching Safari Browser")
  } else if(Chrome=="Firefox") {
    console.log("Launching Firefox Browser")
  } else {
     console.log("Browser Not Supported")
  }

  }

function runTests(testType){  
    switch(testType)
{
    case "Smoke" :
        console.log("Running smoke test ")
        break;

      case "Regression" :
        console.log("Running Regression tests")
        break;

      case "Sanity" :
        console.log("Running Sanity tests")
        break;

    default :
        console.log("Running default smoke test cases")

}


}

launchBrowser(browser)
runTests(testType)

