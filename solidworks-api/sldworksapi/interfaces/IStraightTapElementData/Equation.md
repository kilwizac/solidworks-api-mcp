---
type: property
interface: IStraightTapElementData
member: Equation
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - equation
  - istraighttapelementdata
  - straight
  - tap
  - element
  - data
  - int32
readonly: null
---

# IStraightTapElementData.Equation

Gets or sets the equation for the blind depth or offset distance of this straight tap hole element.

## Signature

```csharp
System.Int32 Equation {get; set;}
```
## Parameters

None.

## Return Value

Equation for the blind depth or offset distance as defined in swStraightTapHoleEquation_e

## Remarks

If
IAdvancedHoleFeatureData::UseBaselineDimensions
is set to false, and:
IAdvancedHoleElementData::EndCondition
is set to
swEndConditions_e
.swEndCondBlind, then this property specifies the equation for the depth of the Blind end condition. If this property is set to swStraightTapeHoleEquation_e.swStraightTapHoleEquation_UserDefinedValue, then use
IAdvancedHoleElementData::BlindDepth
to set the custom Blind depth of this hole element.
IAdvancedHoleElementData::EndCondition is specifically set to anything other than Blind, then this property is not valid.
If IAdvancedHoleFeatureData::UseBaselineDimensions is set to true, then:
the end condition automatically becomes swEndConditions_e.swEndCondOffsetFromSurface,
- and -
this property specifies the equation for the offset distance. If this property is set to swStraightTapHoleEquation_e.swStraightTapHoleEquation_UserDefinedValue, then use
IAdvancedHoleElementData::OffsetDistance
to set the custom offset distance of this hole element.