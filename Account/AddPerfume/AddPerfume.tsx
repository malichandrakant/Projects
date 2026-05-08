import React, { FC, ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, notification, Row, Upload } from "antd";
import { PlusSquareFilled, PlusSquareOutlined, UploadOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/lib/upload/interface";

import {
    selectAdminStateErrors,
    selectIsAdminStateLoading,
    selectIsPerfumeAdded
} from "../../../redux-toolkit/admin/admin-selector";
import { resetAdminState, setAdminLoadingState } from "../../../redux-toolkit/admin/admin-slice";
import { LoadingStatus } from "../../../types/types";
import { addPerfume } from "../../../redux-toolkit/admin/admin-thunks";
import ContentTitle from "../../../components/ContentTitle/ContentTitle";
import AddFormInput from "./AddFormInput";
import AddFormSelect from "./AddFormSelect";
import IconButton from "../../../components/IconButton/IconButton";

type AddPerfumeData = {
    PerfumeTitle: string;
    Perfumer: string;
    year: string;
    country: string;
    type: string;
    volume: string;
    PerfumeGender: string;
    fragranceTopNotes: string;
    fragranceMiddleNotes: string;
    fragranceBaseNotes: string;
    price: string;
};

const AddPerfume: FC = (): ReactElement => {
    const dispatch = useDispatch();
    const isPerfumeAdded = useSelector(selectIsPerfumeAdded);
    const ispPerfumeLoading = useSelector(selectIsAdminStateLoading);
    const PerfumeErrors = useSelector(selectAdminStateErrors);
    const [file, setFile] = React.useState<string>("");

    useEffect(() => {
        dispatch(setAdminLoadingState(LoadingStatus.LOADED));

        return () => {
            dispatch(resetAdminState(LoadingStatus.LOADING));
        };
    }, []);

    useEffect(() => {
        if (isPerfumeAdded) {
            window.scrollTo(0, 0);
            notification.success({
                message: "Perfume added",
                description: "Perfume successfully added!"
            });
            dispatch(resetAdminState(LoadingStatus.SUCCESS));
        }
    }, [isPerfumeAdded]);

    const onFormSubmit = (data: AddPerfumeData): void => {
        const bodyFormData: FormData = new FormData();
        // @ts-ignore
        bodyFormData.append("file", { file });
        bodyFormData.append(
            "Perfume",
            new Blob([JSON.stringify({ ...data, PerfumeRating: 0 })], { type: "application/json" })
        );

        dispatch(addPerfume(bodyFormData));
    };

    const handleUpload = ({ file }: UploadChangeParam<any>): void => {
        setFile(file);
    };

    return (
        <>
            <ContentTitle title={"Add Perfume"} titleLevel={4} icon={<PlusSquareOutlined />} />
            <Form onFinish={onFormSubmit}>
                <Row gutter={32}>
                    <Col span={12}>
                        <AddFormInput
                            title={"Perfume title"}
                            name={"PerfumeTitle"}
                            error={PerfumeErrors.PerfumeTitleError}
                            placeholder={"Enter the Perfume title"}
                            disabled={ispPerfumeLoading}
                        />
                        <AddFormInput
                            title={"Release year"}
                            name={"year"}
                            error={PerfumeErrors.yearError}
                            placeholder={"Enter the release year"}
                            disabled={ispPerfumeLoading}
                        />
                        <AddFormSelect
                            title={"Perfume type"}
                            name={"type"}
                            error={PerfumeErrors.typeError}
                            placeholder={"Eau de Parfum"}
                            disabled={ispPerfumeLoading}
                            values={["Eau de Parfum", "Eau de Toilette"]}
                        />
                        <AddFormSelect
                            title={"Gender"}
                            name={"PerfumeGender"}
                            error={PerfumeErrors.PerfumeGenderError}
                            placeholder={"male"}
                            disabled={ispPerfumeLoading}
                            values={["male", "female"]}
                        />
                        <AddFormInput
                            title={"Heart notes"}
                            name={"fragranceMiddleNotes"}
                            error={PerfumeErrors.fragranceMiddleNotesError}
                            placeholder={"Enter the heart notes"}
                            disabled={ispPerfumeLoading}
                        />
                        <AddFormInput
                            title={"Price"}
                            name={"price"}
                            error={PerfumeErrors.priceError}
                            placeholder={"Enter the price"}
                            disabled={ispPerfumeLoading}
                        />
                    </Col>
                    <Col span={12}>
                        <AddFormInput
                            title={"Brand"}
                            name={"Perfumer"}
                            error={PerfumeErrors.PerfumerError}
                            placeholder={"Enter the brand"}
                            disabled={ispPerfumeLoading}
                        />
                        <AddFormInput
                            title={"Manufacturer country"}
                            name={"country"}
                            error={PerfumeErrors.countryError}
                            placeholder={"Enter the manufacturer country"}
                            disabled={ispPerfumeLoading}
                        />
                        <AddFormInput
                            title={"Volume"}
                            name={"volume"}
                            error={PerfumeErrors.volumeError}
                            placeholder={"Enter the volume"}
                            disabled={ispPerfumeLoading}
                        />
                        <AddFormInput
                            title={"Top notes"}
                            name={"fragranceTopNotes"}
                            error={PerfumeErrors.fragranceTopNotesError}
                            placeholder={"Enter the top notes"}
                            disabled={ispPerfumeLoading}
                        />
                        <AddFormInput
                            title={"Base notes"}
                            name={"fragranceBaseNotes"}
                            error={PerfumeErrors.fragranceBaseNotesError}
                            placeholder={"Enter the base notes"}
                            disabled={ispPerfumeLoading}
                        />
                        <Upload name={"file"} onChange={handleUpload} beforeUpload={() => false}>
                            <Button icon={<UploadOutlined />} style={{ marginTop: 22 }}>
                                Click to Upload
                            </Button>
                        </Upload>
                    </Col>
                </Row>
                <IconButton title={"Add"} icon={<PlusSquareFilled />} />
            </Form>
        </>
    );
};

export default AddPerfume;
