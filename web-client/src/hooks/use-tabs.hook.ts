import { ReactElement, SyntheticEvent, useState } from "react";

export const useTabs = (tabContents: ReactElement[]) => {

    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    const handleTabChange = (_: SyntheticEvent, value: number) => {
        if (0 <= value && value < tabContents.length && currentTabIndex !== value) {
            setCurrentTabIndex(value);
        }
    }

    return {
        currentTabIndex,
        currentTab: tabContents[currentTabIndex],
        handleTabChange,
        tabContents,
    }

};