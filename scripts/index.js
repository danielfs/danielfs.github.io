let iframe = document.querySelector('#spreadsheet');
let spreadsheetCode = `
aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMXFEZUVSbnpHWTluQndHdWhw
T3c5bFlSay05S2NUMk9leEYweXkzWE5rTDAvZWRpdD9ybT1taW5pbWFsJnVzcD1zaGFyaW5nJndp
ZGdldD10cnVlJmFtcDtoZWFkZXJzPWZhbHNl`;

iframe.setAttribute('src', atob(spreadsheetCode));
