// Write an application which performs Addition and Substraction of 2 numbers

// Kay karaycha ahe? (Methods)  -> Addition & Substraction

// Te karayla kay lagnar ahe? (Data)    -> 2 numbers

class Arithematic
{
    // Data / Characteristics
    public No1 : number;
    public No2 : number;

    public constructor(A : number, B : number)
    {
        this.No1 = A;
        this.No2 = B;
    }

    public Addition() : number
    {
        return (this.No1 + this.No2);
    }

    public Substraction() : number
    {
        return (this.No1 - this.No2);
    }
}
var Obj1 = new Arithematic(11,10);
var Obj2 = new Arithematic(21,15);

var Ret : number = 0;

Ret = Obj1.Addition();
console.log("Addition of obj1 : "+Ret);     //21

Ret = Obj1.Substraction();
console.log("Substraction of obj1 : "+Ret);     //1

Ret = Obj2.Addition();
console.log("Addition of obj2 : "+Ret);     //36

Ret = Obj2.Substraction();
console.log("Substraction of obj2 : "+Ret);     //6