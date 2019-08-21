"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require("graphql");

var _Comment = require("../types/Comment");

var _FakeDatabase = require("../../FakeDatabase");

exports.default = {
  addNewComment: {
    type: _Comment.Comment,
    description: 'Creates a new comment for a blog post',
    args: {
      comment: { type: _Comment.CommentInputType }
    },
    resolve: function resolve(parent, _ref) {
      var comment = _ref.comment;

      return _FakeDatabase.fakeDatabase.addNewComment(comment);
    }
  }
};