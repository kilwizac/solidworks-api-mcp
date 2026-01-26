---
type: property
interface: IPMIDimensionItem
member: MinVariation
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
  - minvariation
  - ipmidimensionitem
  - ipmi
  - dimension
  - item
  - min
  - variation
  - double
  - iannotation
  - getpmidata
readonly: null
---

# IPMIDimensionItem.MinVariation

Gets the minimum variation of tolerance for this PMI dimension item.

## Signature

```csharp
System.Double MinVariation {get; set;}
```
## Parameters

None.

## Return Value

Minimum variation of tolerance

## Remarks

This property is valid only if
IPMIDimensionItem::TolType
returns
swTolType_e
:
swTolBILAT
swTolLIMIT
swTolFITWITHTOL
swTolFITTOLONLY

## Examples

- IAnnotation::GetPMIData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~GetPMIData)

## See Also

- `IPMIDimensionItem.TolerancePrecision`
- `IPMIDimensionItem.Unit`