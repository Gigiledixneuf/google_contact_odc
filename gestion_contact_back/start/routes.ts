/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import ContactsController from '#controllers/contacts_controller'
import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})



//route pour la connexion
router.post('login', [UsersController, 'login']).as('connexion') 

//route pour obtenir l'utilisateur authentifier 
router.get('user', async({auth}) => {
  return auth.user
}) 

//route pour la deconnexion
router.post('logout', [UsersController, 'logout'])

 //route pour le controleur contact
 router.resource('contacts', ContactsController)
 //route pour le controleur user
 router.resource('users', UsersController)


// routeur groupe pour gerer les routes à proteger
router.group(() => {
  
 }).use(middleware.auth({guards:['api']}))

 


