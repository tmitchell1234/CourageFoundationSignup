// TODO: Replace this information with our clientId once we have access to the developer portal.

const clientId = "927c0c41137b165756bba59b9dc100ee";
const sandboxClientId = "e179e357750320e2e652c80b61c4dc02";

// TODO: Change these redirect URI's.
const redirectUri = "https://0t3e4.csb.app/callback";
const sandboxRedirectUri = "https://0t3e4.csb.app/sandbox/callback";

const responseType = "token";

// TODO: Change verification scope to check what the
// Courage Foundation is looking to accept as members.
const scopes = [
    "military_us",
    "responder_us",
    "military_canada",
    "responder_canada",
].join(",");

export const groupsEndpoint = (sandbox) => {
    const endpoint = "https://groups.id.me";

    const parameters = [
        `client_id=${sandbox ? sandboxClientId : clientId}`,
        `redirect_uri=${sandbox ? sandboxRedirectUri : redirectUri}`,
        `response_type=${responseType}`,
        `scopes=${scopes}`
    ];

    if (sandbox) {
        parameters.push(`sandbox=${sandbox}`);
    }

    return `${endpoint}?${parameters.join("&")}`;
};
