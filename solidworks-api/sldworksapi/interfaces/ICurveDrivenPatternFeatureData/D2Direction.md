---
type: property
interface: ICurveDrivenPatternFeatureData
member: D2Direction
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICurveDrivenPatternFeatureData.D1Direction
  - ICurveDrivenPatternFeatureData.Dir2Specified
keywords:
  - d2direction
  - icurvedrivenpatternfeaturedata
  - curve
  - driven
  - pattern
  - feature
  - data
  - d2
  - direction
  - object
readonly: null
---

# ICurveDrivenPatternFeatureData.D2Direction

Gets or sets Direction 2 of this bidirectional curve-driven pattern feature.

## Signature

```csharp
System.Object D2Direction {get; set;}
```
## Parameters

None.

## Return Value

Pattern direction entity

## Remarks

The pattern direction can be a curve, edge, sketch entity, or a sketch. You must pre-select the Direction 2 entity using selection Mark = 2 before creating the feature definition. Use this property only when editing the pattern feature.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `ICurveDrivenPatternFeatureData.D1Direction`
- `ICurveDrivenPatternFeatureData.Dir2Specified`