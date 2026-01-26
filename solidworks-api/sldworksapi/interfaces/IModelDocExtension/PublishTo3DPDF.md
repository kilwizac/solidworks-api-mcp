---
type: method
interface: IModelDocExtension
member: PublishTo3DPDF
returns: System.Int32
parameters:
  -
    name: MBDPdfData
    type: System.Object
    description: SOLIDWORKS MBD 3D PDF data
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.PublishSTEP242File
  - IView3D
keywords:
  - mbd
  - model
  - based
  - definition
  - solidworks
  - mbd3dpdfdata
  - see
  - imbd3dpdfdata
  - 3d
  - pdf
  - publishto3dpdf
  - imodeldocextension
  - doc
  - extension
  - publish
  - to3
  - dpdf
  - data
  - object
  - int32
  - text
  - custom
  - properties
  - theme
  - vb
  - net
  - vba
  - fire
  - notification
  - when
  - publishing
  - part
---

# IModelDocExtension.PublishTo3DPDF

Creates a 3D PDF for SOLIDWORKS MBD.

## Signature

```csharp
System.Int32 PublishTo3DPDF( 
   System.Object
MBDPdfData
)
```
## Parameters

- `MBDPdfData` (System.Object): SOLIDWORKS MBD 3D PDF data

## Return Value

Status as defined in swPublishTo3DPDFError_e

## Remarks

SOLIDWORKS Model Based Definition (MBD) is an integrated drawingless manufacturing solution for SOLIDWORKS.
This method:
requires the that the SOLDWORKS MBD add-in be loaded. (
ISldWorks::LoadAddIn
)
corresponds to the
Publish to 3D PDF
button on the SOLIDWORKS MBD toolbar.
Typical steps for generating a SOLIDWORKS MBD 3D PDF using the SOLIDWORKS API are:
Get the MBD3DPdfData object using
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
Get and set text and custom properties in the theme using
IMBD3DPdfData::GetTextAndCustomProperties
and
ITextAndCustomProperty
.
Set the path for the SOLIDWORKS MBD 3D PDF using
IMBD3DPdfData::FilePath
.
Generate the SOLIDWORKS MBD 3D PDF using this method.
See the SOLIDWORKS Help for details about MBD.

## Examples

- Publish Text and Custom Properties from Theme to MBD 3D PDF (C#) (Publish_Text_and_Custom_Properties_from_Theme_to_MBD_3D_PDF_Example_CSharp.htm)
- Publish Text and Custom Properties from Theme to MBD 3D PDF (VB.NET) (Publish_Text_and_Custom_Properties_from_Theme_to_MBD_3D_PDF_Example_VBNET.htm)
- Publish Text and Custom Properties from Theme to MBD 3D PDF (VBA) (Publish_Text_and_Custom_Properties_from_Theme_to_MBD_3D_PDF_Example_VB.htm)
- Fire Notification When Publishing Part to MBD 3D PDF (C#) (Fire_Notification_When_Publishing_Part_to_MBD_3D_PDF_Example_CSharp.htm)
- Fire Notification When Publishing Part to MBD 3D PDF (VB.NET) (Fire_Notification_When_Publishing_Part_to_MBD_3D_PDF_Example_VBNET.htm)
- Fire Notification When Publishing Part to MBD 3D PDF (VBA) (Fire_Notification_When_Publishing_Part_to_MBD_3D_PDF_Example_VB.htm)

## See Also

- `IModelDocExtension.PublishSTEP242File`
- `IView3D`