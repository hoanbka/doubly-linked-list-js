(function (exports) {
  "use strict";
/*
 * Constructor. Takes no arguments.
*/

  function DoublyLinkedList() {
    // pointer to first item
    this._head = null;
    // pointer to the last item
    this._tail = null;
    // length of list
    this._length = 0;
  }

  // Wraps data in a node object.
  DoublyLinkedList.prototype._createNewNode = function (data) {
    var node = {
      data: data,
      next: null,
      prev: null
    };
    return node;
  };

/*
 * Appends a node to the end of the list.
*/
  DoublyLinkedList.prototype.append = function (data) {
    var node = this._createNewNode(data);

    if (this._length === 0) {

      // first node, so all pointers to this
      this._head = node;
      this._tail = node;
    } else {

      // put on the tail
      this._tail.next = node;
      node.prev = this._tail;
      this._tail = node;
    }

    // update count
    this._length++;

    return node;
  };

/*
 * Prepends a node to the end of the list.
*/
  DoublyLinkedList.prototype.prepend = function (data) {
    var node = this._createNewNode(data);

    if (this.first === null) {

      // we are empty, so this is the first node
      // use the same logic as append
      this.append(data);
      return;
    } else {

      // place before head
      this._head.prev = node;
      node.next = this._head;
      this._head = node;
    }

    // update count
    this._length++;

    return node;
  };

/*
 * Returns the node at the specified index. The index starts at 0.
*/
  DoublyLinkedList.prototype.item = function (index) {
    if (index >= 0 && index < this._length) {
      var node = this._head;
      while (index--) {
        node = node.next;
      }
      return node;
    }
  };

/*
 * Returns the node at the head of the list.
*/
  DoublyLinkedList.prototype.head = function () {
    return this._head;
  };

/*
 * Returns the node at the tail of the list.
*/
  DoublyLinkedList.prototype.tail = function () {
    return this._tail;
  };

/*
 * Returns the size of the list.
*/
  DoublyLinkedList.prototype.size = function () {
    return this._length;
  };

/*
 * Removes the item at the index.
*/
  DoublyLinkedList.prototype.remove = function (index) {
    throw "Not implemented";
  };

  exports.DoublyLinkedList = DoublyLinkedList;
})(typeof exports === 'undefined' ? this['DLL'] = {} : exports);
