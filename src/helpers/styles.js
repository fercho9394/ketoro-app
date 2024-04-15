
export const FunColorBody = (param) => {
    switch(param){
        case 'Ketoro':
            return document.body.style = 'background: #181826;';
        case 'W':
            return document.body.style = 'background: #fff;';
        default:
            return document.body.style = 'background: #fff;';
    }
}