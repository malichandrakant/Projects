import React from "react";

import { mockCartPerfumesResponse } from "../../../../utils/test/__mocks__/Perfumes-mock";
import { mountWithStore } from "../../../../utils/test/testHelper";
import CartItemInfo from "../CartItemInfo";

describe("CartItemInfo", () => {
    it("should render correctly", () => {
        const mockPerfume = mockCartPerfumesResponse[0];
        const wrapper = mountWithStore(<CartItemInfo Perfume={mockPerfume} />);
        expect(wrapper.find("img").prop("src")).toBe(mockPerfume.filename);
        expect(wrapper.text().includes(mockPerfume.Perfumer)).toBe(true);
        expect(wrapper.text().includes(mockPerfume.PerfumeTitle)).toBe(true);
        expect(wrapper.text().includes(`${mockPerfume.volume} ml.`)).toBe(true);
    });
});
