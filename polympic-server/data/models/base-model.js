module.exports = class BaseModel {
  constructor(name, schema, value = []) {
    if (!name) {
      throw new Error('You must provide a name in constructor of BaseModel');
    }
    if (!schema) {
      throw new Error('You must provide a table creation schema in constructor of BaseModel');
    }
    this.name = name;
    this.schema = schema;
    this.value = value;
  }

  up(knex) {
    return knex.schema
      .createTable(this.name, this.schema)
      .then(() => console.log(this.name + ' Table created'))
      .catch(e => {
        console.log('There was an error with the ' + this.name + ' table');
        console.log(e);
      });
  }

  down(knex) {
    return knex.schema
      .dropTable(this.name, this.schema)
      .then(() => console.log(this.name + ' table deleted'))
      .catch(e => {
        console.log('There was an error deleting ' + this.name + ' table');
        console.log(e);
      });
  }

  del(knex) {
    return knex(this.name)
      .del()
      .then(() => console.log('Values deleted in table ' + this.name))
      .catch(e => {
        console.log('There was an error deleting ' + this.name + ' values');
        console.log(e);
      });
  }

  seed(knex) {
    return knex(this.name)
      .then(() => knex(this.name).insert(this.value))
      .then(() => console.log('Values inserted in table ' + this.name))
      .catch(e => {
        console.log('There was an error seeding ' + this.name + ' table');
        console.log(e);
      });
  }
};
