const request = require("request");
module.exports = {
  fetchUsers: fetchUsers,
  fetchUser: fetchUser,
  fetchComments: fetchComments,
  fetchCommentsByPost: fetchCommentsByPost,
  publishPost: publishPost,

};

function fetchUsers(callback) {
  request(
    {
      url: "http://jsonplaceholder.typicode.com/users",
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

function fetchUser(userId, callback) {
  request(
    {
      url: `http://jsonplaceholder.typicode.com/users/${userId}`,
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

function fetchComments(callback) {
  request(
    {
      url: "http://jsonplaceholder.typicode.com/comments",
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

function fetchCommentsByPost(postId, callback) {
  request(
    {
      url: `http://jsonplaceholder.typicode.com/posts/${postId}/comments`,
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

function publishPost(userId, title, body, callback) {
  request(
    {
      url: "POST/http://jsonplaceholder.typicode.com/posts/",
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
    }
  );
}
