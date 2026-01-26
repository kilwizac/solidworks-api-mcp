---
type: property
interface: IDSPBRMaterial
member: EmissionValue
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - emissionvalue
  - idspbrmaterial
  - idspbr
  - material
  - emission
  - value
  - double
readonly: null
---

# IDSPBRMaterial.EmissionValue

Gets or sets the amount of light projected from this appearance.

## Signature

```csharp
System.Double EmissionValue {get; set;}
```
## Parameters

None.

## Return Value

0.0 (default) <= Emission (w/srm^2) < 500.0

## Remarks

The
IDSPBRMaterial::EmissionMode
determines the units of this property's value.
For more information about this property:
Open https://dassaultsystemes-technology.github.io/EnterprisePBRShadingModel/spec-2025x.md.html in an internet browser, click CTRL-F and type "Emission value" in the pop up. Click
Next result
repeatedly.
Search for "emissivity in materials" on the web.