// Bug Bounty Tools Data
const bugBountyTools = [
    // Subdomain Enumeration
    {
        name: "Sublist3r",
        category: "subdomain-enumeration",
        description: "Fast subdomains enumeration tool for penetration testers",
        url: "https://github.com/aboul3la/Sublist3r",
        icon: "fas fa-sitemap"
    },
    {
        name: "Amass",
        category: "subdomain-enumeration",
        description: "In-depth Attack Surface Mapping and Asset Discovery",
        url: "https://github.com/OWASP/Amass",
        icon: "fas fa-network-wired"
    },
    {
        name: "massdns",
        category: "subdomain-enumeration",
        description: "A high-performance DNS stub resolver for bulk lookups and reconnaissance",
        url: "https://github.com/blechschmidt/massdns",
        icon: "fas fa-dns"
    },
    {
        name: "Findomain",
        category: "subdomain-enumeration",
        description: "The fastest and cross-platform subdomain enumerator",
        url: "https://github.com/Findomain/Findomain",
        icon: "fas fa-search"
    },
    {
        name: "Sudomy",
        category: "subdomain-enumeration",
        description: "Subdomain enumeration tool for automated reconnaissance",
        url: "https://github.com/Screetsec/Sudomy",
        icon: "fas fa-globe"
    },
    {
        name: "chaos-client",
        category: "subdomain-enumeration",
        description: "Go client to communicate with Chaos DNS API",
        url: "https://github.com/projectdiscovery/chaos-client",
        icon: "fab fa-golang"
    },
    {
        name: "domained",
        category: "subdomain-enumeration",
        description: "Multi Tool Subdomain Enumeration",
        url: "https://github.com/TypeError/domained",
        icon: "fas fa-tools"
    },
    {
        name: "shuffledns",
        category: "subdomain-enumeration",
        description: "Wrapper around massdns for subdomain enumeration with wildcard handling",
        url: "https://github.com/projectdiscovery/shuffledns",
        icon: "fas fa-random"
    },
    {
        name: "censys-subdomain-finder",
        category: "subdomain-enumeration",
        description: "Perform subdomain enumeration using certificate transparency logs",
        url: "https://github.com/christophetd/censys-subdomain-finder",
        icon: "fas fa-certificate"
    },
    {
        name: "Turbolist3r",
        category: "subdomain-enumeration",
        description: "Subdomain enumeration tool with analysis features",
        url: "https://github.com/fleetcaptain/Turbolist3r",
        icon: "fas fa-rocket"
    },
    {
        name: "tugarecon",
        category: "subdomain-enumeration",
        description: "Fast subdomains enumeration tool for penetration testers",
        url: "https://github.com/LordNeoStark/tugarecon",
        icon: "fas fa-binoculars"
    },
    {
        name: "as3nt",
        category: "subdomain-enumeration",
        description: "Another Subdomain ENumeration Tool",
        url: "https://github.com/cinerieus/as3nt",
        icon: "fas fa-eye"
    },
    {
        name: "Subra",
        category: "subdomain-enumeration",
        description: "A Web-UI for subdomain enumeration (subfinder)",
        url: "https://github.com/si9int/Subra",
        icon: "fas fa-desktop"
    },
    {
        name: "Substr3am",
        category: "subdomain-enumeration",
        description: "Passive reconnaissance by watching SSL certificates",
        url: "https://github.com/nexxai/Substr3am",
        icon: "fas fa-stream"
    },
    {
        name: "altdns",
        category: "subdomain-enumeration",
        description: "Generates permutations, alterations and mutations of subdomains",
        url: "https://github.com/infosec-au/altdns",
        icon: "fas fa-exchange-alt"
    },
    {
        name: "brutesubs",
        category: "subdomain-enumeration",
        description: "Automation framework for subdomain bruteforcing tools",
        url: "https://github.com/anshumanbh/brutesubs",
        icon: "fas fa-hammer"
    },
    {
        name: "dns-parallel-prober",
        category: "subdomain-enumeration",
        description: "Parallelised domain name prober for fast subdomain discovery",
        url: "https://github.com/lorenzog/dns-parallel-prober",
        icon: "fas fa-bolt"
    },
    {
        name: "dnscan",
        category: "subdomain-enumeration",
        description: "Python wordlist-based DNS subdomain scanner",
        url: "https://github.com/rbsec/dnscan",
        icon: "fab fa-python"
    },
    {
        name: "knock",
        category: "subdomain-enumeration",
        description: "Python tool to enumerate subdomains through wordlist",
        url: "https://github.com/guelfoweb/knock",
        icon: "fas fa-door-open"
    },
    {
        name: "hakrevdns",
        category: "subdomain-enumeration",
        description: "Small, fast tool for performing reverse DNS lookups",
        url: "https://github.com/hakluke/hakrevdns",
        icon: "fas fa-undo"
    },
    {
        name: "dnsx",
        category: "subdomain-enumeration",
        description: "Fast and multi-purpose DNS toolkit",
        url: "https://github.com/projectdiscovery/dnsx",
        icon: "fas fa-server"
    },
    {
        name: "subfinder",
        category: "subdomain-enumeration",
        description: "Subdomain discovery tool that discovers valid subdomains",
        url: "https://github.com/projectdiscovery/subfinder",
        icon: "fas fa-search-plus"
    },
    {
        name: "assetfinder",
        category: "subdomain-enumeration",
        description: "Find domains and subdomains related to a given domain",
        url: "https://github.com/tomnomnom/assetfinder",
        icon: "fas fa-puzzle-piece"
    },
    {
        name: "crtndstry",
        category: "subdomain-enumeration",
        description: "Yet another subdomain finder",
        url: "https://github.com/nahamsec/crtndstry",
        icon: "fas fa-industry"
    },
    {
        name: "VHostScan",
        category: "subdomain-enumeration",
        description: "Virtual host scanner that performs reverse lookups",
        url: "https://github.com/codingo/VHostScan",
        icon: "fas fa-scan"
    },
    {
        name: "scilla",
        category: "subdomain-enumeration",
        description: "Information Gathering tool - DNS/Subdomains/Ports/Directories",
        url: "https://github.com/edoardottt/scilla",
        icon: "fas fa-spider"
    },
    {
        name: "sub3suite",
        category: "subdomain-enumeration",
        description: "Research-grade suite for subdomain enumeration and intelligence gathering",
        url: "https://github.com/3nock/sub3suite",
        icon: "fas fa-cubes"
    },

    // Port Scanning
    {
        name: "masscan",
        category: "port-scanning",
        description: "TCP port scanner, scanning entire Internet in under 5 minutes",
        url: "https://github.com/robertdavidgraham/masscan",
        icon: "fas fa-tachometer-alt"
    },
    {
        name: "RustScan",
        category: "port-scanning",
        description: "The Modern Port Scanner written in Rust",
        url: "https://github.com/RustScan/RustScan",
        icon: "fab fa-rust"
    },
    {
        name: "naabu",
        category: "port-scanning",
        description: "Fast port scanner with focus on reliability and simplicity",
        url: "https://github.com/projectdiscovery/naabu",
        icon: "fas fa-ethernet"
    },
    {
        name: "nmap",
        category: "port-scanning",
        description: "Network Mapper - the legendary network discovery tool",
        url: "https://github.com/nmap/nmap",
        icon: "fas fa-map"
    },
    {
        name: "sandmap",
        category: "port-scanning",
        description: "Nmap on steroids with 31 modules and 459 scan profiles",
        url: "https://github.com/trimstray/sandmap",
        icon: "fas fa-satellite-dish"
    },
    {
        name: "ScanCannon",
        category: "port-scanning",
        description: "Combines masscan speed with nmap detailed enumeration",
        url: "https://github.com/johnnyxmas/ScanCannon",
        icon: "fas fa-crosshairs"
    },

    // Screenshots
    {
        name: "EyeWitness",
        category: "screenshots",
        description: "Take screenshots of websites and identify default credentials",
        url: "https://github.com/FortyNorthSecurity/EyeWitness",
        icon: "fas fa-eye"
    },
    {
        name: "aquatone",
        category: "screenshots",
        description: "Visual inspection of websites across large number of hosts",
        url: "https://github.com/michenriksen/aquatone",
        icon: "fas fa-camera"
    },
    {
        name: "screenshoteer",
        category: "screenshots",
        description: "Make website screenshots and mobile emulations",
        url: "https://github.com/vladocar/screenshoteer",
        icon: "fas fa-mobile-alt"
    },
    {
        name: "gowitness",
        category: "screenshots",
        description: "Golang web screenshot utility using Chrome Headless",
        url: "https://github.com/sensepost/gowitness",
        icon: "fab fa-chrome"
    },
    {
        name: "WitnessMe",
        category: "screenshots",
        description: "Web Inventory tool with Pyppeteer headless Chrome",
        url: "https://github.com/byt3bl33d3r/WitnessMe",
        icon: "fas fa-witness"
    },
    {
        name: "eyeballer",
        category: "screenshots",
        description: "Convolutional neural network for analyzing pentest screenshots",
        url: "https://github.com/BishopFox/eyeballer",
        icon: "fas fa-brain"
    },
    {
        name: "scrying",
        category: "screenshots",
        description: "Tool for collecting RDP, web and VNC screenshots",
        url: "https://github.com/nccgroup/scrying",
        icon: "fas fa-crystal-ball"
    },
    {
        name: "Depix",
        category: "screenshots",
        description: "Recovers passwords from pixelized screenshots",
        url: "https://github.com/beurtschipper/Depix",
        icon: "fas fa-unlock"
    },
    {
        name: "httpscreenshot",
        category: "screenshots",
        description: "Tool for grabbing screenshots and HTML of websites",
        url: "https://github.com/breenmachine/httpscreenshot/",
        icon: "fas fa-file-image"
    },

    // Technologies
    {
        name: "wappalyzer",
        category: "technologies",
        description: "Identify technology stack on websites",
        url: "https://github.com/AliasIO/wappalyzer",
        icon: "fas fa-cogs"
    },
    {
        name: "webanalyze",
        category: "technologies",
        description: "Port of Wappalyzer for automated mass scanning",
        url: "https://github.com/rverton/webanalyze",
        icon: "fas fa-chart-bar"
    },
    {
        name: "python-builtwith",
        category: "technologies",
        description: "BuiltWith API client for Python",
        url: "https://github.com/claymation/python-builtwith",
        icon: "fab fa-python"
    },
    {
        name: "whatweb",
        category: "technologies",
        description: "Next generation web scanner for technology identification",
        url: "https://github.com/urbanadventurer/whatweb",
        icon: "fas fa-question-circle"
    },
    {
        name: "retire.js",
        category: "technologies",
        description: "Scanner detecting JavaScript libraries with known vulnerabilities",
        url: "https://github.com/RetireJS/retire.js",
        icon: "fab fa-js-square"
    },
    {
        name: "httpx",
        category: "technologies",
        description: "Fast and multi-purpose HTTP toolkit with probers",
        url: "https://github.com/projectdiscovery/httpx",
        icon: "fas fa-globe"
    },
    {
        name: "fingerprintx",
        category: "technologies",
        description: "Standalone utility for service discovery on open ports",
        url: "https://github.com/praetorian-inc/fingerprintx",
        icon: "fas fa-fingerprint"
    },

    // Content Discovery
    {
        name: "gobuster",
        category: "content-discovery",
        description: "Directory/File, DNS and VHost busting tool written in Go",
        url: "https://github.com/OJ/gobuster",
        icon: "fab fa-golang"
    },
    {
        name: "recursebuster",
        category: "content-discovery",
        description: "Rapid content discovery tool for recursive querying",
        url: "https://github.com/C-Sto/recursebuster",
        icon: "fas fa-recycle"
    },
    {
        name: "feroxbuster",
        category: "content-discovery",
        description: "Fast, simple, recursive content discovery tool in Rust",
        url: "https://github.com/epi052/feroxbuster",
        icon: "fab fa-rust"
    },
    {
        name: "dirsearch",
        category: "content-discovery",
        description: "Web path scanner for directory and file discovery",
        url: "https://github.com/maurosoria/dirsearch",
        icon: "fas fa-folder-open"
    },
    {
        name: "filebuster",
        category: "content-discovery",
        description: "Extremely fast and flexible web fuzzer",
        url: "https://github.com/henshin/filebuster",
        icon: "fas fa-file-alt"
    },
    {
        name: "dirstalk",
        category: "content-discovery",
        description: "Modern alternative to dirbuster/dirb",
        url: "https://github.com/stefanoj3/dirstalk",
        icon: "fas fa-walking"
    },
    {
        name: "dirbuster-ng",
        category: "content-discovery",
        description: "C CLI implementation of the Java dirbuster tool",
        url: "https://github.com/digination/dirbuster-ng",
        icon: "fas fa-terminal"
    },
    {
        name: "gospider",
        category: "content-discovery",
        description: "Fast web spider written in Go",
        url: "https://github.com/jaeles-project/gospider",
        icon: "fas fa-spider"
    },
    {
        name: "hakrawler",
        category: "content-discovery",
        description: "Simple, fast web crawler for endpoint discovery",
        url: "https://github.com/hakluke/hakrawler",
        icon: "fas fa-bug"
    },
    {
        name: "crawley",
        category: "content-discovery",
        description: "Fast, feature-rich unix-way web scraper/crawler",
        url: "https://github.com/s0rg/crawley",
        icon: "fas fa-robot"
    },

    // Links
    {
        name: "LinkFinder",
        category: "links",
        description: "Python script that finds endpoints in JavaScript files",
        url: "https://github.com/GerbenJavado/LinkFinder",
        icon: "fas fa-link"
    },
    {
        name: "JS-Scan",
        category: "links",
        description: "JavaScript scanner to scrape URLs and other info",
        url: "https://github.com/zseano/JS-Scan",
        icon: "fab fa-js-square"
    },
    {
        name: "LinksDumper",
        category: "links",
        description: "Extract links/endpoints from responses and filter them",
        url: "https://github.com/arbazkiraak/LinksDumper",
        icon: "fas fa-download"
    },
    {
        name: "GoLinkFinder",
        category: "links",
        description: "Fast and minimal JS endpoint extractor",
        url: "https://github.com/0xsha/GoLinkFinder",
        icon: "fab fa-golang"
    },
    {
        name: "BurpJSLinkFinder",
        category: "links",
        description: "Burp Extension for passive JS endpoint scanning",
        url: "https://github.com/InitRoot/BurpJSLinkFinder",
        icon: "fas fa-plug"
    },
    {
        name: "urlgrab",
        category: "links",
        description: "Golang utility to spider through websites for links",
        url: "https://github.com/IAmStoxe/urlgrab",
        icon: "fas fa-grab"
    },
    {
        name: "waybackurls",
        category: "links",
        description: "Fetch URLs from Wayback Machine for a domain",
        url: "https://github.com/tomnomnom/waybackurls",
        icon: "fas fa-history"
    },
    {
        name: "gau",
        category: "links",
        description: "Fetch known URLs from multiple sources",
        url: "https://github.com/lc/gau",
        icon: "fas fa-database"
    },
    {
        name: "getJS",
        category: "links",
        description: "Tool to quickly get all JavaScript sources/files",
        url: "https://github.com/003random/getJS",
        icon: "fab fa-js"
    },
    {
        name: "linx",
        category: "links",
        description: "Reveals invisible links within JavaScript files",
        url: "https://github.com/riza/linx",
        icon: "fas fa-eye-slash"
    },

    // Parameters
    {
        name: "parameth",
        category: "parameters",
        description: "Tool to brute discover GET and POST parameters",
        url: "https://github.com/maK-/parameth",
        icon: "fas fa-question"
    },
    {
        name: "param-miner",
        category: "parameters",
        description: "Extension to identify hidden, unlinked parameters",
        url: "https://github.com/PortSwigger/param-miner",
        icon: "fas fa-pickaxe"
    },
    {
        name: "ParamPamPam",
        category: "parameters",
        description: "Tool for brute discovering GET and POST parameters",
        url: "https://github.com/Bo0oM/ParamPamPam",
        icon: "fas fa-drum"
    },
    {
        name: "Arjun",
        category: "parameters",
        description: "HTTP parameter discovery suite",
        url: "https://github.com/s0md3v/Arjun",
        icon: "fas fa-bow-arrow"
    },
    {
        name: "ParamSpider",
        category: "parameters",
        description: "Mining parameters from dark corners of Web Archives",
        url: "https://github.com/devanshbatham/ParamSpider",
        icon: "fas fa-spider"
    },
    {
        name: "x8",
        category: "parameters",
        description: "Hidden parameters discovery suite written in Rust",
        url: "https://github.com/Sh1Yo/x8",
        icon: "fab fa-rust"
    },

    // Fuzzing
    {
        name: "wfuzz",
        category: "fuzzing",
        description: "Web application fuzzer for security testing",
        url: "https://github.com/xmendez/wfuzz",
        icon: "fas fa-bomb"
    },
    {
        name: "ffuf",
        category: "fuzzing",
        description: "Fast web fuzzer written in Go",
        url: "https://github.com/ffuf/ffuf",
        icon: "fab fa-golang"
    },
    {
        name: "fuzzdb",
        category: "fuzzing",
        description: "Dictionary of attack patterns and primitives",
        url: "https://github.com/fuzzdb-project/fuzzdb",
        icon: "fas fa-book"
    },
    {
        name: "IntruderPayloads",
        category: "fuzzing",
        description: "Collection of Burpsuite payloads and fuzz lists",
        url: "https://github.com/1N3/IntruderPayloads",
        icon: "fas fa-list"
    },
    {
        name: "fuzz.txt",
        category: "fuzzing",
        description: "Potentially dangerous files wordlist",
        url: "https://github.com/Bo0oM/fuzz.txt",
        icon: "fas fa-file-code"
    },
    {
        name: "fuzzilli",
        category: "fuzzing",
        description: "JavaScript Engine Fuzzer",
        url: "https://github.com/googleprojectzero/fuzzilli",
        icon: "fab fa-js-square"
    },
    {
        name: "fuzzapi",
        category: "fuzzing",
        description: "Tool for REST API pentesting using API_Fuzzer",
        url: "https://github.com/Fuzzapi/fuzzapi",
        icon: "fas fa-api"
    },
    {
        name: "qsfuzz",
        category: "fuzzing",
        description: "Query String Fuzzer to identify vulnerabilities",
        url: "https://github.com/ameenmaali/qsfuzz",
        icon: "fas fa-search"
    },
    {
        name: "vaf",
        category: "fuzzing",
        description: "Very advanced web fuzzer written in Nim",
        url: "https://github.com/d4rckh/vaf",
        icon: "fas fa-rocket"
    },

    // Command Injection
    {
        name: "commix",
        category: "command-injection",
        description: "Automated OS command injection and exploitation tool",
        url: "https://github.com/commixproject/commix",
        icon: "fas fa-terminal"
    },

    // CORS Misconfiguration
    {
        name: "Corsy",
        category: "cors-misconfiguration",
        description: "CORS Misconfiguration Scanner",
        url: "https://github.com/s0md3v/Corsy",
        icon: "fas fa-globe-americas"
    },
    {
        name: "CORStest",
        category: "cors-misconfiguration",
        description: "Simple CORS misconfiguration scanner",
        url: "https://github.com/RUB-NDS/CORStest",
        icon: "fas fa-shield-alt"
    },

    // CRLF Injection
    {
        name: "CRLFsuite",
        category: "crlf-injection",
        description: "Fast CRLF injection scanner",
        url: "https://github.com/Nefcore/CRLFsuite",
        icon: "fas fa-code"
    },
    {
        name: "crlfuzz",
        category: "crlf-injection",
        description: "Fast tool to scan CRLF injection",
        url: "https://github.com/dwisiswant0/crlfuzz",
        icon: "fas fa-bug"
    },

    // SQL Injection
    {
        name: "sqlmap",
        category: "sql-injection",
        description: "Automatic SQL injection and database takeover tool",
        url: "https://github.com/sqlmapproject/sqlmap",
        icon: "fas fa-database"
    },
    {
        name: "NoSQLMap",
        category: "sql-injection",
        description: "Automated NoSQL database enumeration and exploitation",
        url: "https://github.com/codingo/NoSQLMap",
        icon: "fas fa-leaf"
    },

    // XSS Injection
    {
        name: "XSStrike",
        category: "xss-injection",
        description: "Most advanced XSS scanner",
        url: "https://github.com/s0md3v/XSStrike",
        icon: "fas fa-code"
    },
    {
        name: "xssor2",
        category: "xss-injection",
        description: "XSS'OR - Hack with JavaScript",
        url: "https://github.com/evilcos/xssor2",
        icon: "fab fa-js-square"
    },
    {
        name: "dalfox",
        category: "xss-injection",
        description: "DalFox is a powerful open-source XSS scanner",
        url: "https://github.com/hahwul/dalfox",
        icon: "fas fa-fox"
    },

    // Miscellaneous
    {
        name: "SecLists",
        category: "miscellaneous",
        description: "Collection of multiple types of lists for security assessments",
        url: "https://github.com/danielmiessler/SecLists",
        icon: "fas fa-list-ul"
    },
    {
        name: "PayloadsAllTheThings",
        category: "miscellaneous",
        description: "List of useful payloads and bypass for Web Application Security",
        url: "https://github.com/swisskyrepo/PayloadsAllTheThings",
        icon: "fas fa-rocket"
    },
    {
        name: "Nuclei",
        category: "miscellaneous",
        description: "Fast and customisable vulnerability scanner",
        url: "https://github.com/projectdiscovery/nuclei",
        icon: "fas fa-atom"
    }
];

