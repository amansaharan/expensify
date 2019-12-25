import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => {
  return (
    <div>
      <h1>Info</h1>
      <p>The Info is .... {props.info}</p>
    </div>
  );
};

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      <p>This is Private Info... plz donot share</p>
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenthicated ? (
        <WrappedComponent {...props} />
      ) : (
        <p> please login to see the page</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo  isAuthenthicated = {true} info=' Aman this is some special msg from props'/>,
//   document.querySelector('#root')
// );
ReactDOM.render(
  <AuthInfo
    isAuthenthicated={true}
    info=" Aman this is some special msg from props"
  />,
  document.querySelector('#root')
);
