export {};

const a:number =10;
const b:number =20;
const myName:string = "Long";
const sinhVien :object = {};
type SinhVien = {
    id:number,
    name : string,
}
type giangVien = {
    khoa : string,
}
type Person = SinhVien | giangVien;
const addSinhVien = <T extends SinhVien> (sinhVien : T[]) =>{
    const data = sinhVien.map(item => `<div> <h1>sinhVien.name</h1> </div>`)
}
const listSv :SinhVien[] =[{id:1,name:"Long"},{id:2,name: "Thanh"}];
addSinhVien([{id: 1, name: "Long"},{id: 2 ,name: "Thanh"}]);