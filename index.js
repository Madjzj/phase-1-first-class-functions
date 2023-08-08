function receivesAFunction(call){
    call()
}
function aNamedFunction(){

}
function returnsANamedFunction(){
    return aNamedFunction
}
function returnsAnAnonymousFunction(){
    return function(){
    }
}