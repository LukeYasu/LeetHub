function flipAndInvertImage(image: number[][]): number[][] {
    for(let i = 0; i < image.length; i++){
        let curRow = []
        for(let x = image[i].length - 1; x >= 0; x--){
            if(image[i][x] === 0){
                image[i][x] = 1;
                curRow.push(1)
            } else {
                curRow.push(0);
            };
        };
        image[i] = curRow
    };
    return image;
};