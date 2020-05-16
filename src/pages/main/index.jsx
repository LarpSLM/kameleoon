import React, {Component} from 'react';
import Loader from "../../component/loader/loader";
import style from "./style.module.css"
import Item from "../../component/item";

export default class MainPage extends Component {
    onChangeSort = (event) => {
        const property = event.target.id;
        this.props.changeSort(property)
    }

    onChangeFieldSearch = (event) => {
        const value = event.target.value;
        this.props.fieldSearchOnChange(value)
    }

    render() {
        const {items, fieldSearchValue} = this.props;
        return (
            <div className={style.mainPage}>
                <div className={style.search}>
                    <i className="fas fa-search"></i>
                    <input type="text" value={fieldSearchValue} onChange={this.onChangeFieldSearch} />
                </div>
                <div className={style.itemsList}>
                    <div className={style.header}>
                        <div>
                            <span id='name' onClick={this.onChangeSort}>Tool name </span>
                            <i className="fas fa-sort"></i>
                        </div>
                        <div>
                            <span id='sites' onClick={this.onChangeSort}>Used on</span>
                        </div>
                        <div>
                            <span id='type' onClick={this.onChangeSort}>Type</span>
                        </div>
                        <div>
                            <span id='status' onClick={this.onChangeSort}>Status</span>
                        </div>
                    </div>
                    <div>
                        {this.props.lodingItems
                            ? <Loader/>
                            : items.map(item => <Item name={item.name}
                                                      sites={item.sites}
                                                      status={item.status}
                                                      type={item.type}
                                                      key={item.id}
                            />)}
                        {(items.length < 1 && !this.props.lodingItems) && <p className={style.searchFail}>not found</p>}
                    </div>
                </div>
            </div>
        );
    }
}