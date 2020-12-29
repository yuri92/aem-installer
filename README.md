# aem-installer
È necessario creare un file `config.json` allo stesso livello di `index.js` che abbia come contenuto:

```
[
    {
        "progetto" : "Nome del progetto",
        "path": "Path del progetto, es. C:\\Users\\Yuri\\workspace\\progetto\\ui.apps",
        "comandi" : [
            "mvn clean install -DskipTests -Padobe-public -U -q",
            "cd target",
            "curl -u admin:admin -F file=@\"nome dello zip\" -F name=\"nome del package\" -F force=true -F install=true http://localhost:4502/crx/packmgr/service.jsp"
        ]
    }
]
```