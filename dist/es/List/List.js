import _extends from 'babel-runtime/helpers/extends';
import _Object$getOwnPropertyDescriptor from 'babel-runtime/core-js/object/get-own-property-descriptor';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var babelPluginFlowReactPropTypes_proptype_Scroll = require('../Grid').babelPluginFlowReactPropTypes_proptype_Scroll || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_CellRendererParams = require('../Grid').babelPluginFlowReactPropTypes_proptype_CellRendererParams || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_RenderedSection = require('../Grid').babelPluginFlowReactPropTypes_proptype_RenderedSection || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter = require('../Grid').babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_CellPosition = require('../Grid').babelPluginFlowReactPropTypes_proptype_CellPosition || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_CellSize = require('../Grid').babelPluginFlowReactPropTypes_proptype_CellSize || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_Alignment = require('../Grid').babelPluginFlowReactPropTypes_proptype_Alignment || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_NoContentRenderer = require('../Grid').babelPluginFlowReactPropTypes_proptype_NoContentRenderer || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_Scroll = require('./types').babelPluginFlowReactPropTypes_proptype_Scroll || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_RenderedRows = require('./types').babelPluginFlowReactPropTypes_proptype_RenderedRows || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_RowRenderer = require('./types').babelPluginFlowReactPropTypes_proptype_RowRenderer || require('prop-types').any;

import Grid, { accessibilityOverscanIndicesGetter } from '../Grid';
import React from 'react';

var babelPluginFlowReactPropTypes_proptype_ElementRef = require('react').babelPluginFlowReactPropTypes_proptype_ElementRef || require('prop-types').any;

import cn from 'classnames';

/**
 * It is inefficient to create and manage a large list of DOM elements within a scrolling container
 * if only a few of those elements are visible. The primary purpose of this component is to improve
 * performance by only rendering the DOM nodes that a user is able to see based on their current
 * scroll position.
 *
 * This component renders a virtualized list of elements with either fixed or dynamic heights.
 */

var List = function (_React$PureComponent) {
  _inherits(List, _React$PureComponent);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || _Object$getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _this._cellRenderer = function (_ref2) {
      var parent = _ref2.parent,
          rowIndex = _ref2.rowIndex,
          style = _ref2.style,
          isScrolling = _ref2.isScrolling,
          isVisible = _ref2.isVisible,
          key = _ref2.key;
      var rowRenderer = _this.props.rowRenderer;

      // TRICKY The style object is sometimes cached by Grid.
      // This prevents new style objects from bypassing shallowCompare().
      // However as of React 16, style props are auto-frozen (at least in dev mode)
      // Check to make sure we can still modify the style before proceeding.
      // https://github.com/facebook/react/commit/977357765b44af8ff0cfea327866861073095c12#commitcomment-20648713

      var _Object$getOwnPropert = _Object$getOwnPropertyDescriptor(style, 'width'),
          writable = _Object$getOwnPropert.writable;

      if (writable) {
        // By default, List cells should be 100% width.
        // This prevents them from flowing under a scrollbar (if present).
        style.width = '100%';
      }

      return rowRenderer({
        index: rowIndex,
        style: style,
        isScrolling: isScrolling,
        isVisible: isVisible,
        key: key,
        parent: parent
      });
    }, _this._setRef = function (ref) {
      _this.Grid = ref;
    }, _this._onScroll = function (_ref3) {
      var clientHeight = _ref3.clientHeight,
          scrollHeight = _ref3.scrollHeight,
          scrollTop = _ref3.scrollTop;
      var onScroll = _this.props.onScroll;


      onScroll({ clientHeight: clientHeight, scrollHeight: scrollHeight, scrollTop: scrollTop });
    }, _this._onSectionRendered = function (_ref4) {
      var rowOverscanStartIndex = _ref4.rowOverscanStartIndex,
          rowOverscanStopIndex = _ref4.rowOverscanStopIndex,
          rowStartIndex = _ref4.rowStartIndex,
          rowStopIndex = _ref4.rowStopIndex;
      var onRowsRendered = _this.props.onRowsRendered;


      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(List, [{
    key: 'forceUpdateGrid',
    value: function forceUpdateGrid() {
      if (this.Grid) {
        this.Grid.forceUpdate();
      }
    }

    /** See Grid#getOffsetForCell */

  }, {
    key: 'getOffsetForRow',
    value: function getOffsetForRow(_ref5) {
      var alignment = _ref5.alignment,
          index = _ref5.index;

      if (this.Grid) {
        var _Grid$getOffsetForCel = this.Grid.getOffsetForCell({
          alignment: alignment,
          rowIndex: index,
          columnIndex: 0
        }),
            _scrollTop = _Grid$getOffsetForCel.scrollTop;

        return _scrollTop;
      }
      return 0;
    }

    /** CellMeasurer compatibility */

  }, {
    key: 'invalidateCellSizeAfterRender',
    value: function invalidateCellSizeAfterRender(_ref6) {
      var columnIndex = _ref6.columnIndex,
          rowIndex = _ref6.rowIndex;

      if (this.Grid) {
        this.Grid.invalidateCellSizeAfterRender({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }

    /** See Grid#measureAllCells */

  }, {
    key: 'measureAllRows',
    value: function measureAllRows() {
      if (this.Grid) {
        this.Grid.measureAllCells();
      }
    }

    /** CellMeasurer compatibility */

  }, {
    key: 'recomputeGridSize',
    value: function recomputeGridSize() {
      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref7$columnIndex = _ref7.columnIndex,
          columnIndex = _ref7$columnIndex === undefined ? 0 : _ref7$columnIndex,
          _ref7$rowIndex = _ref7.rowIndex,
          rowIndex = _ref7$rowIndex === undefined ? 0 : _ref7$rowIndex;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }

    /** See Grid#recomputeGridSize */

  }, {
    key: 'recomputeRowHeights',
    value: function recomputeRowHeights() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: index,
          columnIndex: 0
        });
      }
    }

    /** See Grid#scrollToPosition */

  }, {
    key: 'scrollToPosition',
    value: function scrollToPosition() {
      var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToPosition({ scrollTop: scrollTop });
      }
    }

    /** See Grid#scrollToCell */

  }, {
    key: 'scrollToRow',
    value: function scrollToRow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToCell({
          columnIndex: 0,
          rowIndex: index
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          noRowsRenderer = _props.noRowsRenderer,
          scrollToIndex = _props.scrollToIndex,
          width = _props.width;


      var classNames = cn('ReactVirtualized__List', className);

      return React.createElement(Grid, _extends({}, this.props, {
        autoContainerWidth: true,
        cellRenderer: this._cellRenderer,
        className: classNames,
        columnWidth: width,
        columnCount: 1,
        noContentRenderer: noRowsRenderer,
        onScroll: this._onScroll,
        onSectionRendered: this._onSectionRendered,
        ref: this._setRef,
        scrollToRow: scrollToIndex
      }));
    }
  }]);

  return List;
}(React.PureComponent);