// Categories with their icons and descriptions
const categories = [
    {
        name: "Subdomain Enumeration",
        key: "subdomain-enumeration",
        icon: "fas fa-sitemap",
        description: "Tools for discovering subdomains and expanding attack surface"
    },
    {
        name: "Port Scanning",
        key: "port-scanning",
        icon: "fas fa-network-wired",
        description: "Network port scanners for service discovery"
    },
    {
        name: "Screenshots",
        key: "screenshots",
        icon: "fas fa-camera",
        description: "Web screenshot and visual reconnaissance tools"
    },
    {
        name: "Technologies",
        key: "technologies",
        icon: "fas fa-cogs",
        description: "Technology stack identification and fingerprinting"
    },
    {
        name: "Content Discovery",
        key: "content-discovery",
        icon: "fas fa-folder-open",
        description: "Directory and file enumeration tools"
    },
    {
        name: "Links",
        key: "links",
        icon: "fas fa-link",
        description: "URL and endpoint discovery tools"
    },
    {
        name: "Parameters",
        key: "parameters",
        icon: "fas fa-question",
        description: "Parameter discovery and analysis tools"
    },
    {
        name: "Fuzzing",
        key: "fuzzing",
        icon: "fas fa-bomb",
        description: "Web application fuzzing and testing tools"
    },
    {
        name: "Command Injection",
        key: "command-injection",
        icon: "fas fa-terminal",
        description: "OS command injection testing tools"
    },
    {
        name: "CORS Misconfiguration",
        key: "cors-misconfiguration",
        icon: "fas fa-globe-americas",
        description: "Cross-Origin Resource Sharing testing tools"
    },
    {
        name: "CRLF Injection",
        key: "crlf-injection",
        icon: "fas fa-code",
        description: "Carriage Return Line Feed injection scanners"
    },
    {
        name: "SQL Injection",
        key: "sql-injection",
        icon: "fas fa-database",
        description: "SQL injection detection and exploitation tools"
    },
    {
        name: "XSS Injection",
        key: "xss-injection",
        icon: "fas fa-code",
        description: "Cross-Site Scripting vulnerability scanners"
    },
    {
        name: "Miscellaneous",
        key: "miscellaneous",
        icon: "fas fa-tools",
        description: "General security testing and utility tools"
    }
];
