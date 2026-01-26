---
type: property
interface: IDSPBRMaterial
member: AttenuationColor
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - attenuationcolor
  - idspbrmaterial
  - idspbr
  - material
  - attenuation
  - color
  - int32
readonly: null
---

# IDSPBRMaterial.AttenuationColor

Gets or sets the attenuation color of this material.

## Signature

```csharp
System.Int32 AttenuationColor {get; set;}
```
## Parameters

None.

## Return Value

Attenuation color

## Remarks

This property returns a
COLORREF
that is represented as a decimal. The DSPBR tab in the user interface shows colors in RGB format. You can find online converters to convert RGB to hexadecimal or decimal.
For more information about this property:
Open https://dassaultsystemes-technology.github.io/EnterprisePBRShadingModel/spec-2025x.md.html in an internet browser, click CTRL-F and type "Attenuation color" in the pop up. Click
Next result
repeatedly.
Search for "attenuation color" on the web.