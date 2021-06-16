export class Catagory{
housing:Housing=new Housing();
travel:Travel=new Travel();
food:Food=new Food();
products:Products=new Products();
services:Services=new Services();
}

export class Housing
{
    electricity:number=0;
    naturalGas:number=0;
    fuelOil:number=0;
    lPG:number=0;
    waste:number=0;
    water:number=0;
}
export class Travel
{
    vehicle:number=0;
    bus:number=0;
    metro:number=0;
    taxi:number=0;
    rail:number=0;
    flying:number=0;
}

export class Food
{
    redMeat:number=0;
    whiteMeat:number=0;
    dairy:number=0;
    cereals:number=0;
    vegetables:number=0;
    fruit:number=0;
    oils:number=0;
    snacks:number=0;
    drinks:number=0;
}

export class Products
{
    electronics:number=0;
    household:number=0;
    clothes:number=0;
    medical:number=0;
    recreational:number=0;
    other:number=0;
}

export class Services
{
    health:number=0;
    finance:number=0;
    recreation:number=0;
    education:number=0;
    communications:number=0;
    other:number=0;
}