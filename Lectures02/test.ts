//customtype

interface Post{
    title: string;
    text?: string; 

}




interface User2{
    id: number;
    name: string; 
    isActive: boolean;
    phone: string | number | null | undefined;
    website?: string;  //This is optional ไมา่จำเป็นต้องประกาศ
    role: "ADMIN" | "USER";
    foods: string[];
    posts: Post[];
    greet: () => void;  //function ที่ไม่รับอะไรเลย ไม่ปล่อยอะไรเลย

}
const user3: User2 = {
    id: 0,
    name: "SCKagura",
    isActive:true ,
    phone: null,  //ประกาศใน field ด้วย
    role: "ADMIN",
    foods: ["Pizza", "Rice"],
    posts: [],
    greet: () => { console.log("HelloWorld");},
    
    
}

user3.posts.push({
    title: "Title1",
    text:"Hello World" ,
})

const d = [1, 2, 3, 4]; 
// console.log(d[4]);    undefined

console.log(d);




function sumNumber1(a:number, b:number) {
    return a + b;
}

function sumNumber2(a:any, b:any) {  //ประกกาศงี้ไม่ดี
    return a + b;
}
function sumNumber3(a, b) {  //อันเดียวกันับ 54
    return a + b;
}
function sumNumber4(a: number | null | undefined, b: number) {  
    if (!a) {  //ทำ guard 
        return;
    }
    return a + b;
}


interface BackPack<Type> { 
    add: (obj: Type) => void;
    get: () => Type; 
}

const backpack: BackPack<string> = {
    add: (a) => (),
    get: () => "ao0dj"
}

const backpack1:BackPack<string>