List.defaultProps = {
  autoHeight: false,
  estimatedRowSize: 30,
  onScroll: function onScroll() {},
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {},
  overscanIndicesGetter: accessibilityOverscanIndicesGetter,
  overscanRowCount: 10,
  scrollToAlignment: 'auto',
  scrollToIndex: -1,
  style: {}
};
List.propTypes = process.env.NODE_ENV === 'production' ? null : {
  "aria-label": require('prop-types').string,


  /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */
  autoHeight: require('prop-types').bool.isRequired,


  /** Optional CSS class name */
  className: require('prop-types').string,


  /**
   * Used to estimate the total height of a List before all of its rows have actually been measured.
   * The estimated total height is adjusted as rows are rendered.
   */
  estimatedRowSize: require('prop-types').number.isRequired,


  /** Height constraint for list (determines how many actual rows are rendered) */
  height: require('prop-types').number.isRequired,


  /** Optional renderer to be used in place of rows when rowCount is 0 */
  noRowsRenderer: typeof babelPluginFlowReactPropTypes_proptype_NoContentRenderer === 'function' ? babelPluginFlowReactPropTypes_proptype_NoContentRenderer.isRequired ? babelPluginFlowReactPropTypes_proptype_NoContentRenderer.isRequired : babelPluginFlowReactPropTypes_proptype_NoContentRenderer : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_NoContentRenderer).isRequired,


  /** Callback invoked with information about the slice of rows that were just rendered.  */

  onRowsRendered: require('prop-types').func.isRequired,


  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   */
  onScroll: require('prop-types').func.isRequired,


  /** See Grid#overscanIndicesGetter */
  overscanIndicesGetter: typeof babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter === 'function' ? babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter.isRequired ? babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter.isRequired : babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_OverscanIndicesGetter).isRequired,


  /**
   * Number of rows to render above/below the visible bounds of the list.
   * These rows can help for smoother scrolling on touch devices.
   */
  overscanRowCount: require('prop-types').number.isRequired,


  /** Either a fixed row height (number) or a function that returns the height of a row given its index.  */
  rowHeight: typeof babelPluginFlowReactPropTypes_proptype_CellSize === 'function' ? babelPluginFlowReactPropTypes_proptype_CellSize.isRequired ? babelPluginFlowReactPropTypes_proptype_CellSize.isRequired : babelPluginFlowReactPropTypes_proptype_CellSize : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_CellSize).isRequired,


  /** Responsible for rendering a row given an index; ({ index: number }): node */
  rowRenderer: typeof babelPluginFlowReactPropTypes_proptype_RowRenderer === 'function' ? babelPluginFlowReactPropTypes_proptype_RowRenderer.isRequired ? babelPluginFlowReactPropTypes_proptype_RowRenderer.isRequired : babelPluginFlowReactPropTypes_proptype_RowRenderer : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_RowRenderer).isRequired,


  /** Number of rows in list. */
  rowCount: require('prop-types').number.isRequired,


  /** See Grid#scrollToAlignment */
  scrollToAlignment: typeof babelPluginFlowReactPropTypes_proptype_Alignment === 'function' ? babelPluginFlowReactPropTypes_proptype_Alignment.isRequired ? babelPluginFlowReactPropTypes_proptype_Alignment.isRequired : babelPluginFlowReactPropTypes_proptype_Alignment : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Alignment).isRequired,


  /** Row index to ensure visible (by forcefully scrolling if necessary) */
  scrollToIndex: require('prop-types').number.isRequired,


  /** Vertical offset. */
  scrollTop: require('prop-types').number,


  /** Optional inline style */
  style: require('prop-types').object.isRequired,


  /** Tab index for focus */
  tabIndex: require('prop-types').number,


  /** Width of list */
  width: require('prop-types').number.isRequired
};
export default List;