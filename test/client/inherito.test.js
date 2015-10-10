/* global it */
/* global describe */
var assert = require('assert');
var expect = require('chai').expect;
var inHerito = require('../../dist/inherito.min');

describe('hooks', function() {

  before('some description', function() {
    console.log('What inherito returns when called: ', inHerito);
  });

  describe('inHerito', function() {
    
    describe('constructor', function() {
      it('should return a new object with the correct semantic inheritance', function() {
        expect(inHerito).to.be.a('object');
      });
    });
    
    describe('create method', function() {
      it('Should be a method', function() {
        // expect(Driver).to.be.a('object');
      });
    });
      
  });
});