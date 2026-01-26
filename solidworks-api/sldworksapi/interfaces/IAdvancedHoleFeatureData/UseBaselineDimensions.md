---
type: property
interface: IAdvancedHoleFeatureData
member: UseBaselineDimensions
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - features
related: []
keywords:
  - usebaselinedimensions
  - iadvancedholefeaturedata
  - advanced
  - hole
  - feature
  - data
  - use
  - baseline
  - dimensions
  - boolean
readonly: null
---

# IAdvancedHoleFeatureData.UseBaselineDimensions

Gets or sets whether to use baseline dimensions in this Advanced Hole.

## Signature

```csharp
System.Boolean UseBaselineDimensions {get; set;}
```
## Parameters

None.

## Return Value

True to use baseline dimensions, false to not (see Remarks )

## Remarks

If you set this property to true, then you can get and set:
ICounterboreElementData::UseStandardDepth
ICountersinkElementData::UseStandardDepth
ITaperedTapElementData::UseStandardDepth
IStraightTapElementData::Equation
(for the Offset From Surface end condition only)
but you cannot set any end conditions or end condition overrides.
If you set this property to false, then the UseStandardDepth properties above are not valid, but you can get and set:
ICounterboreElementData::EndConditionOverride
ICountersinkElementData::EndConditionOverride
ITaperedTapElementData::EndConditionOverride
IAdvancedHoleElementData::EndCondition
(only if the corresponding EndConditionOverride for the element is set to true)
IAdvancedHoleElementData::BlindDepth
(for the Blind end condition only)
IStraightTapElementData::Equation (for the Blind end condition only)