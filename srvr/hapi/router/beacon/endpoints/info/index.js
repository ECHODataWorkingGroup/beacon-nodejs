import mongoose from 'mongoose'
import { beaconInfoResponseSchema } from '../../../../../../schema/mongoose/beacon/framework/responses/beaconInfoResponse.js'

const getBeaconInfoResponse = async function(req){

  // use existing mongoose / mongodb connection
  const mdb = req.server.plugins.BeaconRouter.mdb
  
  // use existing model; or create one if not found in this connection 
  var beaconInfoResponseModel = mdb.models['beaconInfoResponseModel']
  if ( ! beaconInfoResponseModel ){
    // possible bug in Schema; have to pass in 'beaconInfoResponseSchema.options.collection'
    beaconInfoResponseModel = mdb.model('beaconInfoResponseModel', beaconInfoResponseSchema, beaconInfoResponseSchema.options.collection) 
  }

  // find existing config; first one that returns is fine, as this is a single beacon server
  var infoDoc = await beaconInfoResponseModel.findOne({}) //, { _id: false })

  // if not, create a new model, and save
  // and fetch; this is for testing / my learning
  if( !infoDoc ){
    infoDoc = new beaconInfoResponseModel()
    infoDoc.save() // .then( doc => { return doc } )
    // infoDoc = await beaconInfoResponseModel.findOne({})
  }else{
    // aggregate test in prep for POSTs, etc...
    //console.log( await beaconInfoResponseModel.aggregate([ { $match: { _id: infoDoc._id } }, { $set: { x: 'xxx' } }, { $merge: { into: beaconInfoResponseSchema.options.collection, on: '_id' } } ] ))

    // const extendedBeaconInfoResponseSchema = beaconInfoResponseSchema.add( { x: {type: String }, default: 'xxx' } )
    // console.log( await beaconInfoResponseModel.updateOne( { _id: infoDoc._id }, { "response.id": "newField" } ) )
    //
    // infoDoc.response.x = 'xxx' 
    // infoDoc.save()

  }

  return JSON.stringify( infoDoc )
  
}

const beaconInfoResponseRouteHandler = async function( req, res ){
	if(req.method == "get"){
    return res.response( await getBeaconInfoResponse(req) )
  }else{  
    //post?
    // updateDB
    return res.response( {} )
  }
}

const beaconInfoResponseRoute = { 
      method:  ['GET','POST'],
      path:    '/info',
      handler: beaconInfoResponseRouteHandler
}

export { beaconInfoResponseRoute, beaconInfoResponseSchema }


