import React, { FC, ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    Alert,
    Button,
    Card,
    Col,
    Form,
    Row,
    Typography
} from "antd";

import {
    KeyOutlined,
    MailOutlined,
    SafetyCertificateOutlined,
    ArrowRightOutlined
} from "@ant-design/icons";

import {
    selectErrorMessage,
    selectIsAuthLoading,
    selectSuccessMessage
} from "../../redux-toolkit/auth/auth-selector";

import { setAuthLoadingState } from "../../redux-toolkit/auth/auth-slice";

import { forgotPassword } from "../../redux-toolkit/auth/auth-thunks";

import { LoadingStatus } from "../../types/types";

import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import FormInput from "../../components/FormInput/FormInput";

const { Title, Paragraph, Text } = Typography;

const ForgotPassword: FC = (): ReactElement => {

    const dispatch = useDispatch();

    const [form] = Form.useForm();

    const error = useSelector(selectErrorMessage);
    const success = useSelector(selectSuccessMessage);
    const isLoading = useSelector(selectIsAuthLoading);

    useEffect(() => {
        dispatch(setAuthLoadingState(LoadingStatus.LOADED));
    }, []);

    useEffect(() => {
        form.resetFields();
    }, [success]);

    const onClickSend = (value: { email: string }): void => {
        dispatch(forgotPassword(value.email));
    };

    return (
        <ContentWrapper>
            <div
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "40px 20px",
                    background:
                        "radial-gradient(circle at top right, rgba(255,37,99,0.12), transparent 25%), #0a0a0a"
                }}
            >
                <Row
                    gutter={[40, 40]}
                    align="middle"
                    style={{
                        width: "100%",
                        maxWidth: 1280
                    }}
                >
                    {/* LEFT SIDE */}
                    <Col xs={24} lg={13}>
                        <div
                            style={{
                                paddingRight: 20
                            }}
                        >
                            {/* BADGE */}
                            <div
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 10,
                                    padding: "10px 18px",
                                    borderRadius: 999,
                                    background:
                                        "rgba(255,255,255,0.06)",
                                    border:
                                        "1px solid rgba(255,255,255,0.08)",
                                    marginBottom: 30
                                }}
                            >
                                <SafetyCertificateOutlined
                                    style={{
                                        color: "#ff2563",
                                        fontSize: 18
                                    }}
                                />

                                <Text
                                    style={{
                                        color: "#ffffff",
                                        fontWeight: 600
                                    }}
                                >
                                    Secure Account Recovery
                                </Text>
                            </div>

                            {/* MAIN TITLE */}
                            <Title
                                style={{
                                    color: "#ffffff",
                                    fontSize: 64,
                                    fontWeight: 800,
                                    lineHeight: 1.1,
                                    marginBottom: 24
                                }}
                            >
                                Forgot
                                <br />
                                Your Password?
                            </Title>

                            {/* DESCRIPTION */}
                            <Paragraph
                                style={{
                                    color: "#9f9f9f",
                                    fontSize: 18,
                                    lineHeight: 1.9,
                                    maxWidth: 560,
                                    marginBottom: 40
                                }}
                            >
                                No worries. Enter your registered email
                                address and we’ll send you secure reset
                                instructions instantly.
                            </Paragraph>

                            {/* FEATURE CARDS */}
                            <Row gutter={[18, 18]}>
                                <Col xs={24} sm={12}>
                                    <Card
                                        bordered={false}
                                        style={{
                                            borderRadius: 24,
                                            background:
                                                "linear-gradient(145deg,#161616,#101010)",
                                            border:
                                                "1px solid rgba(255,255,255,0.05)",
                                            height: "100%"
                                        }}
                                        bodyStyle={{
                                            padding: 24
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 54,
                                                height: 54,
                                                borderRadius: 18,
                                                background:
                                                    "rgba(255,37,99,0.12)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "#ff2563",
                                                fontSize: 24,
                                                marginBottom: 18
                                            }}
                                        >
                                            <KeyOutlined />
                                        </div>

                                        <Title
                                            level={4}
                                            style={{
                                                color: "#ffffff",
                                                marginBottom: 10
                                            }}
                                        >
                                            Fast Recovery
                                        </Title>

                                        <Paragraph
                                            style={{
                                                color: "#8c8c8c",
                                                marginBottom: 0,
                                                lineHeight: 1.8
                                            }}
                                        >
                                            Recover your account in just
                                            a few simple steps.
                                        </Paragraph>
                                    </Card>
                                </Col>

                                <Col xs={24} sm={12}>
                                    <Card
                                        bordered={false}
                                        style={{
                                            borderRadius: 24,
                                            background:
                                                "linear-gradient(145deg,#161616,#101010)",
                                            border:
                                                "1px solid rgba(255,255,255,0.05)",
                                            height: "100%"
                                        }}
                                        bodyStyle={{
                                            padding: 24
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 54,
                                                height: 54,
                                                borderRadius: 18,
                                                background:
                                                    "rgba(255,37,99,0.12)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "#ff2563",
                                                fontSize: 24,
                                                marginBottom: 18
                                            }}
                                        >
                                            <SafetyCertificateOutlined />
                                        </div>

                                        <Title
                                            level={4}
                                            style={{
                                                color: "#ffffff",
                                                marginBottom: 10
                                            }}
                                        >
                                            Secure Access
                                        </Title>

                                        <Paragraph
                                            style={{
                                                color: "#8c8c8c",
                                                marginBottom: 0,
                                                lineHeight: 1.8
                                            }}
                                        >
                                            Advanced encrypted password
                                            reset protection.
                                        </Paragraph>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    {/* RIGHT SIDE FORM */}
                    <Col xs={24} lg={11}>
                        <Card
                            bordered={false}
                            style={{
                                borderRadius: 32,
                                background:
                                    "linear-gradient(145deg,#171717,#101010)",
                                border:
                                    "1px solid rgba(255,255,255,0.06)",
                                boxShadow:
                                    "0 25px 60px rgba(0,0,0,0.45)",
                                overflow: "hidden",
                                position: "relative"
                            }}
                            bodyStyle={{
                                padding: 42
                            }}
                        >
                            {/* GLOW */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: -120,
                                    right: -120,
                                    width: 250,
                                    height: 250,
                                    borderRadius: "50%",
                                    background:
                                        "rgba(255,37,99,0.12)",
                                    filter: "blur(80px)"
                                }}
                            />

                            <div
                                style={{
                                    position: "relative",
                                    zIndex: 2
                                }}
                            >
                                {/* ICON */}
                                <div
                                    style={{
                                        width: 78,
                                        height: 78,
                                        borderRadius: 24,
                                        background:
                                            "linear-gradient(135deg,#ff2563,#ff4d88)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: 34,
                                        color: "#ffffff",
                                        marginBottom: 26,
                                        boxShadow:
                                            "0 12px 30px rgba(255,37,99,0.35)"
                                    }}
                                >
                                    <MailOutlined />
                                </div>

                                {/* FORM TITLE */}
                                <Title
                                    level={2}
                                    style={{
                                        color: "#ffffff",
                                        marginBottom: 12
                                    }}
                                >
                                    Reset Password
                                </Title>

                                <Paragraph
                                    style={{
                                        color: "#8f8f8f",
                                        fontSize: 15,
                                        lineHeight: 1.8,
                                        marginBottom: 32
                                    }}
                                >
                                    Enter your email below to receive
                                    your secure password reset link.
                                </Paragraph>

                                {/* ALERTS */}
                                {error && (
                                    <Alert
                                        type="error"
                                        message={error}
                                        showIcon
                                        style={{
                                            marginBottom: 20,
                                            borderRadius: 14
                                        }}
                                    />
                                )}

                                {success && (
                                    <Alert
                                        type="success"
                                        message={success}
                                        showIcon
                                        style={{
                                            marginBottom: 20,
                                            borderRadius: 14
                                        }}
                                    />
                                )}

                                {/* FORM */}
                                <Form
                                    form={form}
                                    layout="vertical"
                                    onFinish={onClickSend}
                                >
                                    <FormInput
                                        title={"E-mail Address"}
                                        icon={<MailOutlined />}
                                        titleSpan={24}
                                        wrapperSpan={24}
                                        name={"email"}
                                        placeholder={"Enter your email"}
                                        rule={[
                                            {
                                                required: true,
                                                message:
                                                    "Please input your E-mail!"
                                            }
                                        ]}
                                    />

                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        loading={isLoading}
                                        icon={<ArrowRightOutlined />}
                                        style={{
                                            width: "100%",
                                            height: 58,
                                            marginTop: 12,
                                            border: "none",
                                            borderRadius: 18,
                                            fontSize: 16,
                                            fontWeight: 700,
                                            background:
                                                "linear-gradient(135deg,#ff2563,#ff4d88)",
                                            boxShadow:
                                                "0 12px 28px rgba(255,37,99,0.35)"
                                        }}
                                    >
                                        Send Reset Link
                                    </Button>
                                </Form>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </ContentWrapper>
    );
};

export default ForgotPassword;