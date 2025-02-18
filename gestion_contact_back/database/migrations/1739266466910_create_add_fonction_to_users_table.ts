import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'add_fonction_to_users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('fonction').defaultTo('user')
    })
  }

  async down() {
    this.schema.table(this.tableName, (table) =>{
      table.dropColumn('fonction')
    } )
  }
}