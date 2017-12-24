let minID : number = 100000000;
let maxID : number = 999999999;

export namespace Utility {

    export function getPercentage(amount : number, total: number ) :number {
        return parseInt(((amount/total) * 100).toFixed(3));
    }

    export function randomInt(range : number) : number {
        return Math.floor(Math.random() * range);
    }

    export function random(list : Array<any>) : any {
        return list[Utility.randomInt(list.length)]
    }

    export function generateID() : number {
        return Math.floor(Math.random() * (maxID - minID + 1)) + minID;
    }
}




console.log(Utility.generateID());
