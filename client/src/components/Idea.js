import React from 'react'

const Idea = ({idea}) =>
  <div className="post-it" key={idea.id}>
    <h4>{idea.title}</h4>
    <p>{idea.body}</p>
  </div>

export default Idea