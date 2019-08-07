import React, { useState } from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Button, Image, Text } from "react-native-elements";
import BaseLayout from "../../layouts/base";
import { View } from "react-native";
import { FormTextInput } from "../../components";
import assetLibrary from "../../services/assetLibrary";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  return (
    <BaseLayout hasHeader={false}>
      <Grid>
        <Row size={3}>
          <Col style={{ alignItems: "center", justifyContent: "center" }}>
            <Image
              style={{ width: 300 }}
              source={assetLibrary.mainLogo}
              resizeMethod="scale"
              resizeMode="contain"
            />
          </Col>
        </Row>
        <Row size={2}>
          <View style={{ paddingHorizontal: 30 }}>
            <Col style={{ alignItems: "center" }}>
              <Row>
                <FormTextInput
                  onChangeText={setUsername}
                  value={username}
                  placeholder="Username"
                />
              </Row>
              <Row>
                <FormTextInput
                  onChangeText={setPassword}
                  value={password}
                  secureTextEntry={true}
                  placeholder="Password"
                />
              </Row>
              <Row style={{ marginTop: 15 }}>
                <Button
                  buttonStyle={{ height: 50, borderRadius: 8 }}
                  containerStyle={{ width: "100%" }}
                  title="Log In"
                />
              </Row>
              <Text style={{ fontSize: 18, marginVertical: 15 }}>
                Or, sign up
              </Text>
            </Col>
          </View>
        </Row>
      </Grid>
    </BaseLayout>
  );
}
