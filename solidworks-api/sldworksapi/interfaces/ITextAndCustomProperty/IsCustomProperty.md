---
type: property
interface: ITextAndCustomProperty
member: IsCustomProperty
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - iscustomproperty
  - itextandcustomproperty
  - text
  - custom
  - boolean
  - publish
  - properties
  - theme
  - mbd
  - 3d
  - pdf
  - vb
  - net
  - vba
readonly: true
---

# ITextAndCustomProperty.IsCustomProperty

Gets whether this is text or a custom property in a theme for a SOLIDWORKS MBD 3D PDF.

## Signature

```csharp
System.Boolean IsCustomProperty {get;}
```
## Parameters

None.

## Return Value

True if a custom property, false if text

## Remarks

This property corresponds to a
Text Field
or
Custom Property Field
group box in a theme.

## Examples

- Publish Text and Custom Properties from Theme to MBD 3D PDF (C#) (Publish_Text_and_Custom_Properties_from_Theme_to_MBD_3D_PDF_Example_CSharp.htm)
- Publish Text and Custom Properties from Theme to MBD 3D PDF (VB.NET) (Publish_Text_and_Custom_Properties_from_Theme_to_MBD_3D_PDF_Example_VBNET.htm)
- Publish Text and Custom Properties from Theme to MBD 3D PDF (VBA) (Publish_Text_and_Custom_Properties_from_Theme_to_MBD_3D_PDF_Example_VB.htm)