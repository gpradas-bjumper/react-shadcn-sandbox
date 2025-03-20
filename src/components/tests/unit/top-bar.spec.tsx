import {cleanup, fireEvent, prettyDOM, render, screen} from "@testing-library/react";
import { beforeEach, describe, it, expect } from "vitest";
import TopBar from "@/components/top-bar.tsx";
import {SidebarProvider} from "@/components/ui/sidebar.tsx";

const component = (
    <SidebarProvider>
        <TopBar />
    </SidebarProvider>
)

describe('Top Bar Test:',() => {
    beforeEach(cleanup)

    it('should render component', () => {
        render(component);
    });

    it('should render text', () => {
        render(component);
        const element = screen.findByTestId("company-logo");
        expect(element).toBeTruthy()
    });
});
