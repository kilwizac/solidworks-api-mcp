---
type: property
interface: IDSPBRMaterial
member: SheenRoughness
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - sheenroughness
  - idspbrmaterial
  - idspbr
  - material
  - sheen
  - roughness
  - double
readonly: null
---

# IDSPBRMaterial.SheenRoughness

Gets or sets the roughness of sheen microfacet distribution for this material.

## Signature

```csharp
System.Double SheenRoughness {get; set;}
```
## Parameters

None.

## Return Value

0.0 <= Sheen roughness <= 1.0; 0.5 is the default

## Remarks

For more information about this property:
Open https://dassaultsystemes-technology.github.io/EnterprisePBRShadingModel/spec-2025x.md.html in an internet browser, click CTRL-F and type "Sheen" in the pop up. Click
Next result
repeatedly.
Search for "Sheen roughness in materials science" on the web.