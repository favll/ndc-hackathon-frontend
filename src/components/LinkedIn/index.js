import React from "react";
import getURL from "./getURL";
import getQueryParameter from "./getQueryParameter";
import reset from "./reset";
/* global localStorage */

export default class LinkedIn extends React.Component {
  constructor(props) {
    super(props);
    this.start = this.start.bind(this);
    this.restart = this.restart.bind(this);
  }

  componentDidMount() {
    this.restart();
  }

  start() {
    const state = Math.random()
      .toString(36)
      .substring(7);
    const clientId = this.props.clientId;
    const scope = this.props.scope;
    localStorage.linkedInReactLogin = state;
    localStorage.linkedInReactLoginRedirectUri =
      "http://localhost:3000/linkedin/callback"; //window.location.href;
    window.location.href = getURL({ clientId, state, scope });
  }

  restart() {
    const state = localStorage.linkedInReactLogin;
    const redirectUri = localStorage.linkedInReactLoginRedirectUri;
    if (!redirectUri) return;
    if (!state) return;
    if (state !== getQueryParameter("state")) return;
    if (!getQueryParameter("code")) return;
    const code = getQueryParameter("code");
    reset();
    this.props.callback({ code, redirectUri });
  }

  render() {
    return (
      <button className={this.props.className} onClick={this.start}>
        {this.props.text}
      </button>
    );
  }
}
