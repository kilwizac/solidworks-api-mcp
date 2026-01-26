---
type: property
interface: IPMIDimensionItem
member: TolerancePrecision
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IPMIDimensionItem.TolType
  - IPMIDimensionItem.Unit
keywords:
  - toleranceprecision
  - ipmidimensionitem
  - ipmi
  - dimension
  - item
  - tolerance
  - precision
  - int32
  - iannotation
  - getpmidata
readonly: null
---

# IPMIDimensionItem.TolerancePrecision

Gets the tolerance precision of this PMI dimension item.

## Signature

```csharp
System.Int32 TolerancePrecision {get; set;}
```
## Parameters

None.

## Return Value

Tolerance precision

## Remarks

This property is valid only if
IPMIDimensionItem::TolType
does not return
swTolType_e
.swTolNONE.

## Examples

- IAnnotation::GetPMIData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~GetPMIData)

## See Also

- `IPMIDimensionItem.TolType`
- `IPMIDimensionItem.Unit`