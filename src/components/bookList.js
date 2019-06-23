import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import BookItem from './bookItem';

class BookList extends Component {

    renderItem({ item }) {
        return (
            <BookItem book={item} />
        );
    }

    render() {
        const { books } = this.props;
        return (
            <View>
                <FlatList
                    data={books}
                    keyExtractor={(item) => item.isbn}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(BookList);