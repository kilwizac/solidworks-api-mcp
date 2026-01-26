---
type: property
interface: ILocalCurvePatternFeatureData
member: D1CurveMethod
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalCurvePatternFeatureData.D1AlignmentMethod
  - ILocalCurvePatternFeatureData.D1InstanceCount
  - ILocalCurvePatternFeatureData.D1IsEqualSpaced
  - ILocalCurvePatternFeatureData.D1ReferencePoint
  - ILocalCurvePatternFeatureData.D1ReverseDirection
  - ILocalCurvePatternFeatureData.D1Spacing
keywords:
  - d1curvemethod
  - ilocalcurvepatternfeaturedata
  - local
  - curve
  - pattern
  - feature
  - data
  - d1
  - int32
  - create
  - driven
  - vb
  - net
  - vba
readonly: null
---

# ILocalCurvePatternFeatureData.D1CurveMethod

Gets or sets how to use the curve, edge, sketch, or sketch entity selected for the pattern direction.

## Signature

```csharp
System.Int32 D1CurveMethod {get; set;}
```
## Parameters

None.

## Return Value

Curve method as defined in swLocalCurvePatternCurveMethod_e

## Remarks

See
Accessing Selections that Define Features
for additional details on using this property.
For more information, see the
Curve Driven Component Pattern
topic in the SOLIDWORKS Design user-interface help.

## Examples

- Create Local Curve-driven Pattern (C#) (Create_Local_Curve-driven_Pattern_Example_CSharp.htm)
- Create Local Curve-driven Pattern (VB.NET) (Create_Local_Curve-driven_Pattern_Example_VBNET.htm)
- Create Local Curve-driven Pattern (VBA) (Create_Local_Curve-driven_Pattern_Example_VB.htm)

## See Also

- `ILocalCurvePatternFeatureData.D1AlignmentMethod`
- `ILocalCurvePatternFeatureData.D1InstanceCount`
- `ILocalCurvePatternFeatureData.D1IsEqualSpaced`
- `ILocalCurvePatternFeatureData.D1ReferencePoint`
- `ILocalCurvePatternFeatureData.D1ReverseDirection`
- `ILocalCurvePatternFeatureData.D1Spacing`