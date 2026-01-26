# Source Extraction (CHM and Help Viewer)

Primary source path:
- `C:\Program Files\SOLIDWORKS Corp\SOLIDWORKS\api`

Recommended inputs (core only):
- `sldworksapi.chm` (core SolidWorks API)
- `swconst.chm` (constants and enums)

Optional for examples:
- `sldworksapiprogguide.chm` (programming guide; contains example code pages)

Not included by default:
- `obsoleteapi.chm` (deprecated members)
- Additional module CHMs (for example `epdmapi.chm`, `routingapi.chm`, `swutilitiesapi.chm`)
- `*vb6.chm` variants

## Extraction workflow

1. Create a working directory outside `Program Files` for each docset.
2. Decompile CHM files to HTML:

```powershell
hh.exe -decompile "F:\solidworks api mcp\source\sldworksapi" "C:\Program Files\SOLIDWORKS Corp\SOLIDWORKS\api\sldworksapi.chm"
```

If `hh.exe` is unavailable, use 7-Zip:

```powershell
7z x "C:\Program Files\SOLIDWORKS Corp\SOLIDWORKS\api\sldworksapi.chm" -o"F:\solidworks api mcp\source\sldworksapi"
```

For `sldworksapiprogguide.chm`, use a full 7-Zip install if extraction fails:

```powershell
7z x "C:\Program Files\SOLIDWORKS Corp\SOLIDWORKS\api\sldworksapiprogguide.chm" -o"F:\solidworks api mcp\source\progguide"
```

3. If using Help Viewer sources (`HelpViewer\apihelpviewer.cab`), expand the CAB and then extract any `.mshc` (zip) archives:

```powershell
expand -F:* "C:\Program Files\SOLIDWORKS Corp\SOLIDWORKS\api\HelpViewer\sldworksapi\apihelpviewer.cab" "F:\solidworks api mcp\source\helpviewer"
```

If you see `.mshc` files, extract them with 7-Zip or rename to `.zip` and expand.

4. If using `HTMLHelp2x` `.hxs` files, extract with 7-Zip:

```powershell
7z x "C:\Program Files\SOLIDWORKS Corp\SOLIDWORKS\api\HTMLHelp2x\sldworksapi.hxs" -o"F:\solidworks api mcp\source\sldworksapi-hxs"
```

5. Collect `.htm` and `.html` files for parsing. Skip navigation files (`.hhc`, `.hhk`, `.hhp`, `toc.htm`, `index.htm`) and duplicate landing pages.

## Docset naming

Use the base filename as the docset name (for example `sldworksapi`, `swconst`, `epdmapi`). Apply this value to the `docset` frontmatter field and, if multiple docsets are merged, to the index entries.
