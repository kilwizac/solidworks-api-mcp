---
type: property
interface: IAdvancedHoleElementData
member: BlindDepth
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IStraightTapElementData.Equation
keywords:
  - blinddepth
  - iadvancedholeelementdata
  - advanced
  - hole
  - element
  - data
  - blind
  - depth
  - double
readonly: null
---

# IAdvancedHoleElementData.BlindDepth

Gets or sets the depth for the blind end condition of this Advanced Hole element.

## Signature

```csharp
System.Double BlindDepth {get; set;}
```
## Parameters

None.

## Return Value

Blind depth

## Remarks

This property is valid only if
IAdvancedHoleFeatureData::UseBaselineDimensions
is set to false,
IAdvancedHoleElementData::EndCondition
is set to
swEndConditions_e
.swEndCondBlind, and the hole element's corresponding override property is set to true:
ICounterboreElementData::EndConditionOverride
ICountersinkElementData::EndConditionOverride
ITaperedTapElementData::EndConditionOverride

## Examples

- IAdvancedHoleElementData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAdvancedHoleElementData)

## See Also

- `IStraightTapElementData.Equation`