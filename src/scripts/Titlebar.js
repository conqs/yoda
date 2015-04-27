'use strict';

import React from 'react';
import Remote from 'remote';

let Search = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    var query = React.findDOMNode(this.refs.searchInput).value.trim();
    console.log(query);
  },

  render() {
    return (
      <div className="searchbar">
        <form className="searchform" onSubmit={this.handleSubmit}>
          <span className="icon icon-search"></span>
          <input type="search" ref="searchInput" className="form-control" placeholder="Search youtube videos here" autoComplete="on" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
});

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  handleClose() {
    Remote.getCurrentWindow().hide();
  },

  handleMinimize() {
    Remote.getCurrentWindow().minimize();
  },

  handleGoBack(e) {
    e.preventDefault();
    this.context.router.goBack();
  },

  render() {
    return (
      <div className="titlebar no-drag">
        <div className="buttons-container">
          <div className="buttons">
            <div className="button button-close enabled" onClick={this.handleClose}></div>
            <div className="button button-minimize enabled" onClick={this.handleMinimize}></div>
            <div className="button button-fullscreenclose disabled"></div>
          </div>
        </div>
        <div className="header-container">
          <div className="history">
            <a href="#" onClick={this.handleGoBack}><span className="icon icon-left"></span></a>
            <a href="#"><span className="icon icon-right"></span></a>
          </div>
          <div className="header">
            <span>Youdown</span>
          </div>
          <Search />
        </div>
      </div>
    );
  }
});