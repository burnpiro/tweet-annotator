import React from "react";
import firebase from "firebase/app";
import "firebase/database";
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode,
} from "@react-firebase/database";
import { CookiesProvider } from "react-cookie";

import { config } from "../../helpers/config";
import Layout from "../Layout/Layout";
import Form from "../Form/Form";

function App() {
  return (
    <FirebaseDatabaseProvider firebase={firebase} {...config}>
      <CookiesProvider>
        <Layout>
          <Form />
        </Layout>
      </CookiesProvider>
    </FirebaseDatabaseProvider>
  );
}

export default App;
