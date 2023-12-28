function testes(){
    return new Promise(function(resolve,reject){
        const erro = true;
        if(erro){
            reject('erro....')
        }else{
            resolve('Problema resolvido')
        }
    })
}
