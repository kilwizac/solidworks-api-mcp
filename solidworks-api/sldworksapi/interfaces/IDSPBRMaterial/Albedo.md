---
type: property
interface: IDSPBRMaterial
member: Albedo
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - albedo
  - idspbrmaterial
  - idspbr
  - material
  - int32
readonly: null
---

# IDSPBRMaterial.Albedo

Gets or sets the ratio of reflected radiation to incident radiation.

## Signature

```csharp
System.Int32 Albedo {get; set;}
```
## Parameters

None.

## Return Value

Albedo number

## Remarks

This property returns a
COLORREF
that is represented as a decimal. The DSPBR tab in the user interface shows colors in RGB format. You can find online converters to convert RGB to hexadecimal or decimal.
For more information about this property:
Open https://dassaultsystemes-technology.github.io/EnterprisePBRShadingModel/spec-2025x.md.html in an internet browser, click CTRL-F and type "Albedo" in the pop up. Click
Next result
repeatedly.
Search for "Albedo" on the web.