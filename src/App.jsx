import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import { addItem, deleteItem } from './redux/actions';

// Map state to props
const mapStateToProps = (state) => ({
  wishList: state.wishList,
  newItem: state.newItem,
});

// Map dispatch to props
const mapDispatchToProps = (dispatch) => ({
  addItem: (e) => {
    dispatch(addItem(e.payload));
  },

  deleteItem: (index) => {
    dispatch(deleteItem(index));
  },
});

// App component
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainContainer
        wishList={this.props.wishList}
        addItem={this.props.addItem}
        deleteItem={this.props.deleteItem}
      />
    );
  }
}

// Main App functionality
const MainContainer = (props) => {
  const [newItem, setNewItem] = useState('');
  const handleDispatch = () => {
    props.addItem({ type: 'ADD_ITEM', payload: newItem });
    setNewItem('');
  };

  const handleDelete = (e) => {
    props.deleteItem(e);
  };

  const handleSubmit = () => {
    props.deleteItem([]);
    alert('Submitted!');
  };

  // Pushing all list items to an array
  const allItems = [];
  for (let i = 0; i < props.wishList.length; i++) {
    allItems.push(
      <p onClick={() => handleDelete(i)} key={i}>
        {props.wishList[i]}
      </p>
    );
  }

  return (
    <div className="mainBox">
      <h1>MY WISHLIST</h1>
      <div className="itemBox">{allItems}</div>
      <input
        className="inputBox"
        value={newItem}
        onChange={(e) => {
          e.preventDefault();
          setNewItem(e.target.value);
          console.log('changing', e.target.value);
        }}
      />
      <br></br>
      <button
        className="addButton"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          handleDispatch();
        }}
      >
        Add
      </button>
      <br></br>
      <button
        className="submitButton"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
