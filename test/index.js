import { LinkedMap } from '../index.js'
import chai, { expect }  from 'chai'

describe('LinkedMap', () => {
  describe('constructor', () => {

    it('should initialize correctly', () => {
      expect(LinkedMap(1).test).to.equal(1)
    })
  })
})