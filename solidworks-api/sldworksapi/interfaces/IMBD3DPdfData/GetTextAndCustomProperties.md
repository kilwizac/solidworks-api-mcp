---
type: method
interface: IMBD3DPdfData
member: GetTextAndCustomProperties
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - textandcustomproperty
  - see
  - itextandcustompropertyinterface
  - itextandcustomproperties
  - custom
  - properties
  - also
  - icustompropertymanager
  - solidworks
  - mbd
  - 3d
  - pdf
  - text
  - gettextandcustomproperties
  - imbd3dpdfdata
  - imbd3
  - data
  - object
  - publish
  - theme
  - vb
  - net
  - vba
---

# IMBD3DPdfData.GetTextAndCustomProperties

Gets the text and custom properties in the theme for this SOLIDWORKS MBD 3D PDF.

## Signature

```csharp
System.Object GetTextAndCustomProperties()
```
## Parameters

None.

## Return Value

Array of text and custom properties in the theme for this SOLIDWORKS MBD 3D PDF

## Remarks

SOLIDWORKS Model Based Definition (MBD) is an integrated drawingless manufacturing solution for SOLIDWORKS.
Typical steps for generating a SOLIDWORKS MBD 3D PDF using the SOLIDWORKS API are:
Get the
MBD3DPdfData object
using
IModelDocExtension::GetMBD3DPdfData
.
Set the path and file name of the SOLIDWORKS MBD 3D PDF theme using
IMBD3DPdfData::ThemeName
.
Get standard and custom views using
IMBD3DPdfData::GetStandardViews
and
IMBD3DPdfData::GetMoreViews
.
Set standard and custom views using
IMBD3DPdfData::SetStandardViews
and
IMBD3DPdfData::SetMoreViews
.
Get and set text and custom properties in the theme using the array of objects returned by this method.
Set the path for the SOLIDWORKS MBD 3D PDF using
IMBD3DPdfData::FilePath
.
Generate the SOLIDWORKS MBD 3D PDF using
IModelDocExtension::PublishTo3DPDF
.
See the SOLIDWORKS Help for details about MBD.

## Examples

- Publish Text and Custom Properties from Theme to MBD 3D PDF (C#) (Publish_Text_and_Custom_Properties_from_Theme_to_MBD_3D_PDF_Example_CSharp.htm)
- Publish Text and Custom Properties from Theme to MBD 3D PDF (VB.NET) (Publish_Text_and_Custom_Properties_from_Theme_to_MBD_3D_PDF_Example_VBNET.htm)
- Publish Text and Custom Properties from Theme to MBD 3D PDF (VBA) (Publish_Text_and_Custom_Properties_from_Theme_to_MBD_3D_PDF_Example_VB.htm)