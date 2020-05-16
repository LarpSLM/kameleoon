import React, {Component} from 'react';
import {connect} from "react-redux";
import * as Actions from "./actions";
import MainPage from "./index";

class IndexContainer extends Component {
    componentDidMount() {
        this.props.getItems();
    }

    sort = () => {
        const {items, sort} = this.props.main;
        switch (sort.decrease) {
            case false:
            default:
                return items.sort((a, b) => {
                    if(a[sort.property] < b[sort.property]) return -1;
                    else if (a[sort] > b[sort]) return 1;
                    else return 0;
                })
            case true:
                return items.sort((a, b) => {
                    if(a[sort.property] > b[sort.property]) return -1;
                    else if (b[sort] < a[sort]) return 1;
                    else return 0;
                })
        }
    }

    search = (arr) => {
        const search = this.props.main.search.toLowerCase();
        if (search !== '') {
            const filtArr = []
            arr.forEach(el => {
                const item = el.name.toLowerCase();
                item.includes(search) && filtArr.push(el);
            })
            return filtArr;
        } else {
            return arr;
        }
    }

    render() {
        const {main} = this.props;
        const sortItem = this.sort();
        const filterItem = this.search(sortItem)
        return (
            <MainPage items={filterItem}
                      lodingItems={main.isLoading}
                      fieldSearchValue={main.search}
                      changeSort={this.props.changeSort}
                      fieldSearchOnChange={this.props.changeFieldSearch}
                      key={filterItem.id}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    main: state.main
})

export default connect(mapStateToProps, Actions)(IndexContainer);
