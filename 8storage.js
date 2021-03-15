> localStorage
    > Presistent Storage
    > we have remove manully
    > save wrt to browser

    localStorage.setItem('_token___','MyEduToken')
    undefined
    localStorage.getItem('_token___')
    "MyEduToken"
    localStorage.setItem('_token___','MyEduToken')
    undefined
    localStorage.removeItem('_token___')
    undefined
    localStorage.getItem('_token___')
    null

> sessionStorage
    > Non Presistent Storage 
    > remove as soon as you close tab/ remove manully
    > save wrt to tab
    sessionStorage.setItem("_myblock_","3286587 8yc8y4n")
    undefined
    sessionStorage.getItem("_myblock_")
    "3286587 8yc8y4n"
    sessionStorage.removeItem("_myblock_")
    undefined
    

> cookies
    > save wrt to website
    > expire in time
    document.cookie
    "_ga=GA1.2.1880173027.1602255983; city=London; origin=delhi; _gid=GA1.2.419181578.1615557178; _gat_gtag_UA_131256843_1=1"
    document.cookie="mycookies=test; expires=Sat, 13 Feb 2021 01:00:00 UTC"
    "mycookies=test; expires=Sat, 13 Feb 2021 01:00:00 UTC"
    document.cookie="mycookies=test; expires=Sat, 13 March 2021 01:00:00 UTC"
    "mycookies=test; expires=Sat, 13 March 2021 01:00:00 UTC"