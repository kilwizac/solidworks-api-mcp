---
type: property
interface: IAdvancedHoleElementData
member: OffsetDistance
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IAdvancedHoleElementData.OffsetReverseDirection
  - IStraightTapElementData.Equation
keywords:
  - offsetdistance
  - iadvancedholeelementdata
  - advanced
  - hole
  - element
  - data
  - offset
  - distance
  - double
readonly: null
---

# IAdvancedHoleElementData.OffsetDistance

Gets or sets the offset distance for this Advanced Hole element.

## Signature

```csharp
System.Double OffsetDistance {get; set;}
```
## Parameters

None.

## Return Value

Offset distance (see Remarks )

## Remarks

This property is valid only when
IAdvancedHoleElementData::EndCondition
is set to
swEndConditions_e
.swEndCondOffsetFromSurface.
You can set this property only if this hole element's corresponding property is set to false:
ICounterboreElementData::UseStandardDepth
ICountersinkElementData::UseStandardDepth
ITaperedTapElementData::UseStandardDepth

## See Also

- `IAdvancedHoleElementData.OffsetReverseDirection`
- `IStraightTapElementData.Equation`