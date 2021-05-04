
# What is this?
Slugify object and Return String, Yeah, You can make slugify using more than one value. 




# Installation

`npm i jslugify --save`

Then...

...

const {slugify} = require("jslugify")

//make slugify using one variable

let obj = {}

obj.productname = req.body.productname

slugify(obj) //return product-name

//Make slugify using two variable

![image](https://user-images.githubusercontent.com/24719971/116826836-e4261d00-abb7-11eb-9a8e-91c1b620ca54.png)

![image](https://user-images.githubusercontent.com/24719971/116826849-f607c000-abb7-11eb-991f-6ca9505bcd90.png)


##Using another two opitons(lowercase, replacement)

![image](https://user-images.githubusercontent.com/24719971/116826950-7dedca00-abb8-11eb-857e-6602895305a9.png)

![image](https://user-images.githubusercontent.com/24719971/116826959-8b0ab900-abb8-11eb-9541-a6fec7be32fd.png)


...

## Options
jslufigy supports 2 options, both of which are optional:
* *replacement* - __You can customize "-" this option to any other     character through replacement  parameter

* *lowercase* - __ By default it is true. But you can turn this into false, just set lowercase = false
