// @flow

import type {Element as ReactElement} from 'react';

export type RowRendererParams = {
  index: number,
  isScrolling: boolean,
  isVisible: boolean,
  key: string,
  parent: Object,
  style: Object,
};

export type RowRenderer = (params: RowRendererParams) => ReactElement<*>;

export type RenderedRows = {
  overscanStartIndex: number,
  overscanStopIndex: number,
  startIndex: number,
  stopIndex: number,
};

export type Scroll = {
  clientHeight: number,
  scrollHeight: number,
  scrollTop: number,
};
