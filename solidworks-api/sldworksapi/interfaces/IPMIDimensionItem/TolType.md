---
type: property
interface: IPMIDimensionItem
member: TolType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IPMIDimensionItem.MaxVariation
  - IPMIDimensionItem.MinVariation
  - IPMIDimensionItem.TolerancePrecision
keywords:
  - toltype
  - ipmidimensionitem
  - ipmi
  - dimension
  - item
  - tol
  - type
  - int32
  - iannotation
  - getpmidata
readonly: null
---

# IPMIDimensionItem.TolType

Gets the tolerance type of this PMI dimension item.

## Signature

```csharp
System.Int32 TolType {get; set;}
```
## Parameters

None.

## Return Value

Tolerance type as defined in swTolType_e

## Examples

- IAnnotation::GetPMIData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~GetPMIData)

## See Also

- `IPMIDimensionItem.MaxVariation`
- `IPMIDimensionItem.MinVariation`
- `IPMIDimensionItem.TolerancePrecision`