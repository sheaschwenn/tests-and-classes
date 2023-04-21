const { stringify } = require("querystring")

class Component{
  constructor(child){
    this.child = [];
    
  }
    render(child){
      if(!child){
       throw new Error("Child class must implement render() method.")
     }
     else{
     return stringify(child)
     }
     
    }
     renderInnerHTML(array){
      for(let i = 0; i<array.length; i++){
        if(typeof array[i]  !== "string"){
          render(array[i])
        }
      }
      return array
     
     
    }
  }

  

  module.exports = Component