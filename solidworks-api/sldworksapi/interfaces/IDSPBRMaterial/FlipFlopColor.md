---
type: property
interface: IDSPBRMaterial
member: FlipFlopColor
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - flipflopcolor
  - idspbrmaterial
  - idspbr
  - material
  - flip
  - flop
  - color
  - int32
readonly: null
---

# IDSPBRMaterial.FlipFlopColor

Gets or sets the flake color at normal incidence if flip flop effect is enabled for this material.

## Signature

```csharp
System.Int32 FlipFlopColor {get; set;}
```
## Parameters

None.

## Return Value

Flip flop color

## Remarks

This property:
is valid only if
IDSPBRMaterial::FlipFlop
is enabled.
returns a
COLORREF
that is represented as a decimal. The DSPBR tab in the user interface shows colors in RGB format. You can find online converters to convert RGB to hexadecimal or decimal.Search for "Flipflop color in materials science and engineering" in your browser to obtain more information about this property.
For more information about this property:
Open https://dassaultsystemes-technology.github.io/EnterprisePBRShadingModel/spec-2025x.md.html in an internet browser, click CTRL-F and type "Flake color at normal incidence" in the pop up. Click
Next result
repeatedly.
Search for "Flipflop in materials science and engineering" on the web.