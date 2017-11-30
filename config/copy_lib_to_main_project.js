/**
 * Created by avner on 11/28/2017.
 */



const dist='../civalue-server/civalue/portals/portal.client.app/node_modules/react-lib/lib/'
const src=`./lib/`


var path =require('path')
var copy = require('recursive-copy');
var rimraf = require('rimraf');
//const {webpackBuildFolder}= require('./buildParams')




console.log('************************************* copy lib folder to old civalue project')
console.log('dist=',dist)
console.log('src=',src)




function copyLib () {

  console.error('copyLib=',dist)

  copy(src, dist, function(error, results) {
    if (error) {
      console.error('################## copyLib failed: ' + error);
      process.exit(1);
    } else {
      console.info('copy copyLib ' + results.length + ' files');

    }
  });
}



//delete static folder



function startCopy(){
  console.log('start deleting ->',dist)
  rimraf(dist, function (error) {
    if (error) {
      console.error('########### delete failed: ' + error);
      process.exit(1);
    } else {
      console.log('deleted -> :'+ dist);
      copyLib ()
    }

  });
};





module.exports = {
  copyScript: function() {
    startCopy()
  }
}

