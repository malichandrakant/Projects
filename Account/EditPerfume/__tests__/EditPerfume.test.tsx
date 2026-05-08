import React from "react";
import { Button } from "antd";

import {
    createMockRootState,
    mockDispatch,
    mountWithStore,
    waitForComponentToRender
} from "../../../../utils/test/testHelper";
import { LoadingStatus } from "../../../../types/types";
import { mockFullPerfumeResponse } from "../../../../utils/test/__mocks__/Perfumes-mock";
import EditPerfume from "../EditPerfume";

window.scrollTo = jest.fn();

describe("EditPerfume", () => {
    const mockRootStore = createMockRootState(LoadingStatus.SUCCESS);
    let mockDispatchFn: jest.Mock;

    beforeEach(() => {
        mockDispatchFn = mockDispatch();
    });

    it("should render correctly", () => {
        mountWithStore(<EditPerfume />);
        expect(mockDispatchFn).nthCalledWith(1, { payload: LoadingStatus.LOADED, type: "admin/setAdminLoadingState" });
        expect(mockDispatchFn).nthCalledWith(2, expect.any(Function));
    });

    it("should Perfume edited success", () => {
        const mockStore = {
            ...mockRootStore,
            admin: { ...mockRootStore.admin, isPerfumeEdited: true },
            Perfume: { ...mockRootStore.Perfume, Perfume: mockFullPerfumeResponse }
        };
        mountWithStore(<EditPerfume />, mockStore);
        expect(mockDispatchFn).nthCalledWith(3, { payload: LoadingStatus.SUCCESS, type: "admin/resetAdminState" });
    });

    it("should click onFormSubmit", async () => {
        const wrapper = mountWithStore(<EditPerfume />);
        wrapper.find(Button).at(0).simulate("submit");
        await waitForComponentToRender(wrapper);
        expect(mockDispatchFn).nthCalledWith(3, expect.any(Function));
    });

    it("should unmount EditPerfume", () => {
        const wrapper = mountWithStore(<EditPerfume />);
        wrapper.unmount();
        expect(mockDispatchFn).nthCalledWith(3, { payload: LoadingStatus.LOADING, type: "admin/resetAdminState" });
    });
});
