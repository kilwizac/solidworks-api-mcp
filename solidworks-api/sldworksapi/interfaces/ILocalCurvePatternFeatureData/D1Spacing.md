---
type: property
interface: ILocalCurvePatternFeatureData
member: D1Spacing
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalCurvePatternFeatureData.D1AlignmentMethod
  - ILocalCurvePatternFeatureData.D1CurveMethod
  - ILocalCurvePatternFeatureData.D1Direction
  - ILocalCurvePatternFeatureData.D1InstanceCount
  - ILocalCurvePatternFeatureData.D1ReferencePoint
  - ILocalCurvePatternFeatureData.D1ReverseDirection
  - ILocalCurvePatternFeatureData.D2Spacing
keywords:
  - d1spacing
  - ilocalcurvepatternfeaturedata
  - local
  - curve
  - pattern
  - feature
  - data
  - d1
  - spacing
  - double
  - create
  - driven
  - vb
  - net
  - vba
readonly: null
---

# ILocalCurvePatternFeatureData.D1Spacing

Gets or sets the distance between pattern instances in Direction 1 in this curve-driven component pattern feature.

## Signature

```csharp
System.Double D1Spacing {get; set;}
```
## Parameters

None.

## Return Value

Distance between pattern instances in Direction 1 (see Remarks )

## Remarks

To set the spacing between pattern instances, set
ILocalCurvePatternFeatureData::Dir1IsEqualSpaced
to false.
See
Accessing Selections that Define Features
for additional details on using this property.

## Examples

- Create Local Curve-driven Pattern (C#) (Create_Local_Curve-driven_Pattern_Example_CSharp.htm)
- Create Local Curve-driven Pattern (VB.NET) (Create_Local_Curve-driven_Pattern_Example_VBNET.htm)
- Create Local Curve-Driven Pattern (VBA) (Create_Local_Curve-driven_Pattern_Example_VB.htm)

## See Also

- `ILocalCurvePatternFeatureData.D1AlignmentMethod`
- `ILocalCurvePatternFeatureData.D1CurveMethod`
- `ILocalCurvePatternFeatureData.D1Direction`
- `ILocalCurvePatternFeatureData.D1InstanceCount`
- `ILocalCurvePatternFeatureData.D1ReferencePoint`
- `ILocalCurvePatternFeatureData.D1ReverseDirection`
- `ILocalCurvePatternFeatureData.D2Spacing`