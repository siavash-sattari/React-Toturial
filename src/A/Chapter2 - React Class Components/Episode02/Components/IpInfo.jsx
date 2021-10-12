import React, {Component} from "react";
import Loader from "react-loader-spinner";
import Info from "./Info";
import getInfo from "../Services/getInfo";
import "./style.css";

export default class IpInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    // console.log(this.getInfo()); // Promise
    getInfo().then((data) => {
      console.log(data);
      this.setState({
        info: data,
        isLoading: false,
      });
    });
  }

  render() {
    const isLoading = this.state.isLoading;
    return (
      <>
        {isLoading && <Loader type="Puff" color="#00BFFF" height={80} width={80} />}
        {!isLoading && <Info data={this.state.info} />}
      </>
    );
  }

}
