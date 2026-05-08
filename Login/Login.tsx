import React, { FC, ReactElement, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Col, Divider, Form, Row, Space } from "antd";
import { LockOutlined, LoginOutlined, MailOutlined } from "@ant-design/icons";

import googleLogo from "../../img/google.png";
import facebookLogo from "../../img/facebook.png";
import githubLogo from "../../img/github.png";
import { selectErrorMessage } from "../../redux-toolkit/auth/auth-selector";
import { resetAuthState } from "../../redux-toolkit/auth/auth-slice";
import { activateAccount, login } from "../../redux-toolkit/auth/auth-thunks";
import { selectSuccessMessage } from "../../redux-toolkit/user/user-selector";
import { FORGOT } from "../../constants/routeConstants";
import SocialButton from "./SocialButton/SocialButton";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import ContentTitle from "../../components/ContentTitle/ContentTitle";
import FormInput from "../../components/FormInput/FormInput";
import IconButton from "../../components/IconButton/IconButton";
import "./Login.css";

const Login: FC = (): ReactElement => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams<{ code: string }>();
    const errorMessage = useSelector(selectErrorMessage);
    const successMessage = useSelector(selectSuccessMessage);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        if (params.code) {
            dispatch(activateAccount(params.code));
        }

        return () => {
            dispatch(resetAuthState());
        };
    }, []);

    const onClickSignIn = (userData: { email: ""; password: "" }): void => {
        dispatch(login({ userData, history }));
    };

    return (
        <ContentWrapper>
            <div className="login-container">
                <ContentTitle icon={<LoginOutlined />} title={"WELCOME BACK"} />
                <Row gutter={[48, 32]} align="middle" className="login-row">
                    {/* LEFT SIDE: FORM */}
                    <Col xs={24} md={12} className="login-form-column">
                        <div className="login-box">
                            <Form onFinish={onClickSignIn} layout="vertical">
                                {errorMessage && <Alert type="error" message={errorMessage} showIcon className="auth-alert" />}
                                {successMessage && <Alert type="success" message={successMessage} showIcon className="auth-alert" />}
                                
                                <FormInput
                                    title={"E-mail Address"}
                                    icon={<MailOutlined />}
                                    titleSpan={24}
                                    wrapperSpan={24}
                                    name={"email"}
                                    placeholder={"Enter your email"}
                                />
                                <FormInput
                                    title={"Password"}
                                    icon={<LockOutlined />}
                                    titleSpan={24}
                                    wrapperSpan={24}
                                    name={"password"}
                                    placeholder={"Enter your password"}
                                    inputPassword
                                />
                                
                                <div className="login-footer">
                                    <IconButton title={"SIGN IN"} icon={<LoginOutlined />} />
                                    <Link to={FORGOT} className="forgot-link">Forgot password?</Link>
                                </div>
                            </Form>
                        </div>
                    </Col>

                    {/* RIGHT SIDE: SOCIAL LOGIN */}
                    <Col xs={24} md={12} className="login-social-column">
                        <div className="social-box">
                            <Divider plain className="social-divider">
                                <span className="divider-text">OR CONTINUE WITH</span>
                            </Divider>
                            <Space direction={"vertical"} className={"social-login-wrapper"} size={16}>
                                <SocialButton socialNetwork={"google"} image={googleLogo} />
                                <SocialButton socialNetwork={"facebook"} image={facebookLogo} />
                                <SocialButton socialNetwork={"github"} image={githubLogo} />
                            </Space>
                        </div>
                    </Col>
                </Row>
            </div>
        </ContentWrapper>
    );
};

export default Login;