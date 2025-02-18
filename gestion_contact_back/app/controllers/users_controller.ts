import User from '#models/user'
import { updateUserValidator } from '#validators/createuser'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return await User.all()
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const user = await User.create(request.all()) 

    return user 
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return await User.findOrFail(params.id)
    
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ request }: HttpContext) {
     const id = request.param('id')
         const contact = await User.findOrFail(id)
     
         contact.fullName = request.input('fullName')
         contact.email = request.input('email')
         contact.password = request.input('password')
     
         contact.save()
     
         return {message: 'Contact modifié avec succès'}
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const id = params.id
    const contact = await User.findOrFail(id)
    
    contact.delete()
    
    return{message: 'Contact supprimé avec succès'}
  }

  async login({request}: HttpContext) {
    const email = request.input('email')
    const password = request.input('password')

    const userAuth = await User.verifyCredentials(email, password)
    const tokenGenerer =  await User.accessTokens.create(userAuth)

    return {
      user: userAuth,
      token : tokenGenerer
    }
  }

  async logout({auth}:HttpContext){
    const user = auth.getUserOrFail()
    const token = (await auth.authenticate()).currentAccessToken

    await User.accessTokens.delete(user, token?.identifier)

    return {message:"deconnexion effectuée", status:200}
  }
}