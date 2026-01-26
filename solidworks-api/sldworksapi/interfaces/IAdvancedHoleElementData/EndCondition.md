---
type: property
interface: IAdvancedHoleElementData
member: EndCondition
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IAdvancedHoleElementData.OffsetDistance
  - IAdvancedHoleElementData.OffsetReverseDirection
  - IStraightTapElementData.Equation
keywords:
  - endcondition
  - iadvancedholeelementdata
  - advanced
  - hole
  - element
  - data
  - end
  - condition
  - int32
readonly: null
---

# IAdvancedHoleElementData.EndCondition

Gets or sets the end condition for this Advanced Hole element.

## Signature

```csharp
System.Int32 EndCondition {get; set;}
```
## Parameters

None.

## Return Value

End condition (see Remarks )

## Remarks

Valid end conditions for the Advanced Hole as defined in
swEndConditions_e
:
swEndCondBlind
swEndCondThroughAll
swEndCondUpToNext
swEndCondOffsetFromSurface
swEndCondUpToSelection
This property can be set for a given hole element only when its corresponding override property is set to true:
ICounterboreElementData::EndConditionOverride
ICountersinkElementData::EndConditionOverride
ITaperedTapElementData::EndConditionOverride
- and -
IAdvancedHoleFeatureData::UseBaselineDimensions
is set to false.

## Examples

- IAdvancedHoleElementData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAdvancedHoleElementData)

## See Also

- `IAdvancedHoleElementData.OffsetDistance`
- `IAdvancedHoleElementData.OffsetReverseDirection`
- `IStraightTapElementData.Equation`