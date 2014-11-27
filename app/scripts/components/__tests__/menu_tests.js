/* global jest, describe, it, expect */

'use strict';

jest.dontMock('../filter/filterMenu.jsx');

describe('FilterMenu', function() {
  it('is displayed correctly', function() {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var FilterMenu = require('../filter/filterMenu.jsx');
    var Component = TestUtils.renderIntoDocument(<FilterMenu filterMenuActive={true} />);

    var element = TestUtils.findRenderedDOMComponentWithClass(Component, 'filter-menu active');
    
    expect(element).toBeDefined();
  });

});