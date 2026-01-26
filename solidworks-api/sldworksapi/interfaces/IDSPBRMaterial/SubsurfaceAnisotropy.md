---
type: property
interface: IDSPBRMaterial
member: SubsurfaceAnisotropy
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - subsurfaceanisotropy
  - idspbrmaterial
  - idspbr
  - material
  - subsurface
  - anisotropy
  - double
readonly: null
---

# IDSPBRMaterial.SubsurfaceAnisotropy

Gets or sets the subsurface scattering anisotropy value for this material.

## Signature

```csharp
System.Double SubsurfaceAnisotropy {get; set;}
```
## Parameters

None.

## Return Value

- 1.0 (backward scattering) <= Subsurface scattering anisotropy value <= 1.0 (forward scattering)

## Remarks

The default value of this property is 0.0 for isotropic scattering.
For more information about this property:
Open https://dassaultsystemes-technology.github.io/EnterprisePBRShadingModel/spec-2025x.md.html in an internet browser, click CTRL-F and type "Subsurface anisotropy" in the pop up. Click
Next result
repeatedly.
Search for "Subsurface scattering anisotropy in materials science" on the web.