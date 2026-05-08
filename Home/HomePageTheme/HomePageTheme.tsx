import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";

import { MENU } from "../../../constants/routeConstants";
import "./HomePageTheme.css";

const HomePageTheme: FC = (): ReactElement => {
    return (
        <div className={"page-theme"}>
            <Row gutter={[32, 32]}>
                <Col xs={24} md={12}>
                    <div className={"theme-card female-theme"}>
                        <Link to={{ pathname: MENU, state: { id: "female" } }}>
                            <div className={"theme-image-wrapper"}>
                                <img src="https://i.ibb.co/jMmJs60/Them-Woman-ENG.jpg" alt={"female"} />
                                <div className={"theme-overlay"}>
                                    <span className={"theme-title"}>FEMALE COLLECTION</span>
                                    <span className={"theme-subtitle"}>DISCOVER</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </Col>
                <Col xs={24} md={12}>
                    <div className={"theme-card male-theme"}>
                        <Link to={{ pathname: MENU, state: { id: "male" } }}>
                            <div className={"theme-image-wrapper"}>
                                <img src="https://i.ibb.co/mJGKz8c/Them-Man-ENG.jpg" alt={"male"} />
                                <div className={"theme-overlay"}>
                                    <span className={"theme-title"}>MALE COLLECTION</span>
                                    <span className={"theme-subtitle"}>DISCOVER</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default HomePageTheme;