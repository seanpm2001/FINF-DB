***

# Dosiera vojo

_Legu ĉi tiun artikolon en alia lingvo:_

[Lingvolisto nedisponebla](/FINF/Documentation/FilePath/English/README.md)

La dosiervojo por FINF estas tre vorta, sed ĉi tiu vorteco estas necesa. En retejoj kiel GitHub, vi estas limigita al 1000 eroj en vido de dosierujo. Estas multe pli ol 1,000,000 malsamaj dosier-etendoj, kaj estas neniel, ke ĉiuj tiuj povus konveni en ununura dosierujo ĉi tie (ankaŭ estus tre malfacile navigi aliloke) do multvorta sistemo estis desegnita, kie ĉiu signo de la dosier-etendaĵo estas. sia propra dosierujo.

## Superrigardo

Do la vojo iras tiel (uzante .txt-dosieron ekzemple)

`/(.)/t/x/t/aboutfile-en.txt.htm`

Origine, la `(.)` estos `.` sed Git ne subtenas ĉi tion, kaj ĝi pli komplikus la aferojn.

Rimarku, ke ekzistas ankaŭ aparta vojo por majusklaj versioj de la etendaĵo, ĉar majuskloj faras diferencon en la dosiertendo (sed ne tiom por TXT)

`/(.)/T/X/T/aboutfile-en.TXT.htm`

La procezo estas iomete malsama por dosieroj kun pluraj etendaĵoj. `tar.xz` estas uzata kiel ekzemplo ĉi tie:

`/(.)/t/a/r/(.)/x/z/aboutfile-en-tar.xz.htm`

## Klasoj

Estas ankaŭ klasoj uzataj por determini ĉu ĝi estas dosier-etendaĵo, etendebla dosiero, dosiersistemo aŭ ŝbango. Jen la klasvojo por dosiera etendo:

`/Datumbazo/DB/Dosiero/(.)/t/x/t/aboutfile-en.txt.htm`

Ĉi tiu estas la klasvojo por la speciala dosiero sen etendaĵoj `KREDITOJ`

`/Database/DB/FileSpecial/C/R/E/D/I/T/S/aboutfile-en_CREDITS.htm`

Jen la klasvojo por dosiersistemo, uzante `Btrfs' kiel ekzemplon:

`/Database/DB/FileSystem/B/t/r/f/s/aboutfs-en_Btrfs.htm'

Finfine, ĉi tiu estas la klasvojo por shebang, uzante `#!/bin/sh` kiel ekzemplon:

`/Database/DB/PlingBang/#/!/b/i/n/s/h/SHELL_IDENTIFIER_HashPlingBinSH.htm`

## Resumo

Tiel funkcias la dosiervojo kun FINF. Malgraŭ la multvorteco, ĝi estas tre utila kaj organizita sistemo.

***

## Dosiera informo

**Dosiertipo:** `Markdown-dokumento (*.md *.mk *.mdown *.markdown)`

**Dosierversio:** `1 (2021, dimanĉo, la 28-an de novembro je 16:33)

**Liniokalkulo (inkluzive de malplenaj linioj kaj kompillinio):** `61`

***
