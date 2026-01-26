---
type: method
interface: IModelDocExtension
member: GetMBD3DPdfData
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IView3D
keywords:
  - imbd3dpdfdata
  - mbd3dpdfdata
  - see
  - mbd
  - solidworks
  - model
  - based
  - definition
  - 3d
  - pdf
  - getmbd3dpdfdata
  - imodeldocextension
  - doc
  - extension
  - mbd3
  - data
  - object
  - publish
  - text
  - custom
  - properties
  - theme
  - vb
  - net
  - vba
---

# IModelDocExtension.GetMBD3DPdfData

Gets the SOLIDWORKS MBD 3D PDF data object.

## Signature

```csharp
System.Object GetMBD3DPdfData()
```
## Parameters

None.

## Return Value

IMBD3DPdfData object

## Remarks

SOLIDWORKS Model Based Definition (MBD) is an integrated drawingless manufacturing solution for SOLIDWORKS.
This method requires that the SOLDWORKS MBD add-in be loaded. (
ISldWorks::LoadAddIn
)
Typical steps for generating a SOLIDWORKS MBD 3D PDF using the SOLIDWORKS API are:
Get the MBD3DPdfData object using this method.
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
Get and set text and custom properties in the theme using
IMBD3DPdfData::GetTextAndCustomProperties
and
ITextAndCustomProperty
.
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

## See Also

- `IView3D`