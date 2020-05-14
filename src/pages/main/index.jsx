import React, {Component} from 'react';
import Loader from "../../component/loader/loader";
import {connect} from "react-redux";
import * as Actions from "./actions";
import style from "./style.module.css"
import Item from "../../component/item";

class MainPage extends Component {
    componentDidMount() {
        this.props.getItems();
    }

    render() {
        const {items} = this.props.main;
        return (
            <div className={style.mainPage}>
                <h1 className={style.header}>Test task Kameleoon</h1>
                <div className={style.items}>
                    {items.length < 1
                        ? <Loader/>
                        : items.map(item => <Item name={item.name}
                                                  sites={item.sites}
                                                  status={item.status}
                                                  type={item.type}
                                                  key={item.id}
                                                  onClick={() => this.props.unlockItem(item.id)}
                        />)}
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    main: state.main
})

export default connect(mapStateToProps, Actions)(MainPage);