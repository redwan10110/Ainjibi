import React from "react";
import { Table } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="container">
      <h1 className="text-center text-primary my-5">This is blog</h1>
      <div className="row">
        <div className="col-md-12">
          <h1>Difference between authorization and authentication</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Authentication</th>
                <th>Authorization</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td> the identity of users are checked for providing the access to the system in this process</td>
                <td>person’s or user’s authorities are checked for accessing the resources in authorization process.</td>
                
              </tr>
              <tr>
                <td>2</td>
                <td>It needs user’s login details.	</td>
                <td> it needs user’s privilege or security levels.</td>
               
              </tr>
              <tr>
                <td>3</td>
                <td>It is done before the authorization process.</td>
                <td>this process is done after the authentication process.</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Authentication is visible to and partially changeable by the user.</td>
                <td>Authorization isn’t visible to or changeable by the user.</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="col-md-12">
        <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
        <p>We use firebase to authenticate our web apps. firebase let us login a website by below website user google,facebook,github,apple,twitter. or even by own email and password.</p>
        <br></br>
        <p>
            alternative of firebase

            <ul>
                <li>Backendless</li>
                <li>AWS Amplify</li>
                <li>Parse</li>
                <li>Back4App</li>
                <li>Kuzzle</li>
            </ul>
        </p>
        </div>
        <div className="col-md-12">
        <h1>What other services does firebase provide other than authentication</h1>
        <p>
            Firebase other service

            <ul>
                <li>Firebase Database</li>
                <li>Realtime Database</li>
                <li>Storage</li>
                <li>Hosting: Deploy web and mobile web apps </li>
                <li>Functions:Run your mobile backend code without managing servers</li>
            </ul>
        </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
