---
type: property
interface: IDSPBRMaterial
member: Roughness
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - roughness
  - idspbrmaterial
  - idspbr
  - material
  - double
readonly: null
---

# IDSPBRMaterial.Roughness

Gets or sets the specular spread (roughness) of the appearance.

## Signature

```csharp
System.Double Roughness {get; set;}
```
## Parameters

None.

## Return Value

0.0 (default) <= Specular spread <= 1.0

## Remarks

This property controls the size of any highlights on a surface. It is also known as the specular exponent. Increasing roughness makes highlights larger and softer.
The
specular
value must not be zero, the
specular tint color
must not be black, and at least one light other than an ambient light must be illuminating the model.
For more information about this property:
Open https://dassaultsystemes-technology.github.io/EnterprisePBRShadingModel/spec-2025x.md.html in an internet browser, click CTRL-F and type "Roughness" in the pop up. Click
Next result
repeatedly.
Search for "roughness in materials" on the web.