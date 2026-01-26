---
type: property
interface: IAdvancedHoleElementData
member: OffsetReverseDirection
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IAdvancedHoleElementData.OffsetDistance
keywords:
  - offsetreversedirection
  - iadvancedholeelementdata
  - advanced
  - hole
  - element
  - data
  - offset
  - reverse
  - direction
  - boolean
readonly: null
---

# IAdvancedHoleElementData.OffsetReverseDirection

Gets or sets whether to reverse the offset direction for this Advanced Hole element.

## Signature

```csharp
System.Boolean OffsetReverseDirection {get; set;}
```
## Parameters

None.

## Return Value

True to reverse the offset direction, false to not

## Remarks

This property is valid only when
IAdvancedHoleElementData::EndCondition
is set to
swEndConditions_e
.swEndCondOffsetFromSurface.

## See Also

- `IAdvancedHoleElementData.OffsetDistance`