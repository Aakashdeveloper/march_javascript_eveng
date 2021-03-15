var city = "London";
undefined
city.toUpperCase()
"LONDON"
city.toLowerCase()
"london"

var city = "London";
undefined
city.length
6
city[0]
"L"
city[1]
"o"
var name = "  Bhumika  "
undefined
name.length
11
name.trim()
"Bhumika"
name.trim().length
7


var name = "  Bhumika . "
name.trim()
"Bhumika ."

//Case Sensitive
var a = "john"
var b= "John"
a==b
false

a.toLowerCase() == b.toLowerCase()

var name = "  Bhumika . "

undefined
name.trim()
"Bhumika ."
var a = "john"
undefined
var b= "John"
undefined
a==b
false
a.toLowerCase() == b.toLowerCase()
true

var city = "amSterDam"
undefined
city.charAt(0)
"a"
city.charAt(1)
"m"
city.slice(1)
"mSterDam"
city.slice(2)
"SterDam"

var city = "amSterDam"
undefined
city.charAt(0).toUpperCase()
"A"
city.slice(1)
"mSterDam"
city.slice(1).toLowerCase()
"msterdam"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"Amsterdam"

var city = "Amsterdam"
undefined
city.slice(1)
"msterdam"
city.slice(2,5)
"ste"
city.slice(2,6)
"ster"
city.slice(6,2)
""
city.slice(2,-1)
"sterda"
city.slice(-2)
"am"
city.slice(-4,-1)
"rda"
city.slice(-1,-4)
""
city.slice(-1,2)
""

var city = "Amsterdam"
undefined
city.slice(0)
"Amsterdam"
city.slice(0,-1)
"Amsterda"
city.slice(1)
"msterdam"
city.slice(0,-1)
"Amsterda"
city.slice(0,-2)
"Amsterd"

var a = "i am learning javascript"
undefined
a.replace('javascript','JS')
"i am learning JS"
var a = "javascript i am learning javascript"
undefined
a.replace('javascript','JS')
"JS i am learning javascript"
a.replace(/javascript/g,'JS')
"JS i am learning JS"


var name = " Bhumika .   "
undefined
name.replace(' ','')
"Bhumika .   "
name.replace(/ /g,'')
"Bhumika."

var a = "Hi "
var b = "javascript"
var c = "code"
a.concat(b,c)

var a = "Hi "
var b = "javascript"
var c = "code"
a.concat(b,c)
"Hi javascriptcode"
b.concat(c,a)
"javascriptcodeHi "
var a = 10
undefined
a.toString()
"10"

