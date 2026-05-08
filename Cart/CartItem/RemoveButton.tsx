import React, { FC, memo, ReactElement } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";

type PropsType = {
    PerfumeId: number;
    deleteFromCart: (PerfumeId: number) => void;
};

const RemoveButton: FC<PropsType> = memo(({ PerfumeId, deleteFromCart }): ReactElement => {

    return (
        <Button onClick={() => deleteFromCart(PerfumeId)} icon={<CloseOutlined />}>
            Remove
        </Button>
    );
});

export default RemoveButton;
