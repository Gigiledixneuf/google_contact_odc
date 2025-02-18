import Contact from '#models/contact'
import { createcontactValidator } from '#validators/contact'
import type { HttpContext } from '@adonisjs/core/http'

export default class ContactsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return await Contact.all()

  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {

    const data = request.all()
    const validated = await createcontactValidator.validate(data)
    const contact = await Contact.create(validated)

    return contact
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const contact = await Contact.findOrFail(params.id)
    return contact
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ request }: HttpContext) {
    const id = request.param('id')
    const contact = await Contact.findOrFail(id)

    contact.name = request.input('name')
    contact.lastname = request.input('lastname')
    contact.email = request.input('email')
    contact.numero = request.input('numero')
    contact.anniv = request.input('anniv')
    contact.notes = request.input('notes')

    contact.save()

    return {message: 'Contact modifié avec succès'}
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const id = params.id
    const contact = await Contact.findOrFail(id)

    contact.delete()

    return{message: 'Contact supprimé avec succès'}
  }
}