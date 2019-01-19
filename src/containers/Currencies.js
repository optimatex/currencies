import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getCurrencies, showAllCurrencies } from "../actions/currenciesActions";
import {
  getCurrenciesList,
  getIsLoadingList,
  getIsFullCurrencies
} from "../selectors/currencies";
import Spinner from "../components/Spinner";
import CurrenciesList from "../components/CurrenciesList";

class Currencies extends Component {
  static propTypes = {
    items: PropTypes.shape({}).isRequired,
    isLoading: PropTypes.bool.isRequired,
    isFullCurrencies: PropTypes.bool.isRequired,
    getCurrencies: PropTypes.func.isRequired,
    showAllCurrencies: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getCurrencies();
    this.authUpdate();
  }

  componentWillUnmount() {
    clearInterval(this.authUpdate);
  }

  // launch autoupdate data every 10 sec.
  authUpdate() {
    this.autoUpdate = setInterval(this.props.getCurrencies, 10 * 1000);
  }

  handleUpdateCurrencies = () => {
    this.props.getCurrencies();
  };

  handleShowMore = () => {
    this.props.showAllCurrencies();
    this.props.getCurrencies();
  };

  render() {
    const { items, isLoading, isFullCurrencies } = this.props;

    return (
      <div className="currencies">
        <div className="currencies__head">
          <h1 className="currencies__title">Currencies</h1>

          <button
            className="currencies__refresh-btn"
            onClick={this.handleUpdateCurrencies}
          >
            <i className="fas fa-sync-alt" />
          </button>
        </div>

        {isLoading ? <Spinner /> : <CurrenciesList items={items} />}

        {!isFullCurrencies && (
          <button
            className="currencies__more-btn"
            onClick={this.handleShowMore}
          >
            <i className="far fa-plus-square" />
            show more
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: getCurrenciesList(state),
  isLoading: getIsLoadingList(state),
  isFullCurrencies: getIsFullCurrencies(state)
});

const mapDispatchToProps = dispatch => ({
  getCurrencies: bindActionCreators(getCurrencies, dispatch),
  showAllCurrencies: bindActionCreators(showAllCurrencies, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Currencies);
