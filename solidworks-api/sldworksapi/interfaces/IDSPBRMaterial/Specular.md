---
type: property
interface: IDSPBRMaterial
member: Specular
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - specular
  - idspbrmaterial
  - idspbr
  - material
  - double
readonly: null
---

# IDSPBRMaterial.Specular

Gets or sets the intensity of the light surface for illuminating the appearance.

## Signature

```csharp
System.Double Specular {get; set;}
```
## Parameters

None.

## Return Value

0.0 <= Specular value <= 1.0 (default)

## Remarks

This property depends on the position of the light source and the position of the viewer. Increasing specular makes the material appear shinier.
For more information about this property:
Open https://dassaultsystemes-technology.github.io/EnterprisePBRShadingModel/spec-2025x.md.html in an internet browser, click CTRL-F and type "Specular" in the pop up. Click
Next result
repeatedly.
Search for "Specular in materials science" on the web.