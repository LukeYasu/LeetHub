function defangIPaddr(address: string): string {
    let addy = '';
    for(let i = 0; i < address.length; i++){
        addy += address[i] === '.' ? '[.]' : address[i];
    };
    return addy;
};
