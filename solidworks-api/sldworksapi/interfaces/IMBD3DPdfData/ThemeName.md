---
type: property
interface: IMBD3DPdfData
member: ThemeName
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IMBD3DPdfData.SetIndependentViewPort
keywords:
  - themename
  - imbd3dpdfdata
  - imbd3
  - pdf
  - data
  - theme
  - name
  - string
  - publish
  - text
  - custom
  - properties
  - mbd
  - 3d
  - vb
  - net
  - vba
readonly: null
---

# IMBD3DPdfData.ThemeName

Gets or sets the path and file name of the theme for this SOLIDWORKS MBD 3D PDF.

## Signature

```csharp
System.String ThemeName {get; set;}
```
## Parameters

None.

## Return Value

Path and file name of the theme

## Remarks

You can also get or set the SOLIDWORKS MBD 3D PDF path for a theme using:
SOLIDWORKS API. Call:
ISldWorks::GetUserPreferenceStringValue
(swUserPreferenceStringValue_e.swFileLocationsThemeFolder) or
ISldWorks::SetUserPreferenceStringValue
(swUserPreferenceStringValue_e.swFileLocationsThemeFolder, <V
alue
>)
SOLIDWORKS Design user interface. Click
Tools > System Options > File Locations > 3D PDF Themes
in
Show folders for
.

## Examples

- Publish Text and Custom Properties from Theme to MBD 3D PDF (C#) (Publish_Text_and_Custom_Properties_from_Theme_to_MBD_3D_PDF_Example_CSharp.htm)
- Publish Text and Custom Properties from Theme to MBD 3D PDF (VB.NET) (Publish_Text_and_Custom_Properties_from_Theme_to_MBD_3D_PDF_Example_VBNET.htm)
- Publish Text and Custom Properties from Theme to MBD 3D PDF (VBA) (Publish_Text_and_Custom_Properties_from_Theme_to_MBD_3D_PDF_Example_VB.htm)

## See Also

- `IMBD3DPdfData.SetIndependentViewPort`