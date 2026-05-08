import React, { FC, ReactElement, useEffect } from "react";
import {
    Col,
    Row,
    Typography,
    Card,
    Space,
    Button
} from "antd";

import {
    InfoCircleOutlined,
    PhoneOutlined,
    MailOutlined,
    ClockCircleOutlined,
    EnvironmentOutlined
} from "@ant-design/icons";

import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import ContentTitle from "../../components/ContentTitle/ContentTitle";

const { Title, Text, Paragraph } = Typography;

const Contacts: FC = (): ReactElement => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <ContentWrapper>
            <div
                style={{
                    minHeight: "100vh",
                    padding: "20px 0"
                }}
            >
                {/* HEADER */}
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: 40
                    }}
                >
                    <ContentTitle
                        icon={<InfoCircleOutlined />}
                        title={"Contact Us"}
                    />

                    <Paragraph
                        style={{
                            color: "#8c8c8c",
                            fontSize: 16,
                            maxWidth: 600,
                            margin: "10px auto 0"
                        }}
                    >
                        We are here to help you with orders, support,
                        delivery information, and product inquiries.
                    </Paragraph>
                </div>

                <Row gutter={[24, 24]}>
                    {/* LEFT CARD */}
                    <Col xs={24} lg={14}>
                        <Card
                            bordered={false}
                            style={{
                                borderRadius: 24,
                                background:
                                    "linear-gradient(145deg, #151515, #101010)",
                                boxShadow:
                                    "0 10px 35px rgba(0,0,0,0.35)",
                                border:
                                    "1px solid rgba(255,255,255,0.05)"
                            }}
                            bodyStyle={{
                                padding: 32
                            }}
                        >
                            <Title
                                level={3}
                                style={{
                                    color: "#ffffff",
                                    marginBottom: 30
                                }}
                            >
                                Get In Touch
                            </Title>

                            <Space
                                direction="vertical"
                                size={28}
                                style={{ width: "100%" }}
                            >
                                {/* PHONE */}
                                <div
                                    style={{
                                        display: "flex",
                                        gap: 18,
                                        alignItems: "flex-start"
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 52,
                                            height: 52,
                                            borderRadius: 16,
                                            background:
                                                "rgba(255,37,99,0.12)",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            color: "#ff2563",
                                            fontSize: 20
                                        }}
                                    >
                                        <PhoneOutlined />
                                    </div>

                                    <div>
                                        <Text
                                            strong
                                            style={{
                                                color: "#ffffff",
                                                display: "block",
                                                fontSize: 16
                                            }}
                                        >
                                            Mobile
                                        </Text>

                                        <Text
                                            style={{
                                                color: "#bdbdbd",
                                                fontSize: 15
                                            }}
                                        >
                                            (066) 696-66-23
                                        </Text>
                                    </div>
                                </div>

                                {/* EMAIL */}
                                <div
                                    style={{
                                        display: "flex",
                                        gap: 18,
                                        alignItems: "flex-start"
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 52,
                                            height: 52,
                                            borderRadius: 16,
                                            background:
                                                "rgba(255,37,99,0.12)",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            color: "#ff2563",
                                            fontSize: 20
                                        }}
                                    >
                                        <MailOutlined />
                                    </div>

                                    <div>
                                        <Text
                                            strong
                                            style={{
                                                color: "#ffffff",
                                                display: "block",
                                                fontSize: 16
                                            }}
                                        >
                                            E-mail
                                        </Text>

                                        <Text
                                            style={{
                                                color: "#bdbdbd",
                                                fontSize: 15
                                            }}
                                        >
                                            chandrakantmali123@gmail.com
                                        </Text>
                                    </div>
                                </div>

                                {/* WORKING HOURS */}
                                <div
                                    style={{
                                        display: "flex",
                                        gap: 18,
                                        alignItems: "flex-start"
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 52,
                                            height: 52,
                                            borderRadius: 16,
                                            background:
                                                "rgba(255,37,99,0.12)",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            color: "#ff2563",
                                            fontSize: 20
                                        }}
                                    >
                                        <ClockCircleOutlined />
                                    </div>

                                    <div>
                                        <Text
                                            strong
                                            style={{
                                                color: "#ffffff",
                                                display: "block",
                                                fontSize: 16
                                            }}
                                        >
                                            Working Hours
                                        </Text>

                                        <Paragraph
                                            style={{
                                                color: "#bdbdbd",
                                                marginTop: 6,
                                                marginBottom: 0,
                                                lineHeight: 1.7
                                            }}
                                        >
                                            The online store is open from
                                            08:00 to 20:00 without breaks
                                            and weekends.
                                            <br />
                                            Online orders are accepted
                                            24/7.
                                        </Paragraph>
                                    </div>
                                </div>

                                {/* DELIVERY */}
                                <div
                                    style={{
                                        display: "flex",
                                        gap: 18,
                                        alignItems: "flex-start"
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 52,
                                            height: 52,
                                            borderRadius: 16,
                                            background:
                                                "rgba(255,37,99,0.12)",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            color: "#ff2563",
                                            fontSize: 20
                                        }}
                                    >
                                        <EnvironmentOutlined />
                                    </div>

                                    <div>
                                        <Text
                                            strong
                                            style={{
                                                color: "#ffffff",
                                                display: "block",
                                                fontSize: 16
                                            }}
                                        >
                                            Delivery
                                        </Text>

                                        <Paragraph
                                            style={{
                                                color: "#bdbdbd",
                                                marginTop: 6,
                                                marginBottom: 0,
                                                lineHeight: 1.7
                                            }}
                                        >
                                            Fast and secure delivery is
                                            available through trusted
                                            courier services.
                                        </Paragraph>
                                    </div>
                                </div>
                            </Space>
                        </Card>
                    </Col>

                    {/* RIGHT CARD */}
                    <Col xs={24} lg={10}>
                        <Card
                            bordered={false}
                            style={{
                                borderRadius: 24,
                                height: "100%",
                                background:
                                    "linear-gradient(145deg, #1a1a1a, #101010)",
                                boxShadow:
                                    "0 10px 35px rgba(0,0,0,0.35)",
                                border:
                                    "1px solid rgba(255,255,255,0.05)"
                            }}
                            bodyStyle={{
                                padding: 32,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                height: "100%"
                            }}
                        >
                            <Title
                                level={2}
                                style={{
                                    color: "#ffffff",
                                    marginBottom: 20
                                }}
                            >
                                Need Help?
                            </Title>

                            <Paragraph
                                style={{
                                    color: "#bdbdbd",
                                    fontSize: 15,
                                    lineHeight: 1.8
                                }}
                            >
                                Our support team is always ready to help
                                you with your Perfume orders, shipping
                                questions, or product recommendations.
                            </Paragraph>

                            <Button
                                type="primary"
                                size="large"
                                style={{
                                    marginTop: 20,
                                    height: 52,
                                    borderRadius: 14,
                                    border: "none",
                                    fontWeight: 700,
                                    background:
                                        "linear-gradient(135deg,#ff2563,#ff4d88)",
                                    boxShadow:
                                        "0 10px 25px rgba(255,37,99,0.35)"
                                }}
                            >
                                Contact Support
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        </ContentWrapper>
    );
};

export default Contacts;