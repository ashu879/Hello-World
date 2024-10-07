function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.facebook.com") || host == "facebook.com") {
        return "PROXY 127.0.0.1:80";
    }
    return "DIRECT";
}
