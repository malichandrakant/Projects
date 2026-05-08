import React, { FC, memo, ReactElement } from "react";
import { Col, Typography } from "antd";

import { PerfumeResponse } from "../../../types/types";


type PropsType = {
    Perfume: PerfumeResponse;
};

const CartItemInfo: FC<PropsType> = memo(({ Perfume }): ReactElement => {

    return (
        <>
            <Col span={8} className={"cart-item-image"}>
                <img src={Perfume.filename} alt={Perfume.PerfumeTitle} style={{ height: 100 }} />
            </Col>
            <Col span={8}>
                <Typography.Title level={3}>{Perfume.Perfumer}</Typography.Title>
                <Typography.Title level={5}>{Perfume.PerfumeTitle}</Typography.Title>
                <Typography.Text strong>{Perfume.volume} ml.</Typography.Text>
            </Col>
        </>
    );
});

export default CartItemInfo;
