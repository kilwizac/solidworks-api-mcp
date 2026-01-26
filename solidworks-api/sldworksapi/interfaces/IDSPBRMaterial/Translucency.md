---
type: property
interface: IDSPBRMaterial
member: Translucency
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - translucency
  - idspbrmaterial
  - idspbr
  - material
  - double
readonly: null
---

# IDSPBRMaterial.Translucency

Gets or sets the degree to which this material is able to filter and diffuse light for illuminating the appearance.

## Signature

```csharp
System.Double Translucency {get; set;}
```
## Parameters

None.

## Return Value

0.0 (opaque) default <= Translucency <= 1.0 (translucent)

## Remarks

Increasing translucency gives the material more backlighting.
A light must be behind the model relative to the position of the viewer.
For more information about this property:
Open https://dassaultsystemes-technology.github.io/EnterprisePBRShadingModel/spec-2025x.md.html in an internet browser, click CTRL-F and type "Translucency" in the pop up. Click
Next result
repeatedly.
Search for "Translucency in materials science" on the web.