function FindProxyForURL(url, host) {
    // Normalize the URL for easier matching
    host = host.toLowerCase();

    // Proxy specific sites
    if (shExpMatch(host, "*.example.com")) {
        return "PROXY proxy.example.com:8080";
    }

    // Direct access for localhost and local network
    if ((host == "localhost") || 
        (shExpMatch(host, "*.local")) || 
        (isInNet(host, "10.0.0.0", "255.0.0.0")) ||
        (isInNet(host, "172.16.0.0", "255.240.0.0")) ||
        (isInNet(host, "192.168.0.0", "255.255.0.0"))) {
        return "DIRECT";
    }

    // Default to a different proxy
    return "PROXY proxy2.example.com:8080";
}
