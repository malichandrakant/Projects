import React, { FC, ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    ShoppingCartOutlined,
    ShoppingOutlined
} from "@ant-design/icons";
import {
    Button,
    Col,
    Row,
    Typography
} from "antd";
import { Link } from "react-router-dom";

import ContentTitle from "../../components/ContentTitle/ContentTitle";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import Spinner from "../../components/Spinner/Spinner";

import {
    selectCartItems,
    selectIsCartLoading
} from "../../redux-toolkit/cart/cart-selector";

import { fetchCart } from "../../redux-toolkit/cart/cart-thunks";

import {
    calculateCartPrice,
    removePerfumeById,
    resetCartState,
    setCartItemsCount
} from "../../redux-toolkit/cart/cart-slice";

import CartItem from "./CartItem/CartItem";
import CartTotalPrice from "./CartTotalPrice";

import { ORDER } from "../../constants/routeConstants";

import "./Cart.css";

const Cart: FC = (): ReactElement => {
    const dispatch = useDispatch();

    const Perfumes = useSelector(selectCartItems);
    const isCartLoading = useSelector(selectIsCartLoading);

    const [PerfumeInCart, setPerfumeInCart] = useState(() => new Map());

    useEffect(() => {
        window.scrollTo(0, 0);

        const PerfumesFromLocalStorage: Map<number, number> = new Map(
            JSON.parse(localStorage.getItem("Perfumes") as string)
        );

        dispatch(fetchCart(Array.from(PerfumesFromLocalStorage.keys())));

        PerfumesFromLocalStorage.forEach((value: number, key: number) => {
            setPerfumeInCart(PerfumeInCart.set(key, value));
        });

        return () => {
            dispatch(resetCartState());
        };
    }, []);

    const deleteFromCart = (PerfumeId: number): void => {
        PerfumeInCart.delete(PerfumeId);

        if (PerfumeInCart.size === 0) {
            localStorage.removeItem("Perfumes");
            setPerfumeInCart(new Map());
        } else {
            localStorage.setItem(
                "Perfumes",
                JSON.stringify(Array.from(PerfumeInCart.entries()))
            );
        }

        dispatch(removePerfumeById(PerfumeId));
        dispatch(setCartItemsCount(PerfumeInCart.size));
    };

    const onChangePerfumeItemCount = (
        PerfumeId: number,
        inputValue: number
    ): void => {
        setPerfumes(PerfumeId, inputValue);
        dispatch(calculateCartPrice(Perfumes));
    };

    const setPerfumes = (
        PerfumeId: number,
        PerfumeCount: number
    ): void => {
        setPerfumeInCart(
            PerfumeInCart.set(PerfumeId, PerfumeCount)
        );

        localStorage.setItem(
            "Perfumes",
            JSON.stringify(Array.from(PerfumeInCart.entries()))
        );
    };

    return (
        <ContentWrapper>
            <div className="cart-wrapper">
                {isCartLoading ? (
                    <Spinner />
                ) : (
                    <>
                        {/* HEADER */}
                        <div className="cart-header">
                            <ContentTitle
                                icon={<ShoppingCartOutlined />}
                                title={"Shopping Cart"}
                            />

                            <p className="cart-subtitle">
                                Review your selected products
                            </p>
                        </div>

                        {Perfumes.length === 0 ? (
                            <div className="cart-empty">
                                <ShoppingCartOutlined className="cart-empty-icon" />

                                <Typography.Title level={3}>
                                    Your cart is empty
                                </Typography.Title>

                                <p>
                                    Add some amazing Perfumes to continue shopping
                                </p>
                            </div>
                        ) : (
                            <Row gutter={[24, 24]}>
                                {/* LEFT SIDE */}
                                <Col xs={24} lg={16}>
                                    <div className="cart-list">
                                        {Perfumes.map((Perfume) => (
                                            <CartItem
                                                key={Perfume.id}
                                                Perfume={Perfume}
                                                PerfumeInCart={PerfumeInCart.get(Perfume.id)}
                                                onChangePerfumeItemCount={onChangePerfumeItemCount}
                                                deleteFromCart={deleteFromCart}
                                            />
                                        ))}
                                    </div>
                                </Col>

                                {/* RIGHT SIDE */}
                                <Col xs={24} lg={8}>
                                    <div className="cart-summary">
                                        <h2 className="cart-summary-title">
                                            Order Summary
                                        </h2>

                                        <CartTotalPrice />

                                        <Link to={ORDER}>
                                            <Button
                                                type="primary"
                                                size="large"
                                                icon={<ShoppingOutlined />}
                                                className="cart-checkout-btn"
                                            >
                                                Proceed to Checkout
                                            </Button>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        )}
                    </>
                )}
            </div>
        </ContentWrapper>
    );
};

export default Cart;