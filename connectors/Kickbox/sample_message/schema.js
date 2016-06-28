/*
* Message schema
*
* Documentation: https://github.com/trayio/falafel#schema
*/

module.exports = {

  input: {

    api_key: {
      type: 'string',
      advanced: true,
      required: true,
      defaultJsonPath: '$.auth.api_key'  
    }

  }

};