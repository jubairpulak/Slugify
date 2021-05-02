

const slugify =(objdata, lowercase = false, replacement ="-")=>{

    let arr =[]
    Object.values(objdata).forEach((e)=> arr.push(e.split(" ").join(replacement)))
    if(lowercase ){

      return arr.toString().split(",").join(replacement).toLowerCase()
    }else{
        return arr.toString().split(",").join("-")
    }   

}

module.exports.slugify = slugify