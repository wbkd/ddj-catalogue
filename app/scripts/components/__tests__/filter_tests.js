/* global jest, describe, it, expect */

'use strict';

jest.dontMock('../filter/filter.jsx');

describe('Filter', function() {
  it('sets the class name according to its properties', function() {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;

    var Filter = require('../filter/filter.jsx');
    var Component = TestUtils.renderIntoDocument(<Filter checked={true} />);

    var element = TestUtils.findRenderedDOMComponentWithClass(Component, 'active');
    expect(element).toBeDefined();

    expect(element.getDOMNode().className).toEqual('filter active');
  });

});