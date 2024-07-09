let a = 10;
console.log(a.toFixed(2));
// a.slice(0, 1); มันรู้ว่า number ไม่ควรมี function slive
let b: number; 
// b = "SCKagura";
/* Types by inference สร้างมาแล้วมันร฿้อยู่แล้ว  Types by inference
TypeScript knows the JavaScript language and will generate types for you in many cases.
Type by specification
We define it ourselves.
Keywords type, interface */

const user1 = {
    name: "SCKagura",
    id: 0 ,
}

// user.name = 20;

interface User1{
    name: string;
    id: number; 
}

const user2: User = {
    name: "SCKagura",
    id: 650612088,
    // food:"Pizza" ,
}
type User3 = {
    name: string; 
    id: number; 
}