---
type: property
interface: IPMIDimensionItem
member: MaxVariation
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IPMIDimensionItem.TolerancePrecision
  - IPMIDimensionItem.Unit
keywords:
  - maxvariation
  - ipmidimensionitem
  - ipmi
  - dimension
  - item
  - max
  - variation
  - double
  - iannotation
  - getpmidata
readonly: null
---

# IPMIDimensionItem.MaxVariation

Gets the maximum variation of tolerance for this PMI dimension item.

## Signature

```csharp
System.Double MaxVariation {get; set;}
```
## Parameters

None.

## Return Value

Maximum variation of tolerance

## Remarks

This property is valid only if
IPMIDimensionItem::TolType
returns
swTolType_e
:
swTolBILAT
swTolLIMIT
swTolSYMMETRIC
swTolFITWITHTOL
swTolFITTOLONLY

## Examples

- IAnnotation::GetPMIData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~GetPMIData)

## See Also

- `IPMIDimensionItem.TolerancePrecision`
- `IPMIDimensionItem.Unit`