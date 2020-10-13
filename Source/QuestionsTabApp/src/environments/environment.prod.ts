export const environment = {
    production: false,
    apiBaseUrl: "https://bgs-qbot.azurewebsites.net/api/Request/",
    selfUrl: "https://bgs-qbot-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "e0a762aa-f74f-473a-b086-4ceaefb71fbd",
        clientId: "ba44a419-4680-44a5-af54-814f32272f85",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
