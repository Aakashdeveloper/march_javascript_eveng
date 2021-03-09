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