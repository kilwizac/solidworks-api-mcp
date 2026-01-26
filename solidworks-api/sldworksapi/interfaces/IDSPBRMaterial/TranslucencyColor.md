---
type: property
interface: IDSPBRMaterial
member: TranslucencyColor
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - translucencycolor
  - idspbrmaterial
  - idspbr
  - material
  - translucency
  - color
  - int32
readonly: null
---

# IDSPBRMaterial.TranslucencyColor

Gets or sets the translucency color for this material.

## Signature

```csharp
System.Int32 TranslucencyColor {get; set;}
```
## Parameters

None.

## Return Value

Translucency color

## Remarks

This property returns a
COLORREF
that is represented as a decimal. The DSPBR tab in the user interface shows colors in RGB format. You can find online converters to convert RGB to hexadecimal or decimal.
For more information about this property:
Open https://dassaultsystemes-technology.github.io/EnterprisePBRShadingModel/spec-2025x.md.html in an internet browser, click CTRL-F and type "Translucency color" in the pop up. Click
Next result
repeatedly.
Search for "Translucency color in materials science" on the web.