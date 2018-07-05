/* global describe, it, before */

import chai from 'chai';
import {Roulette} from '../lib/webpack-library-starter.js';
// import {Roulette} from "../src";

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my Rouletter library', () => {
  before(() => {
    lib = Rouletter;
  });
  // describe('when I need the name', () => {
  //   it('should return the name', () => {
  //     expect(lib.name).to.be.equal('Cat');
  //   });
  // });
});
