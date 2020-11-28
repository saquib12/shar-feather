import React, { useState, setState } from 'react';
import { compose } from 'recompose';
import axios from 'axios';
import { withAuthorization, withEmailVerification } from '../Session';
import Messages from '../Messages';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>The Home Page is accessible by every signed in user.</p>
      <input
        class="favorite styled"
        type="button"
        value="Add to favorites"
        onClick={() => {
          axios
            .get(`https://6093d63897a8.ngrok.io/upload`)
            .then((res) => {
              const persons = res.data;
              console.log(persons);
            })
            .catch((err) => console.log(err));
        }}
      />

      <Messages />
    </div>
  );
};

const condition = (authUser) => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
