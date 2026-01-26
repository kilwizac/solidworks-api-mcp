---
type: property
interface: ILocalCurvePatternFeatureData
member: D1Direction
returns: System.Object
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
  - ILocalCurvePatternFeatureData.D1IsEqualSpaced
  - ILocalCurvePatternFeatureData.D1ReferencePoint
  - ILocalCurvePatternFeatureData.D1ReverseDirection
  - ILocalCurvePatternFeatureData.D1Spacing
  - ILocalCurvePatternFeatureData.D2Direction
keywords:
  - d1direction
  - ilocalcurvepatternfeaturedata
  - local
  - curve
  - pattern
  - feature
  - data
  - d1
  - direction
  - object
readonly: null
---

# ILocalCurvePatternFeatureData.D1Direction

Gets or sets Direction 1 using the selected curve, edge, sketch, or sketch entity for this curve-driven component pattern feature.

## Signature

```csharp
System.Object D1Direction {get; set;}
```
## Parameters

None.

## Return Value

Curve , edge , sketch , or sketch entity for Direction 1

## Remarks

You must pre-select the direction entity using selection Mark = 1 before creating the feature definition. If you are using a 3D curve for Direction 1, then you must also pre-select the face normal entity using selection Mark = 64.
Use this property only when editing the pattern feature.
If you specify this property using a 3D curve, you should also specify
ILocalCurvePatternFeatureData::D1FaceNormal
.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `ILocalCurvePatternFeatureData.D1AlignmentMethod`
- `ILocalCurvePatternFeatureData.D1CurveMethod`
- `ILocalCurvePatternFeatureData.D1InstanceCount`
- `ILocalCurvePatternFeatureData.D1IsEqualSpaced`
- `ILocalCurvePatternFeatureData.D1ReferencePoint`
- `ILocalCurvePatternFeatureData.D1ReverseDirection`
- `ILocalCurvePatternFeatureData.D1Spacing`
- `ILocalCurvePatternFeatureData.D2Direction`