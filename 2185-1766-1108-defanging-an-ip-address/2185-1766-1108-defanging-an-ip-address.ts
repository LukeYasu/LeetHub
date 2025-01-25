function defangIPaddr(address: string): string {
    let addy = '';
    for(let i = 0; i < address.length; i++){
        if(address[i] === '.'){
            addy += '[.]';
        } else {
            addy += address[i];
        };
    };
    return addy;
};
