import HapiBasic from '@hapi/basic'
import * as Hoek from '@hapi/hoek'
import Boom from '@hapi/boom' 
import Joi from 'joi'
import { StatusCode } from 'status-code-enum'
import bcrypt from 'bcrypt'
import Path from 'path'
import {inspect} from 'util'

import { fileURLToPath } from 'url';
const __dirname = Path.dirname(fileURLToPath(import.meta.url));

const BeaconAuth = {

  pkg: {
    name: 'BeaconAuth',
    version: '0.1.0'
  },

  register: async function (server, options) {

    console.log("Registering: BeaconAuth")
    console.log("realm: " + inspect(server))
    // console.log("mdb: " + inspect(server.plugins.BeaconRouter.mdb))
    
    // register hapi basic auth plugin, and/or others perhaps, depending on node.ENV / config, etc...
    await server.register(HapiBasic);

    // basic auth structure for development; migrate to file, db, or turnkey solution
    // initially a simple user/pass combo + jwt / iana nomenclature: https://www.iana.org/assignments/jwt/jwt.xhtml
    // this so it can provide authN + authZ data 
    // to follow the beacon reference implementation would be to eventually align oauth scopes and beacon granularities
    // clients MIGHT need secret keys handing out + config stage.
    const authDb = {
      clients: [ 
                 { 
                   client_id: 900, 
                   client_name: "BioInst1", 
                   client_secret: "c20fd1ae-8eb8-49d3-9a17-56c617546616", // uuid returned as jti (jwt id) 
                   // remote address
                   // X-Forwarded-For
                   // X-Real-Ip
                   ips_allowed: [ "10.10.10.1/32", "127.0.0.1/24", "10.128.0.0/24" ]
                 }
     ],

      users: [
               { 
                 uid: 1000,
                 gid: 1000,
                 client_id: 900,
                 given_name:     "Biolo",
                 family_name:    "Gist",
                 email:          "null@dev.null",
                 email_verified: true,
                 user:           "bgist",
                 pass:           "$2b$12$O9oo7dWbDgAPikRY8gAogeh7TRJ9ZctihsckEBKwVUexoGfjsAW1K", // foo
               }
             ]
    };

    const validateCreds = async (req, user, pass, res) => {
      if( Hoek.contain(authDb.users, { "user": user }, { deep: true, part: true } ) ){

        // switch over to node-argon2id
        const bpass = await bcrypt.compare(pass, authDb.users[0].pass );
        if ( bpass ){
          return { isValid: true, credentials: { jwt: "jwtoken" } }
        }
        
      }
      return { isValid: false }  
    } 

    server.auth.strategy('basic', 'basic', { validate: validateCreds });
    server.auth.default('basic');

    server.route({
      method:  ['POST'], // GET for testing
      path:    '/auth/signup',
      handler: function( req, res ) {
        //return res.response("You betcha...! Just fill in the fields: " + req.auth)
        console.log(req.payload)
        return req.payload
      },
      options: {
        auth: false,  
        validate: {
          options: {
            abortEarly: false
          },
          payload: Joi.object({
            user:  Joi.string().min(4).max(9),
            email: Joi.string().email({
              tlds: false // for testing only
            }).required() 
          }),
          failAction: async function (req, res, err) {
            console.log(err.details)
            return Boom.badRequest("srx: " + err.output.payload.message)
          }
        }
      }
    })

    // authN
    server.route({
      method: ['post','get'],
      path: '/auth/login',
      options: { 
        auth: false
      },      
      handler: function( req, res ) {
          console.log(req.auth)
          return res.response("AuthN Not Required To Login...");
      }
    })

    server.route({
      method: ['post','get'],
      path: '/scope',
      options: {
        auth: {
          strategies: ['basic'],
          mode: 'required',
          payload: false
        }
      },
      handler: function( req, res ) {
          console.log(req.auth)
          return res.response("AuthN Success: just because it's you");
      }
    })
  }
};

export { BeaconAuth };