import React, { FC, ReactElement } from "react";
import { Row } from "antd";

import PerfumeCard from "../../../../components/PerfumeCard/PerfumeCard";
import { PerfumeResponse } from "../../../../types/types";

type PropsType = {
    Perfumes: Array<PerfumeResponse>;
};

const PerfumeCardsSliderItem: FC<PropsType> = ({ Perfumes }): ReactElement => {
    return (
        <Row gutter={[16, 16]} style={{ margin: 10, marginTop: 10, marginBottom: 10 }}>
            {Perfumes.slice(0, 4).map((Perfume) => (
                <PerfumeCard key={Perfume.id} Perfume={Perfume} colSpan={6} />
            ))}
        </Row>
    );
};

export default PerfumeCardsSliderItem;
