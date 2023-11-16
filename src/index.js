import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import Comments from './components/comments';
import CommentForm from './components/commentForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <div className="row d-flex justify-content-center">
      <div className="col-lg-5">
          <div><br/><br/></div>
          <CommentForm />
          <div><br /><br /></div>
          <Comments />
      </div>
    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
