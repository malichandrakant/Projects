import React, { FC, ReactElement } from "react";
import { Col, Modal, Row, Typography } from "antd";

import { PerfumeResponse } from "../../../../types/types";
import "./DeleteModal.css";

type PropsType = {
    visible: boolean;
    deletePerfumeHandler: () => void;
    handleCancel: () => void;
    PerfumeInfo?: PerfumeResponse;
};

const DeleteModal: FC<PropsType> = ({ visible, deletePerfumeHandler, handleCancel, PerfumeInfo }): ReactElement => {
    return (
        <Modal title="Delete Perfume" visible={visible} onOk={deletePerfumeHandler} onCancel={handleCancel}>
            <Row>
                <Col span={12} className={"delete-modal-Perfume-image-wrapper"}>
                    <img
                        className={"delete-modal-Perfume-image"}
                        alt={PerfumeInfo?.PerfumeTitle}
                        src={PerfumeInfo?.filename}
                    />
                </Col>
                <Col span={12}>
                    <Typography.Text>Are you sure too delete?</Typography.Text>
                    <Typography.Title level={5}>{PerfumeInfo?.Perfumer}</Typography.Title>
                    <Typography.Title level={5}>{PerfumeInfo?.PerfumeTitle}</Typography.Title>
                </Col>
            </Row>
        </Modal>
    );
};

export default DeleteModal;
