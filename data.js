// Bug Bounty Tools Data - Complete Collection
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
        icon: "fas fa-server"
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
        icon: "fas fa-shuffle"
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
        icon: "fas fa-satellite-dish"
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
        icon: "fas fa-video"
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
        icon: "fas fa-hand-rock"
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
        icon: "fas fa-archway"
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
        icon: "fas fa-cube"
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
    {
        name: "cors-scanner",
        category: "cors-misconfiguration",
        description: "Multi-threaded scanner for CORS flaws/misconfigurations",
        url: "https://github.com/laconicwolf/cors-scanner",
        icon: "fas fa-search-location"
    },
    {
        name: "CorsMe",
        category: "cors-misconfiguration",
        description: "Cross Origin Resource Sharing MisConfiguration Scanner",
        url: "https://github.com/Shivangx01b/CorsMe",
        icon: "fas fa-crosshairs"
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
    {
        name: "CRLF-Injection-Scanner",
        category: "crlf-injection",
        description: "Command line tool for testing CRLF injection",
        url: "https://github.com/MichaelStott/CRLF-Injection-Scanner",
        icon: "fas fa-scan"
    },
    {
        name: "Injectus",
        category: "crlf-injection",
        description: "CRLF and open redirect fuzzer",
        url: "https://github.com/BountyStrike/Injectus",
        icon: "fas fa-syringe"
    },

    // CSRF Injection
    {
        name: "XSRFProbe",
        category: "csrf-injection",
        description: "Prime Cross Site Request Forgery (CSRF) Audit and Exploitation Toolkit",
        url: "https://github.com/0xInfection/XSRFProbe",
        icon: "fas fa-shield-virus"
    },

    // Directory Traversal
    {
        name: "dotdotpwn",
        category: "directory-traversal",
        description: "DotDotPwn - The Directory Traversal Fuzzer",
        url: "https://github.com/wireghoul/dotdotpwn",
        icon: "fas fa-folder-minus"
    },
    {
        name: "FDsploit",
        category: "directory-traversal",
        description: "File Inclusion & Directory Traversal fuzzing, enumeration & exploitation tool",
        url: "https://github.com/chrispetrou/FDsploit",
        icon: "fas fa-folder-plus"
    },
    {
        name: "off-by-slash",
        category: "directory-traversal",
        description: "Burp extension to detect alias traversal via NGINX misconfiguration",
        url: "https://github.com/bayotop/off-by-slash",
        icon: "fas fa-slash"
    },
    {
        name: "liffier",
        category: "directory-traversal",
        description: "Automated path traversal detection tool",
        url: "https://github.com/momenbasel/liffier",
        icon: "fas fa-route"
    },

    // File Inclusion
    {
        name: "liffy",
        category: "file-inclusion",
        description: "Local file inclusion exploitation tool",
        url: "https://github.com/mzfr/liffy",
        icon: "fas fa-file-import"
    },
    {
        name: "Burp-LFI-tests",
        category: "file-inclusion",
        description: "Fuzzing for LFI using Burpsuite",
        url: "https://github.com/Team-Firebugs/Burp-LFI-tests",
        icon: "fas fa-vial"
    },
    {
        name: "LFI-Enum",
        category: "file-inclusion",
        description: "Scripts to execute enumeration via LFI",
        url: "https://github.com/mthbernardes/LFI-Enum",
        icon: "fas fa-list-ol"
    },
    {
        name: "LFISuite",
        category: "file-inclusion",
        description: "Totally Automatic LFI Exploiter (+ Reverse Shell) and Scanner",
        url: "https://github.com/D35m0nd142/LFISuite",
        icon: "fas fa-toolbox"
    },
    {
        name: "LFI-files",
        category: "file-inclusion",
        description: "Wordlist to bruteforce for LFI",
        url: "https://github.com/hussein98d/LFI-files",
        icon: "fas fa-file-alt"
    },

    // GraphQL Injection
    {
        name: "inql",
        category: "graphql-injection",
        description: "InQL - A Burp Extension for GraphQL Security Testing",
        url: "https://github.com/doyensec/inql",
        icon: "fas fa-project-diagram"
    },
    {
        name: "GraphQLmap",
        category: "graphql-injection",
        description: "GraphQLmap is a scripting engine to interact with GraphQL endpoints",
        url: "https://github.com/swisskyrepo/GraphQLmap",
        icon: "fas fa-sitemap"
    },
    {
        name: "shapeshifter",
        category: "graphql-injection",
        description: "GraphQL security testing tool",
        url: "https://github.com/szski/shapeshifter",
        icon: "fas fa-shapes"
    },
    {
        name: "graphql_beautifier",
        category: "graphql-injection",
        description: "Burp Suite extension to help make GraphQL requests more readable",
        url: "https://github.com/zidekmat/graphql_beautifier",
        icon: "fas fa-magic"
    },
    {
        name: "clairvoyance",
        category: "graphql-injection",
        description: "Obtain GraphQL API schema despite disabled introspection",
        url: "https://github.com/nikitastupin/clairvoyance",
        icon: "fas fa-crystal-ball"
    },

    // Header Injection
    {
        name: "headi",
        category: "header-injection",
        description: "Customisable and automated HTTP header injection",
        url: "https://github.com/mlcsec/headi",
        icon: "fas fa-heading"
    },

    // Insecure Deserialization
    {
        name: "ysoserial",
        category: "insecure-deserialization",
        description: "Proof-of-concept tool for generating payloads that exploit unsafe Java object deserialization",
        url: "https://github.com/frohoff/ysoserial",
        icon: "fab fa-java"
    },
    {
        name: "GadgetProbe",
        category: "insecure-deserialization",
        description: "Probe endpoints consuming Java serialized objects",
        url: "https://github.com/BishopFox/GadgetProbe",
        icon: "fas fa-search-plus"
    },
    {
        name: "ysoserial.net",
        category: "insecure-deserialization",
        description: "Deserialization payload generator for .NET formatters",
        url: "https://github.com/pwntester/ysoserial.net",
        icon: "fas fa-code"
    },
    {
        name: "phpggc",
        category: "insecure-deserialization",
        description: "PHPGGC is a library of PHP unserialize() payloads",
        url: "https://github.com/ambionics/phpggc",
        icon: "fab fa-php"
    },

    // Insecure Direct Object References
    {
        name: "Autorize",
        category: "idor",
        description: "Automatic authorization enforcement detection extension for Burp Suite",
        url: "https://github.com/Quitten/Autorize",
        icon: "fas fa-user-shield"
    },

    // Open Redirect
    {
        name: "Oralyzer",
        category: "open-redirect",
        description: "Open Redirection Analyzer",
        url: "https://github.com/r0075h3ll/Oralyzer",
        icon: "fas fa-external-link-alt"
    },
    {
        name: "dom-red",
        category: "open-redirect",
        description: "Script to check domains against open redirect vulnerability",
        url: "https://github.com/Naategh/dom-red",
        icon: "fas fa-arrows-alt"
    },
    {
        name: "OpenRedireX",
        category: "open-redirect",
        description: "A Fuzzer for OpenRedirect issues",
        url: "https://github.com/devanshbatham/OpenRedireX",
        icon: "fas fa-random"
    },

    // Race Condition
    {
        name: "razzer",
        category: "race-condition",
        description: "Kernel fuzzer focusing on race bugs",
        url: "https://github.com/compsec-snu/razzer",
        icon: "fas fa-flag-checkered"
    },
    {
        name: "racepwn",
        category: "race-condition",
        description: "Race Condition framework",
        url: "https://github.com/racepwn/racepwn",
        icon: "fas fa-stopwatch"
    },
    {
        name: "requests-racer",
        category: "race-condition",
        description: "Python library to exploit race conditions in web apps",
        url: "https://github.com/nccgroup/requests-racer",
        icon: "fas fa-running"
    },
    {
        name: "turbo-intruder",
        category: "race-condition",
        description: "Burp Suite extension for sending large numbers of HTTP requests",
        url: "https://github.com/PortSwigger/turbo-intruder",
        icon: "fas fa-bolt"
    },
    {
        name: "race-the-web",
        category: "race-condition",
        description: "Tests for race conditions in web applications",
        url: "https://github.com/TheHackerDev/race-the-web",
        icon: "fas fa-trophy"
    },

    // Request Smuggling
    {
        name: "http-request-smuggling",
        category: "request-smuggling",
        description: "HTTP Request Smuggling Detection Tool",
        url: "https://github.com/anshumanpattnaik/http-request-smuggling",
        icon: "fas fa-truck"
    },
    {
        name: "smuggler",
        category: "request-smuggling",
        description: "HTTP Request Smuggling / Desync testing tool",
        url: "https://github.com/defparam/smuggler",
        icon: "fas fa-user-secret"
    },
    {
        name: "h2csmuggler",
        category: "request-smuggling",
        description: "HTTP Request Smuggling over HTTP/2 Cleartext (h2c)",
        url: "https://github.com/BishopFox/h2csmuggler",
        icon: "fas fa-shipping-fast"
    },
    {
        name: "tiscripts",
        category: "request-smuggling",
        description: "Scripts to create Request Smuggling Desync payloads",
        url: "https://github.com/defparam/tiscripts",
        icon: "fas fa-scroll"
    },

    // Server Side Request Forgery
    {
        name: "SSRFmap",
        category: "ssrf",
        description: "Automatic SSRF fuzzer and exploitation tool",
        url: "https://github.com/swisskyrepo/SSRFmap",
        icon: "fas fa-map-marked-alt"
    },
    {
        name: "Gopherus",
        category: "ssrf",
        description: "Generates gopher link for exploiting SSRF and gaining RCE",
        url: "https://github.com/tarunkant/Gopherus",
        icon: "fas fa-gopher"
    },
    {
        name: "ground-control",
        category: "ssrf",
        description: "Collection of scripts for debugging SSRF, blind XSS, and XXE",
        url: "https://github.com/jobertabma/ground-control",
        icon: "fas fa-satellite"
    },
    {
        name: "SSRFire",
        category: "ssrf",
        description: "Automated SSRF finder tool",
        url: "https://github.com/micha3lb3n/SSRFire",
        icon: "fas fa-fire"
    },
    {
        name: "httprebind",
        category: "ssrf",
        description: "Automatic tool for DNS rebinding-based SSRF attacks",
        url: "https://github.com/daeken/httprebind",
        icon: "fas fa-retweet"
    },
    {
        name: "ssrf-sheriff",
        category: "ssrf",
        description: "Simple SSRF-testing sheriff written in Go",
        url: "https://github.com/teknogeek/ssrf-sheriff",
        icon: "fas fa-star"
    },
    {
        name: "B-XSSRF",
        category: "ssrf",
        description: "Toolkit to detect and keep track on Blind XSS, XXE & SSRF",
        url: "https://github.com/SpiderMate/B-XSSRF",
        icon: "fas fa-eye-slash"
    },
    {
        name: "extended-ssrf-search",
        category: "ssrf",
        description: "Smart SSRF scanner using different methods",
        url: "https://github.com/Damian89/extended-ssrf-search",
        icon: "fas fa-search-plus"
    },
    {
        name: "gaussrf",
        category: "ssrf",
        description: "Fetch URLs and filter for OpenRedirection or SSRF parameters",
        url: "https://github.com/KathanP19/gaussrf",
        icon: "fas fa-filter"
    },
    {
        name: "ssrfDetector",
        category: "ssrf",
        description: "Server-side request forgery detector",
        url: "https://github.com/JacobReynolds/ssrfDetector",
        icon: "fas fa-radar"
    },
    {
        name: "grafana-ssrf",
        category: "ssrf",
        description: "Authenticated SSRF in Grafana",
        url: "https://github.com/RandomRobbieBF/grafana-ssrf",
        icon: "fas fa-chart-line"
    },
    {
        name: "sentrySSRF",
        category: "ssrf",
        description: "Tool for searching Sentry config and checking blind SSRF",
        url: "https://github.com/xawdxawdx/sentrySSRF",
        icon: "fas fa-shield-alt"
    },
    {
        name: "lorsrf",
        category: "ssrf",
        description: "Bruteforcing hidden parameters to find SSRF vulnerability",
        url: "https://github.com/knassar702/lorsrf",
        icon: "fas fa-key"
    },
    {
        name: "singularity",
        category: "ssrf",
        description: "DNS rebinding attack framework",
        url: "https://github.com/nccgroup/singularity",
        icon: "fas fa-atom"
    },
    {
        name: "whonow",
        category: "ssrf",
        description: "Malicious DNS server for executing DNS Rebinding attacks",
        url: "https://github.com/brannondorsey/whonow",
        icon: "fas fa-question-circle"
    },
    {
        name: "dns-rebind-toolkit",
        category: "ssrf",
        description: "Front-end JavaScript toolkit for creating DNS rebinding attacks",
        url: "https://github.com/brannondorsey/dns-rebind-toolkit",
        icon: "fas fa-tools"
    },
    {
        name: "dref",
        category: "ssrf",
        description: "DNS Rebinding Exploitation Framework",
        url: "https://github.com/FSecureLABS/dref",
        icon: "fas fa-compass"
    },
    {
        name: "rbndr",
        category: "ssrf",
        description: "Simple DNS Rebinding Service",
        url: "https://github.com/taviso/rbndr",
        icon: "fas fa-sync"
    },
    {
        name: "dnsFookup",
        category: "ssrf",
        description: "DNS rebinding toolkit",
        url: "https://github.com/makuga01/dnsFookup",
        icon: "fas fa-search"
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
    {
        name: "SQLiScanner",
        category: "sql-injection",
        description: "Automatic SQL injection with Charles and sqlmap API",
        url: "https://github.com/0xbug/SQLiScanner",
        icon: "fas fa-bug"
    },
    {
        name: "SleuthQL",
        category: "sql-injection",
        description: "Python3 Burp History parsing tool to discover SQL injection points",
        url: "https://github.com/RhinoSecurityLabs/SleuthQL",
        icon: "fas fa-search"
    },
    {
        name: "mssqlproxy",
        category: "sql-injection",
        description: "Toolkit for lateral movement through compromised Microsoft SQL Server",
        url: "https://github.com/blackarrowsec/mssqlproxy",
        icon: "fas fa-server"
    },
    {
        name: "sqli-hunter",
        category: "sql-injection",
        description: "Simple HTTP/HTTPS proxy server and SQLMAP API wrapper",
        url: "https://github.com/zt2/sqli-hunter",
        icon: "fas fa-crosshairs"
    },
    {
        name: "waybackSqliScanner",
        category: "sql-injection",
        description: "Gather URLs from wayback machine and test for SQL injection",
        url: "https://github.com/ghostlulzhacks/waybackSqliScanner",
        icon: "fas fa-history"
    },
    {
        name: "ESC",
        category: "sql-injection",
        description: "Evil SQL Client - interactive .NET SQL console client",
        url: "https://github.com/NetSPI/ESC",
        icon: "fas fa-terminal"
    },
    {
        name: "mssqli-duet",
        category: "sql-injection",
        description: "SQL injection script for MSSQL with domain user extraction",
        url: "https://github.com/Keramas/mssqli-duet",
        icon: "fas fa-users"
    },
    {
        name: "burp-to-sqlmap",
        category: "sql-injection",
        description: "Performing SQLInjection test on Burp Suite requests using SQLMap",
        url: "https://github.com/Miladkhoshdel/burp-to-sqlmap",
        icon: "fas fa-exchange-alt"
    },
    {
        name: "BurpSQLTruncSanner",
        category: "sql-injection",
        description: "BurpSuite plugin for SQL Truncation vulnerabilities",
        url: "https://github.com/InitRoot/BurpSQLTruncSanner",
        icon: "fas fa-cut"
    },
    {
        name: "andor",
        category: "sql-injection",
        description: "Blind SQL Injection Tool with Golang",
        url: "https://github.com/sadicann/andor",
        icon: "fab fa-golang"
    },
    {
        name: "Blinder",
        category: "sql-injection",
        description: "Python library to automate time-based blind SQL injection",
        url: "https://github.com/mhaskar/Blinder",
        icon: "fas fa-clock"
    },
    {
        name: "sqliv",
        category: "sql-injection",
        description: "Massive SQL injection vulnerability scanner",
        url: "https://github.com/the-robot/sqliv",
        icon: "fas fa-robot"
    },
    {
        name: "nosqli",
        category: "sql-injection",
        description: "NoSQL Injection CLI tool for finding vulnerable websites using MongoDB",
        url: "https://github.com/Charlie-belmer/nosqli",
        icon: "fas fa-database"
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
        name: "xsscrapy",
        category: "xss-injection",
        description: "XSS spider - 66/66 wavsep XSS detected",
        url: "https://github.com/DanMcInerney/xsscrapy",
        icon: "fas fa-spider"
    },
    {
        name: "sleepy-puppy",
        category: "xss-injection",
        description: "Sleepy Puppy XSS Payload Management Framework",
        url: "https://github.com/Netflix-Skunkworks/sleepy-puppy",
        icon: "fas fa-dog"
    },
    {
        name: "ezXSS",
        category: "xss-injection",
        description: "Easy way to test (blind) Cross Site Scripting",
        url: "https://github.com/ssl/ezXSS",
        icon: "fas fa-eye-slash"
    },
    {
        name: "xsshunter",
        category: "xss-injection",
        description: "The XSS Hunter service - portable version of XSSHunter.com",
        url: "https://github.com/mandatoryprogrammer/xsshunter",
        icon: "fas fa-crosshairs"
    },
    {
        name: "dalfox",
        category: "xss-injection",
        description: "DalFox - Powerful open-source XSS scanner",
        url: "https://github.com/hahwul/dalfox",
        icon: "fas fa-fox"
    },
    {
        name: "xsser",
        category: "xss-injection",
        description: "Cross Site Scripter (XSSer) - automatic XSS framework",
        url: "https://github.com/epsylon/xsser",
        icon: "fas fa-skull-crossbones"
    },
    {
        name: "XSpear",
        category: "xss-injection",
        description: "Powerful XSS Scanning and Parameter analysis tool",
        url: "https://github.com/hahwul/XSpear",
        icon: "fas fa-spear"
    },
    {
        name: "weaponised-XSS-payloads",
        category: "xss-injection",
        description: "XSS payloads designed to turn alert(1) into P1",
        url: "https://github.com/hakluke/weaponised-XSS-payloads",
        icon: "fas fa-bomb"
    },
    {
        name: "tracy",
        category: "xss-injection",
        description: "Tool to assist with finding sinks and sources of web applications",
        url: "https://github.com/nccgroup/tracy",
        icon: "fas fa-route"
    },
    {
        name: "xssValidator",
        category: "xss-injection",
        description: "Burp intruder extender for automation and validation of XSS",
        url: "https://github.com/nVisium/xssValidator",
        icon: "fas fa-check-circle"
    },
    {
        name: "JSShell",
        category: "xss-injection",
        description: "Interactive multi-user web JS shell",
        url: "https://github.com/Den1al/JSShell",
        icon: "fas fa-terminal"
    },

    // XXE Injection
    {
        name: "XXEinjector",
        category: "xxe-injection",
        description: "Tool for automatic exploitation of XXE vulnerability",
        url: "https://github.com/enjoiz/XXEinjector",
        icon: "fas fa-syringe"
    },
    {
        name: "oxml_xxe",
        category: "xxe-injection",
        description: "Tool for embedding XXE/XML exploits into different filetypes",
        url: "https://github.com/BuffaloWill/oxml_xxe",
        icon: "fas fa-file-code"
    },
    {
        name: "xxe-recursive-download",
        category: "xxe-injection",
        description: "XXE recursive file/directory downloader",
        url: "https://github.com/AonCyberLabs/xxe-recursive-download",
        icon: "fas fa-download"
    },
    {
        name: "docem",
        category: "xxe-injection",
        description: "Utility to embed XXE and XSS payloads in docx,odt,pptx,etc",
        url: "https://github.com/whitel1st/docem",
        icon: "fas fa-file-word"
    },

    // Miscellaneous
    {
        name: "Nuclei",
        category: "miscellaneous",
        description: "Fast and customisable vulnerability scanner powered by templates",
        url: "https://github.com/projectdiscovery/nuclei",
        icon: "fas fa-atom"
    },
    {
        name: "Jaeles",
        category: "miscellaneous",
        description: "The Swiss Army knife for automated Web Application Testing",
        url: "https://github.com/jaeles-project/jaeles",
        icon: "fas fa-knife"
    },
    {
        name: "meg",
        category: "miscellaneous",
        description: "Tool for fetching lots of URLs without taking a toll on servers",
        url: "https://github.com/tomnomnom/meg",
        icon: "fas fa-download"
    },
    {
        name: "httprobe",
        category: "miscellaneous",
        description: "Take a list of domains and probe for working HTTP and HTTPS servers",
        url: "https://github.com/tomnomnom/httprobe",
        icon: "fas fa-stethoscope"
    },
    {
        name: "anew",
        category: "miscellaneous",
        description: "Tool for adding new lines to files, skipping duplicates",
        url: "https://github.com/tomnomnom/anew",
        icon: "fas fa-plus"
    },
    {
        name: "qsreplace",
        category: "miscellaneous",
        description: "Accept URLs on stdin, replace query string values",
        url: "https://github.com/tomnomnom/qsreplace",
        icon: "fas fa-exchange-alt"
    },
    {
        name: "unfurl",
        category: "miscellaneous",
        description: "Pull out bits of URLs provided on stdin",
        url: "https://github.com/tomnomnom/unfurl",
        icon: "fas fa-unlink"
    },
    {
        name: "gf",
        category: "miscellaneous",
        description: "Wrapper around grep to avoid typing common patterns",
        url: "https://github.com/tomnomnom/gf",
        icon: "fas fa-search"
    },
    {
        name: "SecLists",
        category: "miscellaneous",
        description: "Collection of multiple types of lists used during security assessments",
        url: "https://github.com/danielmiessler/SecLists",
        icon: "fas fa-list"
    },
    {
        name: "PayloadsAllTheThings",
        category: "miscellaneous",
        description: "List of useful payloads and bypass for Web Application Security",
        url: "https://github.com/swisskyrepo/PayloadsAllTheThings",
        icon: "fas fa-bomb"
    },

    // Passwords
    {
        name: "hashcat",
        category: "passwords",
        description: "World's fastest and most advanced password recovery utility",
        url: "https://github.com/hashcat/hashcat",
        icon: "fas fa-key"
    },
    {
        name: "John the Ripper",
        category: "passwords",
        description: "Fast password cracker, currently available for many flavors of Unix",
        url: "https://github.com/openwall/john",
        icon: "fas fa-unlock-alt"
    },
    {
        name: "hydra",
        category: "passwords",
        description: "Parallelized login cracker which supports numerous protocols",
        url: "https://github.com/vanhauser-thc/thc-hydra",
        icon: "fas fa-water"
    },
    {
        name: "Medusa",
        category: "passwords",
        description: "Speedy, parallel, and modular, login brute-forcer",
        url: "https://github.com/jmk-foofus/medusa",
        icon: "fas fa-user-secret"
    },
    {
        name: "patator",
        category: "passwords",
        description: "Multi-purpose brute-forcer, with a modular design",
        url: "https://github.com/lanjelot/patator",
        icon: "fas fa-hammer"
    },
    {
        name: "BruteSpray",
        category: "passwords",
        description: "Takes nmap GNMAP/XML output and automatically brute-forces services",
        url: "https://github.com/x90skysn3k/brutespray",
        icon: "fas fa-spray-can"
    },
    {
        name: "crowbar",
        category: "passwords",
        description: "Brute forcing tool that can be used during penetration tests",
        url: "https://github.com/galkan/crowbar",
        icon: "fas fa-crow"
    },

    // Secrets
    {
        name: "truffleHog",
        category: "secrets",
        description: "Searches through git repositories for high entropy strings and secrets",
        url: "https://github.com/dxa4481/truffleHog",
        icon: "fas fa-pig"
    },
    {
        name: "GitHound",
        category: "secrets",
        description: "Reconnaissance tool for GitHub code search",
        url: "https://github.com/tillson/git-hound",
        icon: "fas fa-dog"
    },
    {
        name: "GitLeaks",
        category: "secrets",
        description: "Detect and prevent secrets in git repos",
        url: "https://github.com/zricethezav/gitleaks",
        icon: "fas fa-leak"
    },
    {
        name: "gitrob",
        category: "secrets",
        description: "Reconnaissance tool for GitHub organizations",
        url: "https://github.com/michenriksen/gitrob",
        icon: "fas fa-user-ninja"
    },
    {
        name: "gitGraber",
        category: "secrets",
        description: "Monitor GitHub to search and find sensitive data in real time",
        url: "https://github.com/hisxo/gitGraber",
        icon: "fas fa-hand-rock"
    },
    {
        name: "shhgit",
        category: "secrets",
        description: "Find secrets in your code before the bad guys do",
        url: "https://github.com/eth0izzle/shhgit",
        icon: "fas fa-shh"
    },

    // Git
    {
        name: "GitTools",
        category: "git",
        description: "Repository with 3 tools for pwning websites with .git repositories",
        url: "https://github.com/internetwache/GitTools",
        icon: "fab fa-git-alt"
    },
    {
        name: "dvcs-ripper",
        category: "git",
        description: "Rip web accessible (distributed) version control systems",
        url: "https://github.com/kost/dvcs-ripper",
        icon: "fas fa-download"
    },
    {
        name: "GitDumper",
        category: "git",
        description: "Tool to dump a git repository from a website",
        url: "https://github.com/arthaud/git-dumper",
        icon: "fas fa-download"
    },

    // Buckets
    {
        name: "AWSBucketDump",
        category: "buckets",
        description: "Tool to quickly enumerate AWS S3 buckets to look for loot",
        url: "https://github.com/jordanpotti/AWSBucketDump",
        icon: "fab fa-aws"
    },
    {
        name: "CloudBrute",
        category: "buckets",
        description: "Tool to find a company's infrastructure, files, and apps on cloud",
        url: "https://github.com/0xsha/CloudBrute",
        icon: "fas fa-cloud"
    },
    {
        name: "s3viewer",
        category: "buckets",
        description: "Publicly accessible S3 buckets web interface",
        url: "https://github.com/SharonBrizinov/s3viewer",
        icon: "fas fa-eye"
    },
    {
        name: "festin",
        category: "buckets",
        description: "FestIn - S3 bucket weak configuration detection tool",
        url: "https://github.com/cr0hn/festin",
        icon: "fas fa-bucket"
    },
    {
        name: "S3Scanner",
        category: "buckets",
        description: "Scan for open AWS S3 buckets and dump the contents",
        url: "https://github.com/sa7mon/S3Scanner",
        icon: "fas fa-scan"
    },
    {
        name: "cloudsplaining",
        category: "buckets",
        description: "AWS IAM Security Assessment tool",
        url: "https://github.com/salesforce/cloudsplaining",
        icon: "fas fa-cloud-rain"
    },

    // CMS
    {
        name: "WPScan",
        category: "cms",
        description: "Black box WordPress vulnerability scanner",
        url: "https://github.com/wpscanteam/wpscan",
        icon: "fab fa-wordpress"
    },
    {
        name: "CMSeeK",
        category: "cms",
        description: "CMS Detection and Exploitation suite - Scan WordPress, Joomla, Drupal",
        url: "https://github.com/Tuhinshubhra/CMSeeK",
        icon: "fas fa-search"
    },
    {
        name: "droopescan",
        category: "cms",
        description: "Scanner to identify issues with Drupal installations",
        url: "https://github.com/droope/droopescan",
        icon: "fab fa-drupal"
    },
    {
        name: "joomscan",
        category: "cms",
        description: "OWASP Joomla Vulnerability Scanner",
        url: "https://github.com/OWASP/joomscan",
        icon: "fab fa-joomla"
    },

    // JSON Web Token
    {
        name: "jwt_tool",
        category: "jwt",
        description: "Toolkit for validating, forging, scanning and tampering JWTs",
        url: "https://github.com/ticarpi/jwt_tool",
        icon: "fas fa-key"
    },
    {
        name: "c-jwt-cracker",
        category: "jwt",
        description: "JWT brute force cracker written in C",
        url: "https://github.com/brendan-rius/c-jwt-cracker",
        icon: "fas fa-hammer"
    },
    {
        name: "jwtcat",
        category: "jwt",
        description: "JSON Web Token HS256/RS256 cracker",
        url: "https://github.com/aress31/jwtcat",
        icon: "fas fa-cat"
    },

    // postMessage
    {
        name: "postMessage-tracker",
        category: "postmessage",
        description: "Chrome Extension to track postMessage usage",
        url: "https://github.com/fransr/postMessage-tracker",
        icon: "fas fa-envelope"
    },
    {
        name: "pmforce",
        category: "postmessage",
        description: "postMessage exploitation tool",
        url: "https://github.com/anshumanpattnaik/pmforce",
        icon: "fas fa-paper-plane"
    },

    // Subdomain Takeover
    {
        name: "SubOver",
        category: "subdomain-takeover",
        description: "Subdomain takeover vulnerability scanner",
        url: "https://github.com/Ice3man543/SubOver",
        icon: "fas fa-takeover"
    },
    {
        name: "subjack",
        category: "subdomain-takeover",
        description: "Subdomain takeover tool written in Go",
        url: "https://github.com/haccer/subjack",
        icon: "fas fa-user-ninja"
    },
    {
        name: "nuclei-takeovers",
        category: "subdomain-takeover",
        description: "Collection of nuclei templates for subdomain takeover detection",
        url: "https://github.com/pikpikcu/nuclei-takeovers",
        icon: "fas fa-atom"
    },
    {
        name: "can-i-take-over-xyz",
        category: "subdomain-takeover",
        description: "Repository with subdomain takeover possibilities",
        url: "https://github.com/EdOverflow/can-i-take-over-xyz",
        icon: "fas fa-question"
    }
];

// Categories for the tools
const categories = [
    {
        key: "subdomain-enumeration",
        name: "Subdomain Enumeration",
        icon: "fas fa-sitemap",
        description: "Tools for discovering subdomains and mapping attack surfaces"
    },
    {
        key: "port-scanning",
        name: "Port Scanning",
        icon: "fas fa-network-wired",
        description: "Network port discovery and service enumeration tools"
    },
    {
        key: "screenshots",
        name: "Screenshots",
        icon: "fas fa-camera",
        description: "Web application screenshot and visual inspection tools"
    },
    {
        key: "technologies",
        name: "Technologies",
        icon: "fas fa-cogs",
        description: "Technology stack identification and fingerprinting tools"
    },
    {
        key: "content-discovery",
        name: "Content Discovery",
        icon: "fas fa-folder-open",
        description: "Directory and file discovery tools for web applications"
    },
    {
        key: "links",
        name: "Links",
        icon: "fas fa-link",
        description: "Tools for extracting and analyzing web application endpoints"
    },
    {
        key: "parameters",
        name: "Parameters",
        icon: "fas fa-question",
        description: "Parameter discovery and analysis tools"
    },
    {
        key: "fuzzing",
        name: "Fuzzing",
        icon: "fas fa-bomb",
        description: "Web application fuzzing and testing tools"
    },
    {
        key: "command-injection",
        name: "Command Injection",
        icon: "fas fa-terminal",
        description: "Tools for testing and exploiting command injection vulnerabilities"
    },
    {
        key: "cors-misconfiguration",
        name: "CORS Misconfiguration",
        icon: "fas fa-globe-americas",
        description: "Tools for detecting CORS misconfigurations"
    },
    {
        key: "crlf-injection",
        name: "CRLF Injection",
        icon: "fas fa-code",
        description: "Tools for testing CRLF injection vulnerabilities"
    },
    {
        key: "csrf-injection",
        name: "CSRF Injection",
        icon: "fas fa-shield-virus",
        description: "Cross-Site Request Forgery testing tools"
    },
    {
        key: "directory-traversal",
        name: "Directory Traversal",
        icon: "fas fa-folder-minus",
        description: "Path traversal and directory traversal testing tools"
    },
    {
        key: "file-inclusion",
        name: "File Inclusion",
        icon: "fas fa-file-import",
        description: "Local and remote file inclusion testing tools"
    },
    {
        key: "graphql-injection",
        name: "GraphQL Injection",
        icon: "fas fa-project-diagram",
        description: "GraphQL security testing and injection tools"
    },
    {
        key: "header-injection",
        name: "Header Injection",
        icon: "fas fa-heading",
        description: "HTTP header injection testing tools"
    },
    {
        key: "insecure-deserialization",
        name: "Insecure Deserialization",
        icon: "fab fa-java",
        description: "Tools for testing deserialization vulnerabilities"
    },
    {
        key: "idor",
        name: "IDOR",
        icon: "fas fa-user-shield",
        description: "Insecure Direct Object Reference testing tools"
    },
    {
        key: "open-redirect",
        name: "Open Redirect",
        icon: "fas fa-external-link-alt",
        description: "Open redirect vulnerability testing tools"
    },
    {
        key: "race-condition",
        name: "Race Condition",
        icon: "fas fa-flag-checkered",
        description: "Race condition vulnerability testing tools"
    },
    {
        key: "request-smuggling",
        name: "Request Smuggling",
        icon: "fas fa-truck",
        description: "HTTP request smuggling testing tools"
    },
    {
        key: "ssrf",
        name: "SSRF",
        icon: "fas fa-map-marked-alt",
        description: "Server-Side Request Forgery testing tools"
    },
    {
        key: "sql-injection",
        name: "SQL Injection",
        icon: "fas fa-database",
        description: "SQL injection testing and exploitation tools"
    },
    {
        key: "xss-injection",
        name: "XSS Injection",
        icon: "fas fa-code",
        description: "Cross-Site Scripting testing and exploitation tools"
    },
    {
        key: "xxe-injection",
        name: "XXE Injection",
        icon: "fas fa-syringe",
        description: "XML External Entity injection testing tools"
    },
    {
        key: "miscellaneous",
        name: "Miscellaneous",
        icon: "fas fa-tools",
        description: "General purpose security testing tools"
    },
    {
        key: "passwords",
        name: "Passwords",
        icon: "fas fa-key",
        description: "Password cracking and brute force tools"
    },
    {
        key: "secrets",
        name: "Secrets",
        icon: "fas fa-user-secret",
        description: "Secret and credential discovery tools"
    },
    {
        key: "git",
        name: "Git",
        icon: "fab fa-git-alt",
        description: "Git repository analysis and exploitation tools"
    },
    {
        key: "buckets",
        name: "Buckets",
        icon: "fas fa-bucket",
        description: "Cloud storage bucket enumeration and testing tools"
    },
    {
        key: "cms",
        name: "CMS",
        icon: "fas fa-wordpress",
        description: "Content Management System security testing tools"
    },
    {
        key: "jwt",
        name: "JWT",
        icon: "fas fa-key",
        description: "JSON Web Token testing and exploitation tools"
    },
    {
        key: "postmessage",
        name: "postMessage",
        icon: "fas fa-envelope",
        description: "postMessage vulnerability testing tools"
    },
    {
        key: "subdomain-takeover",
        name: "Subdomain Takeover",
        icon: "fas fa-user-ninja",
        description: "Subdomain takeover vulnerability testing tools"
    }
];