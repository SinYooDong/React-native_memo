class Contact{

  constructor(id,name,phonNumber){
    this.id = id;
    this.name = name;
    this.phonNumber = phonNumber;
  }

  setFromObject(ob){
    this.id = id;
    this.name = name;
    this.phonNumber = phonNumber;
  }

  static fromObject(ob){
    let c = new Contact(ob.id,ob.name,ob.phonNumber);
    c.setFromObject(ob);
    return c;
  }

}
module.exports = Contact;
