import { Injectable } from '@angular/core';
import { UserApi, UserApiLogin } from '../models/user-api';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: UserApi[] = [];

  async allUserApi(): Promise<UserApi[]> {
    let rep = await fetch('http://localhost:3333/users', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
      // headers : {"authorization" : "Bearer " + localStorage.getItem("token")}
      }).then(res => res.json())
    return rep
  } 

  getOneUserApi(id: number):UserApi | undefined {
    return this.users.find(user => user.id == id)
  }

  async destroyUserApi(id: number):Promise<{id:number}>{
    let rep  = await fetch('http://localhost:3333/users/' + id ,{
               method:"DELETE"
               }).then(res=>res.json())
        return rep
  }

  async storeUserApi(emailParam : string, fullNameParam : string, passwordParam: string, fonctionParam : string): Promise<UserApi>{
    const user = {
      email : emailParam,
      fullName : fullNameParam,
      password : passwordParam,
      fonction : fonctionParam
    }

    let rep =  await fetch('http://localhost:3333/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(reponse => reponse.json())
    return rep 

  }

  async updateUserApi(id:number, emailParam : string, fullNameParam : string, passwordParam: string): Promise<UserApi>{
    const index = this.users.findIndex(user => user.id == id) //Pour trouver l'index de l'id. Pour un tableau qui contient des objets, il faut utiliser findIndex et un tableau simple il faut utiliser indexof

    const user = {
      email : emailParam,
      fullName : fullNameParam,
      password : passwordParam
    }

    let rep = await fetch('http://localhost:3333/users/' + id, {
              method: 'PUT',
              body: JSON.stringify(user),
              headers: {
                'Content-Type': 'application/json'
              }
            })
            .then(reponse => reponse.json())
        return rep 
        
  }


  async loginApi(emailParam : string, passwordParam : string): Promise<UserApiLogin>{
    const user = {
      email : emailParam,
      password : passwordParam
    }

    let rep =  await fetch('http://localhost:3333/login', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {'Content-Type':'application/json'}
              })
              .then(reponse => reponse.json())
        return rep 

  }

  async deconnexion(){
    let rep = await fetch('http://localhost:3333/deconnexion', {
      method : "POST",
      headers : {"authorization":"Bearer " + localStorage.getItem('token')}
    }).then((res => res.json()))

    return rep
  }

}
