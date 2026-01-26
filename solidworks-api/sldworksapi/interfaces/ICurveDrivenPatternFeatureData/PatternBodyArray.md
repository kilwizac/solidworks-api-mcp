---
type: property
interface: ICurveDrivenPatternFeatureData
member: PatternBodyArray
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ICurveDrivenPatternFeatureData.BodyPattern
  - ICurveDrivenPatternFeatureData.GetPatternBodyCount
  - ICurveDrivenPatternFeatureData.IGetPatternBodyArray
  - ICurveDrivenPatternFeatureData.ISetPatternBodyArray
keywords:
  - patternbodyarray
  - icurvedrivenpatternfeaturedata
  - curve
  - driven
  - pattern
  - feature
  - data
  - body
  - array
  - object
readonly: null
---

# ICurveDrivenPatternFeatureData.PatternBodyArray

Gets or sets a list of the bodies to pattern for this curve-driven pattern.

## Signature

```csharp
System.Object PatternBodyArray {get; set;}
```
## Parameters

None.

## Return Value

Array of bodies to pattern

## Remarks

This property is valid only if:
you have a multilbody part,
- and -
ICurveDrivenPatternFeatureData::BodyPattern
is true.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `ICurveDrivenPatternFeatureData.BodyPattern`
- `ICurveDrivenPatternFeatureData.GetPatternBodyCount`
- `ICurveDrivenPatternFeatureData.IGetPatternBodyArray`
- `ICurveDrivenPatternFeatureData.ISetPatternBodyArray`