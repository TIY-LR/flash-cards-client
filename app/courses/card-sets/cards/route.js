import Ember from 'ember';

export default Ember.Route.extend({
  // Delete this model function to use the look up from the server
  model: function() {
    return {
      id: 1,
      name: 'Console',
      cards: [
        {
          id: 2,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ducimus odio nemo, pariatur blanditiis cum. Aut at fugit, dicta iusto molestiae animi voluptas a, eligendi deserunt delectus ducimus dolorem! Quam!',
          front: 'rm',
          back: 'Removes a file from the filesystem',
        },
        {
          id: 3,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ducimus odio nemo, pariatur blanditiis cum. Aut at fugit, dicta iusto molestiae animi voluptas a, eligendi deserunt delectus ducimus dolorem! Quam!',
          front: 'mkdir',
          back: 'Creates new directory',
        }
      ]
    };
  }
});
