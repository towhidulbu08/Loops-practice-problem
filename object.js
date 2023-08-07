var shoppingCart={
    mouse: 3,
    book: 4,
    shoes: 6,
    smartWatch:2,
    laptop:1
}
var keys=Object.keys(shoppingCart)
for(var i=0;i<keys.length;i++){
    var propertyName=keys[i]
    var propertyValue=shoppingCart[propertyName]
    //console.log(i, propertyName, propertyValue)
}
for( var propertyName in shoppingCart){
    var propertyValue=shoppingCart[propertyName]
    console.log(i,propertyName,propertyValue)
}