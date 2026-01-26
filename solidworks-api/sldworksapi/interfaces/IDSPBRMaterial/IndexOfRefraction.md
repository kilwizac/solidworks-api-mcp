---
type: property
interface: IDSPBRMaterial
member: IndexOfRefraction
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - indexofrefraction
  - idspbrmaterial
  - idspbr
  - material
  - index
  - refraction
  - double
readonly: null
---

# IDSPBRMaterial.IndexOfRefraction

Gets or sets the index of refraction for illuminating this appearance.

## Signature

```csharp
System.Double IndexOfRefraction {get; set;}
```
## Parameters

None.

## Return Value

1.0 <= Refractive index < 500.0; 1.5 is the default

## Remarks

This property controls the bending of light as it passes through a transparent object. Although actually dependent on the ratio of indices between the transparent material entered and the material exited, in practice, the higher the index of refraction, the more the light is bent. Typical values are 1.0 for air, 1.33 for water, and 1.44 for glass.
For more information about this property:
Open https://dassaultsystemes-technology.github.io/EnterprisePBRShadingModel/spec-2025x.md.html in an internet browser, click CTRL-F and type "Index of refraction" in the pop up. Click
Next result
repeatedly.
Search for "Refractive index" on the web.