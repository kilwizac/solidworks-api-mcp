---
type: property
interface: ILocalCurvePatternFeatureData
member: D1IsEqualSpaced
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalCurvePatternFeatureData.D1AlignmentMethod
  - ILocalCurvePatternFeatureData.D1CurveMethod
  - ILocalCurvePatternFeatureData.D1InstanceCount
  - ILocalCurvePatternFeatureData.D1ReferencePoint
  - ILocalCurvePatternFeatureData.D1ReverseDirection
  - ILocalCurvePatternFeatureData.D2IsEqualSpaced
keywords:
  - d1isequalspaced
  - ilocalcurvepatternfeaturedata
  - local
  - curve
  - pattern
  - feature
  - data
  - d1
  - equal
  - spaced
  - boolean
  - create
  - driven
  - vb
  - net
  - vba
readonly: null
---

# ILocalCurvePatternFeatureData.D1IsEqualSpaced

Gets or sets whether to use equal spacing between instances of the pattern in Direction 1 for this curve-driven component pattern feature.

## Signature

```csharp
System.Boolean D1IsEqualSpaced {get; set;}
```
## Parameters

None.

## Return Value

True to use equal spacing in Direction 1, false to use the value set by ILocalCurvePatternFeatureData::D1Spacing

## Remarks

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
- `ILocalCurvePatternFeatureData.D1InstanceCount`
- `ILocalCurvePatternFeatureData.D1ReferencePoint`
- `ILocalCurvePatternFeatureData.D1ReverseDirection`
- `ILocalCurvePatternFeatureData.D2IsEqualSpaced`