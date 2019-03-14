import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
  actions: {
    publishPost: function() {
      $.ajax({
        url: "http://localhost:3000/posts/create",
        type: "POST",
        data: {
          title: this.get('title'),
          body: this.get('body')
        }, success: function () {
          location.reload();
        }
      });
      $("#postTitle").val("");
      $("#postBody").val("");
    },
    openDeleteModal: function (post) {
      $('.ui.deletePost.modal').modal({
        closable: false,
        detachable: false,

        onDeny: () => {
          return true;
        },

        onApprove: () => {
          $.ajax({
            url: "http://localhost:3000/posts/" + post.id + "/delete",
            type: "DELETE",
            success: function () {
              location.reload();
            }
          });
          return true;
        }
      }).modal('show');
    },
    openEditModal: function (post) {
      $('#editPostTitle').val(post.title);
      $('#editPostBody').val(post.body);
      $('.ui.editPost.modal').modal({
        closable: false,
        detachable: false,

        onDeny: () => {
          return true;
        },

        onApprove: () => {
          $.ajax({
            url: "http://localhost:3000/posts/" + post.id + "/update",
            type: "PUT",
            data: {
              title: $('#editPostTitle').val(),
              body: $('#editPostBody').val()
            }, success: function () {
              location.reload();
            }
          });
          return true;
        }
      }).modal('show');
    }
  }
});
