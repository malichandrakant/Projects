import { useHistory } from "react-router-dom";
import { CART } from "../constants/routeConstants";

interface UseCart {
    addToCart: () => void;
}

export const useCart = (PerfumeId: number): UseCart => {
    const history = useHistory();

    const addToCart = (): void => {
        let data: string | null = localStorage.getItem("Perfumes");
        let cart: Map<number, any> = data ? new Map(JSON.parse(data as string)) : new Map();

        if (cart.has(PerfumeId as number)) {
            cart.set(PerfumeId as number, cart.get(PerfumeId as number) + 1);
        } else {
            cart.set(PerfumeId as number, 1);
        }
        localStorage.setItem("Perfumes", JSON.stringify(Array.from(cart.entries())));
        history.push(CART);
    };

    return { addToCart };
};
