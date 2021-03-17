RegExp(regular expression)

var a = "hi"

^$

var a = "hi"
a.match("^([a-z])$")
null
var a = "hi"
a.match("^([a-z]{2})$")
(2) ["hi", "hi", index: 0, input: "hi", groups: undefined]
var a = "h"
a.match("^([a-z])$")
(2) ["h", "h", index: 0, input: "h", groups: undefined]
var a = "hii"
a.match("^([a-z]{2,5})$")
null


var a = "hii"
a.match("^([a-z]+)$")

var a = "Hii"
a.match("^([A-Za-z]+)$")

var a = "Hii0"
a.match("^([A-Za-z0-9]+)$")

var phone = 5432624634
phone.match("^([0-9]{10})$")
phone.match is not a function

var phone = 5432624634
phone.toString().match("^([0-9]{10})$")
(2) ["5432624634", "5432624634", index: 0, input: "5432624634", groups: undefined]
var phone = 543262463
phone.toString().match("^([0-9]{10})$")
null

var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined]
var email = "aa.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")