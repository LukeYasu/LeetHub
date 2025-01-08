function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const height = image.length
    const length = image[0].length
    const startingColor = image[sr][sc]
    function recFill(row: number, col: number): void{
        if(row === height || col === length) return;
        if(row < 0 || col < 0) return;
        if(image[row][col] !== startingColor || image[row][col] === color){
            return
        } else {
            image[row][col] = color
            recFill(row - 1, col)
            recFill(row, col + 1)
            recFill(row, col - 1)
            recFill(row + 1, col)
        }
    }
    recFill(sr, sc)
    return image
};