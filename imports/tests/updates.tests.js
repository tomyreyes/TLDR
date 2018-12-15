import { Meteor } from 'meteor/meteor'
import { Random } from 'meteor/random'
import { assert } from 'chai'

import { Updates } from '../api/updates.js'

if (Meteor.isServer) {
  describe('Updates', () => {
    describe('methods', () => {
      beforeEach(() => {
        Updates.remove({})
        updateId = Updates.insert({
          text: 'test update',
          createdAt: new Date()
        })
      })
      console.log('hi')

      it('task can be deleted with method', () => {
        const deleteUpdate = Meteor.server.method_handlers['update.remove']

        // Set up a fake method invocation that looks like what the method expects
        const invocation = { text: 'test update' }

        // Run the method with `this` set to the fake invocation
        deleteUpdate.apply(invocation, [updateId])

        // Verify that the method does what we expected
        assert.equal(Updates.find().count(), 0)
      })
    })
  })
}
