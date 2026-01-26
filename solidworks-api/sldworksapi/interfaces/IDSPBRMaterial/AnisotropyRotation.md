---
type: property
interface: IDSPBRMaterial
member: AnisotropyRotation
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - anisotropyrotation
  - idspbrmaterial
  - idspbr
  - material
  - anisotropy
  - rotation
  - double
readonly: null
---

# IDSPBRMaterial.AnisotropyRotation

Gets or sets the anisotropy rotation angle (counter-clockwise rotation of the tangent space around local normal).

## Signature

```csharp
System.Double AnisotropyRotation {get; set;}
```
## Parameters

None.

## Return Value

0.0 (0 degrees) default <= Anisotropy rotation value <= 1.0 (360 degrees)

## Remarks

For more information about this property:
Open https://dassaultsystemes-technology.github.io/EnterprisePBRShadingModel/spec-2025x.md.html in an internet browser, click CTRL-F and type "Anisotropy rotation" in the pop up. Click
Next result
repeatedly.
Search for "Anisotropy rotation values of materials" on the web.