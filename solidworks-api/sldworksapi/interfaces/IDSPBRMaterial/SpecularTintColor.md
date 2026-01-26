---
type: property
interface: IDSPBRMaterial
member: SpecularTintColor
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - speculartintcolor
  - idspbrmaterial
  - idspbr
  - material
  - specular
  - tint
  - color
  - int32
readonly: null
---

# IDSPBRMaterial.SpecularTintColor

Gets or sets the specular tint to adjust the color of the specular lobe near theta = zero degrees for this material.

## Signature

```csharp
System.Int32 SpecularTintColor {get; set;}
```
## Parameters

None.

## Return Value

Specular tint

## Remarks

This property returns a
COLORREF
that is represented as a decimal. The DSPBR tab in the user interface shows colors in RGB format. You can find online converters to convert RGB to hexadecimal or decimal.
For more information about this property:
Open https://dassaultsystemes-technology.github.io/EnterprisePBRShadingModel/spec-2025x.md.html in an internet browser, click CTRL-F and type "Specular tint" in the pop up. Click
Next result
repeatedly.
Search for "Specular tint color in materials science" on the web.