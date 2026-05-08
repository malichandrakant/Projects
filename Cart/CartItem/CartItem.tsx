import React, { FC, ReactElement, useEffect, useState } from "react";
import { Card, Col, InputNumber, Row, Typography } from "antd";

import { PerfumeResponse } from "../../../types/types";
import RemoveButton from "./RemoveButton";
import CartItemInfo from "./CartItemInfo";


type PropsType = {
    Perfume: PerfumeResponse;
    PerfumeInCart: number;
    onChangePerfumeItemCount: (PerfumeId: number, inputValue: number) => void;
    deleteFromCart: (PerfumeId: number) => void;
};

const CartItem: FC<PropsType> = ({
    Perfume,
    PerfumeInCart,
    onChangePerfumeItemCount,
    deleteFromCart
}): ReactElement => {
    const [PerfumeCount, setPerfumeCount] = useState(1);

    useEffect(() => {
        setPerfumeCount(PerfumeInCart);
    }, []);

    const handlePerfumesCount = (value: number | null): void => {
        setPerfumeCount(value!);
        onChangePerfumeItemCount(Perfume.id, value!);
    };

    return (
        <Card className={"cart-item"}>
            <Row gutter={16}>
                <CartItemInfo Perfume={Perfume} />
                <Col span={8}>
                    <Row gutter={8}>
                        <Col span={12}>
                            <InputNumber
                                min={1}
                                max={99}
                                value={PerfumeCount}
                                onChange={handlePerfumesCount}
                            />
                        </Col>
                        <Col span={12}>
                            <RemoveButton PerfumeId={Perfume.id} deleteFromCart={deleteFromCart} />
                        </Col>
                    </Row>
                    <Row style={{ marginTop: 16 }}>
                        <Typography.Title level={4}>₹{Perfume.price * PerfumeCount}</Typography.Title>
                    </Row>
                </Col>
            </Row>
        </Card>
    );
};

export default CartItem;
