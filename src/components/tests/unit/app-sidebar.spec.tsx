import {cleanup, fireEvent, prettyDOM, render, screen} from "@testing-library/react";
import { beforeEach, describe, it, expect } from "vitest";
import AppSidebar from "@/components/app-sidebar.tsx";
import {SidebarProvider} from "@/components/ui/sidebar.tsx";

const component = (
    <SidebarProvider>
        <AppSidebar />
    </SidebarProvider>
)

describe('App Sidebar Test:',() => {
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
