---
type: property
interface: IDSPBRMaterial
member: AttenuationDistance
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - attenuationdistance
  - idspbrmaterial
  - idspbr
  - material
  - attenuation
  - distance
  - double
readonly: null
---

# IDSPBRMaterial.AttenuationDistance

Gets or sets the distance of attenuation in this material.

## Signature

```csharp
System.Double AttenuationDistance {get; set;}
```
## Parameters

None.

## Return Value

0.0 <= Distance of attenuation < 500000.0 (default)

## Remarks

If this property is 0.0, the surface is opaque.
For more information about this property:
Open https://dassaultsystemes-technology.github.io/EnterprisePBRShadingModel/spec-2025x.md.html in an internet browser, click CTRL-F and type "Attenuation distance" in the pop up. Click
Next result
repeatedly.
Search for "attenuation distance" on the web.