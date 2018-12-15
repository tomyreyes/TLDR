import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check'

//Methods should be defined in code that is executed on the client and the server - we will discuss this a bit later in the section titled Optimistic UI.
//See https://www.meteor.com/tutorials/react/security-with-methods section Optimistic UI

export const Updates = new Mongo.Collection('updates')

Meteor.methods({
  'updates.insert'(text) {
    check(text, String)

    Updates.insert({
      text,
      createdAt: new Date()
    })
  },
  'updates.remove'(updateId) {
    check(updateId, String)

    Updates.remove(updateId)
  }
})
