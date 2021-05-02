
# What is this?
Slugify object and Return String, Yeah, You can make slugify using more than one value. 




# Installation

`npm i jslugify --save`

Then...

...

const slugify = require('jslugify)

//make slugify using one variable

let obj = {}
obj.productname =req.body.productname
slugify(obj) //return product-name

//Make slugify using two variable

let obj = {}
obj.firstname = req.body.firstname
obj.lastname = req.body.lastname
slugify(obj) //return firstname-lastname
...

## Options
jslufigy supports 2 options, both of which are optional:
* *replacement* - __You can customize "-" this option to any other     character through replacement  parameter

* *lowercase* - __ By default it is true. But you can turn this into false, just set lowercase = false
