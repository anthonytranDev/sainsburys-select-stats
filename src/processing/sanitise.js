const jsonfile = require('jsonfile')
const file = require('/Users/anthony.tran/workspace/sainsburys/sainsburys-select-stats/data/pre-opt.json')
const fileInput = '/Users/anthony.tran/workspace/sainsburys/sainsburys-select-stats/data/pre-opt.json'
const fileOutput = '/Users/anthony.tran/workspace/sainsburys/sainsburys-select-stats/test.json'

function combineFiles (data) {
  const bundleAmount = data.results.length
  let obj = {}

  for(let i = 0; i < bundleAmount; i++){
    const files = data.results[i].files
    obj = Object.assign(obj, files)
    // unmapped values not account for
  }

  return obj
}

function bundleAnalytics (data, title = 'Bundle Statistics') {
  const TITLE = title
  const NUMBER_OF_BUNDLES = data && data.results && data.results.length
  const TOTAL_BUNDLE_SIZE = data.results.map(bundle => bundle.totalBytes).reduce((a,b) => a + b)
  const TOTAL_UNMAPPED_BUNDLE_SIZE = data.results.map(bundle => bundle.unmappedBytes).reduce((a,b) => a + b)
  const BUNDLE_INFO = data.results.map(bundle => {
    const { bundleName, totalBytes, unmappedBytes } = bundle
    return { bundleName, totalBytes, unmappedBytes }
  })
  return { TITLE, NUMBER_OF_BUNDLES, TOTAL_BUNDLE_SIZE, TOTAL_UNMAPPED_BUNDLE_SIZE, BUNDLE_INFO}
}

// converts bytes to kilo, mega bytes
function convertUnits () {

}

console.log(bundleAnalytics(file))

// jsonfile.readFile(fileInput, function (err, obj) {
//   if (err) console.error(err)
//   jsonfile.writeFile(fileOutput, obj, function (err) {
//     if (err) console.error(err)
//   })
// })

