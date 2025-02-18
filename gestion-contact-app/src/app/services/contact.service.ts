import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  
  //Stockage de données dans le service ArticleService
    contacts: Contact[] = []
  
  // Création de la function getOne
    getOne(id: number):Contact | undefined {
    return this.contacts.find(contact => contact.id == id)
    }
  
  
    //Affichage avec fetch pour les api
    async all():Promise<Contact[]>{
      let rep = await fetch('http://localhost:3333/contacts', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
        // headers : {"authorization" : "Bearer " + localStorage.getItem("token")}
        }) .then(res => res.json())
        
      return rep 
      
    }
  
    //Création de la function store pour l'insertion avec Apis
    // Insertion avec fetch api
    async storeContactApi(nameParam:string, lastnameParam : string, emailParam: string, numeroParam : string, annivParam : string, notesParam : string , user_emailParam : string ):Promise<Contact>{
      const contact = {
        name: nameParam,
        lastname: lastnameParam,
        email: emailParam,
        numero: numeroParam,
        anniv: annivParam,
        notes: notesParam,
        user_email : user_emailParam
      }
  
      let rep =  await fetch('http://localhost:3333/contacts', {
                method: 'POST',
                body: JSON.stringify(contact),
                headers: {
                  'Content-Type': 'application/json'
                }
              })
              .then(reponse => reponse.json())
      return rep 
    }
  // Modification avec fetch api
    async updateContactAPi(id: number, nameParam:string, lastnameParam : string, emailParam: string, numeroParam : string, annivParam : string, notesParam : string ):Promise<Contact>{
      const index = this.contacts.findIndex(contact => contact.id == id) //Pour trouver l'index de l'id. Pour un tableau qui contient des objets, il faut utiliser findIndex et un tableau simple il faut utiliser indexof
  
      const contact = {
        name : nameParam,
        lastname : lastnameParam, 
        email: emailParam,
        numero : numeroParam,
        anniv : annivParam,
        notes : notesParam,
        
      }
  
      let rep = await fetch('http://localhost:3333/contacts/' + id, {
                method: 'PUT',
                body: JSON.stringify(contact),
                headers: {
                  'Content-Type': 'application/json'
                }
              })
              .then(reponse => reponse.json())
          return rep 
      
    }
  // Suppression avec fetch api
    async destroyContactApi(id: number):Promise<{id:number}>{
  
      let rep  = await fetch('http://localhost:3333/contacts/' + id ,{
                 method:"DELETE"
                 }).then(res=>res.json())
          return rep
    }
  
}
