---
type: property
interface: IPMIGtolBoxData
member: MaterialModifier
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IPMIGtolBoxData.GetAdditionalSymbols
keywords:
  - materialmodifier
  - ipmigtolboxdata
  - ipmi
  - gtol
  - box
  - data
  - material
  - modifier
  - int32
  - iannotation
  - getpmidata
readonly: null
---

# IPMIGtolBoxData.MaterialModifier

Gets the material condition for this PMI Gtol frame box.

## Signature

```csharp
System.Int32 MaterialModifier {get; set;}
```
## Parameters

None.

## Return Value

Material condition as defined in swMaterialModifier_e (see Remarks)

## Remarks

All material conditions in swMaterialModifier_e are valid except swMaterialModifier_e.swMaterialModifier_Translation.

## Examples

- IAnnotation::GetPMIData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~GetPMIData)

## See Also

- `IPMIGtolBoxData.GetAdditionalSymbols`