
function Addition(Arr : number[]) : number
{
    var Sum : number = 0
    var Cnt : number = 0

    for(Cnt = 0; Cnt < Arr.length; Cnt++)
    {
        Sum = Sum + Arr[Cnt]
    }
    return Sum
}

var Week : number[] = [10,20,30,40,50]

var Ret : number = 0

Ret = Addition(Week)

console.log("Addition is : "+Ret)