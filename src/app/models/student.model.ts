export class Student {
  Id: number;
  Name: string;
  Email: string;
  Phone: string;
  Address: string
  RegisterDate: Date
  constructor(student: {
    Id? : number;
    Name? : string;
    Email? : string;
    Phone? : string;
    Address? : string
    RegisterDate? : Date
  }){
    if(student){
      this.Id = student.Id;
      this.Name = student.Name;
      this.Email = student.Email;
      this.Phone = student.Phone;
      this.Address = student.Address;
      this.RegisterDate = student.RegisterDate
    }
  }
}
