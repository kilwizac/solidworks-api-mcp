---
type: property
interface: IPMIDimensionItem
member: Unit
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
  - IPMIDimensionItem.Value
  - IPMIDimensionItem.ValuePrecision
keywords:
  - unit
  - ipmidimensionitem
  - ipmi
  - dimension
  - item
  - int32
  - iannotation
  - getpmidata
readonly: null
---

# IPMIDimensionItem.Unit

Gets the units of this PMI dimension item.

## Signature

```csharp
System.Int32 Unit {get; set;}
```
## Parameters

None.

## Return Value

Units of dimension as defined in swPMIUnit_e

## Examples

- IAnnotation::GetPMIData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~GetPMIData)

## See Also

- `IPMIDimensionItem.MaxVariation`
- `IPMIDimensionItem.MinVariation`
- `IPMIDimensionItem.TolerancePrecision`
- `IPMIDimensionItem.Value`
- `IPMIDimensionItem.ValuePrecision`