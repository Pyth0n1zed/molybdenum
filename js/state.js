export const state = {
    tabs: [],
    activetab: 0,
    history: [],
    settings: {historyEnabled: true,},
};
export const createTabObj = (Url) => {
    state.tabs.push({url: Url, title: Url, favicon: "resources/icons/web_globe.ico", history: [], future: []}); 
    state.activetab = state.tabs.length - 1;
};
