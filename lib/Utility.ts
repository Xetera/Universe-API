export namespace Utility {
    export function getPercentage(amount : number, total: number ) :number {
        return parseInt(((amount/total) * 100).toFixed(3));
    }
}





