import BjumperLogo from '../assets/svg/logoBjumperLogin.svg'
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
} from "@/components/ui/sidebar.tsx";
import {Calendar, Home, Inbox, Search, Settings} from "lucide-react";


const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Link 1",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Link 2",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Link 3",
        url: "#",
        icon: Search,
    },
    {
        title: "Link 4",
        url: "#",
        icon: Settings,
    },
];


const LinkElements = () => {
    const listItems = items.map((item) => {
        const IconComponent = (item.icon);
        return (
                <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                        <a href={item.url}>
                            <IconComponent/>
                            <span>{item.title}</span>
                        </a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            )
        }
    );
    return (listItems);
}

function AppSidebar() {

    return (
        <>
        <Sidebar>
            <SidebarContent>
                <SidebarGroup className="pt-[20px]">
                    <SidebarGroupLabel className="justify-center mb-[20px]">
                        <div className="h-full">
                            <a href="/" className="max-h-fit">
                                <img
                                src={BjumperLogo}
                                data-test-id="company-logo"
                                className="block h-full"
                                height="35"
                                />
                            </a>
                        </div>
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <LinkElements />
                    </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
        </>
    )
}

export default AppSidebar
