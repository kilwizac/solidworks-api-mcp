---
type: property
interface: ILocalCurvePatternFeatureData
member: Dir2Specified
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalCurvePatternFeatureData.D2Direction
  - ILocalCurvePatternFeatureData.D2InstanceCount
  - ILocalCurvePatternFeatureData.D2IsEqualSpaced
  - ILocalCurvePatternFeatureData.D2PatternSeedOnly
  - ILocalCurvePatternFeatureData.D2ReverseDirection
  - ILocalCurvePatternFeatureData.D2Spacing
keywords:
  - dir2specified
  - ilocalcurvepatternfeaturedata
  - local
  - curve
  - pattern
  - feature
  - data
  - dir2
  - specified
  - boolean
  - create
  - driven
  - vb
  - net
  - vba
readonly: null
---

# ILocalCurvePatternFeatureData.Dir2Specified

Gets or sets whether to create a bidirectional pattern for this curve-driven component pattern feature.

## Signature

```csharp
System.Boolean Dir2Specified {get; set;}
```
## Parameters

None.

## Return Value

True to create a bidirectional pattern, false to create the pattern in Direction 1 only

## Remarks

See
Accessing Selections that Define Features
for additional details on using this property.

## Examples

- Create Local Curve-driven Pattern (C#) (Create_Local_Curve-driven_Pattern_Example_CSharp.htm)
- Create Local Curve-driven Pattern (VB.NET) (Create_Local_Curve-driven_Pattern_Example_VBNET.htm)
- Create Local Curve-Driven Pattern (VBA) (Create_Local_Curve-driven_Pattern_Example_VB.htm)

## See Also

- `ILocalCurvePatternFeatureData.D2Direction`
- `ILocalCurvePatternFeatureData.D2InstanceCount`
- `ILocalCurvePatternFeatureData.D2IsEqualSpaced`
- `ILocalCurvePatternFeatureData.D2PatternSeedOnly`
- `ILocalCurvePatternFeatureData.D2ReverseDirection`
- `ILocalCurvePatternFeatureData.D2Spacing`