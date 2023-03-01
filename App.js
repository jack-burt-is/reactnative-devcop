import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import * as GovUK from 'govuk-react';

export default function App() {
  return (
    <View style={styles.container}>
      <GovUK.GlobalStyle />
      <GovUK.TopNav
        serviceTitle={
          <GovUK.TopNav.Anchor>
            React Native GDS Application
          </GovUK.TopNav.Anchor>
        }
        search={
          <GovUK.SearchBox>
            <GovUK.SearchBox.Input placeholder="Search GOV.UK" />
            <GovUK.SearchBox.Button />
          </GovUK.SearchBox>
        }
      >
        <GovUK.TopNav.NavLink>
          Home
        </GovUK.TopNav.NavLink>
        <GovUK.TopNav.NavLink>
          Forms
        </GovUK.TopNav.NavLink>
      </GovUK.TopNav>
      <GovUK.Page.WidthContainer>
        <GovUK.Page.Main>
          <GovUK.H2>Welcome to the govuk-react example application.</GovUK.H2>
          <GovUK.Paragraph>Click Start to continue.</GovUK.Paragraph>
          <GovUK.Button>
            Start now
          </GovUK.Button>
        </GovUK.Page.Main>
      </GovUK.Page.WidthContainer>
      <GovUK.Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
