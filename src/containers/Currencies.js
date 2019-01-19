import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getCurrencies } from "../actions/currenciesActions";
import { getCurrenciesList } from "../selectors/currencies";
import CurrenciesList from "../components/CurrenciesList";

class Currencies extends Component {
  static propTypes = {
    items: PropTypes.shape({}),
    getCurrencies: PropTypes.func
  };

  componentDidMount() {
    this.props.getCurrencies();
  }

  render() {
    const { items } = this.props;
    console.log("%c items", "color: #0087d4", items);
    return (
      <div className="currencies">
        <h1 className="currencies__title">Currencies dashboard</h1>

        <CurrenciesList items={items} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: getCurrenciesList(state)
});

const mapDispatchToProps = dispatch => ({
  getCurrencies: bindActionCreators(getCurrencies, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Currencies);
