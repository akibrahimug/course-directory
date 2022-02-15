import React from 'react';

const Featured = ({match}) => {
  let topic = match.params.topic;
  let firstName = match.params.firstName;
  let lastName = match.params.lastName

  return (
    <div className="main-content">
      <h2>{`${firstName} ${lastName}`}</h2>
      <p>Introducing <strong>{lastName}</strong>, a teacher who loves teaching courses about <strong>{topic}</strong>!</p>
    </div>
  );
}

export default Featured;