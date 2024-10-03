function FindProxyForURL(url, host) {
    // Normalize the host for consistent matching
    host = host.toLowerCase();

    // List of domains to bypass the proxy
    var directSites = ["google.com", "facebook.com"];

    // Check if the host matches any of the domains to bypass
    for (var i = 0; i < directSites.length; i++) {
        if (dnsDomainIs(host, directSites[i]) || shExpMatch(host, "*." + directSites[i])) {
            return "DIRECT";
        }
    }

    // Default to using the proxy for all other domains
    return "PROXY proxyserver.example.com:8080";
}
