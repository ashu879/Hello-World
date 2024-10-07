function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.google.com") || host == "google.com") {
        return "PROXY 0.0.0.0:0";
    }
    return "DIRECT";
}
