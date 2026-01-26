---
type: property
interface: ICurveDrivenPatternFeatureData
member: BodyPattern
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ICurveDrivenPatternFeatureData.IGetPatternBodyArray
  - ICurveDrivenPatternFeatureData.IGetPatternFaceArray
  - ICurveDrivenPatternFeatureData.IGetPatternFeatureArray
  - ICurveDrivenPatternFeatureData.ISetPatternBodyArray
  - ICurveDrivenPatternFeatureData.ISetPatternFaceArray
  - ICurveDrivenPatternFeatureData.ISetPatternFeatureArray
  - ICurveDrivenPatternFeatureData.PatternElement
keywords:
  - bodypattern
  - icurvedrivenpatternfeaturedata
  - curve
  - driven
  - pattern
  - feature
  - data
  - body
  - boolean
readonly: null
---

# ICurveDrivenPatternFeatureData.BodyPattern

Gets or sets whether to base this curve-driven pattern feature on bodies or features and faces.

## Signature

```csharp
System.Boolean BodyPattern {get; set;}
```
## Parameters

None.

## Return Value

True for bodies, false for features and faces

## Remarks

If this property is:
True, use
ICurveDrivenPatternFeatureData::PatternBodyArray
to specify the seed bodies to pattern.
False, use
ICurveDrivenPatternFeatureData::PatternFaceArray
or
ICurveDrivenPatternFeatureData::PatternFeatureArray
to specify the face or feature seeds to pattern.

## See Also

- `ICurveDrivenPatternFeatureData.IGetPatternBodyArray`
- `ICurveDrivenPatternFeatureData.IGetPatternFaceArray`
- `ICurveDrivenPatternFeatureData.IGetPatternFeatureArray`
- `ICurveDrivenPatternFeatureData.ISetPatternBodyArray`
- `ICurveDrivenPatternFeatureData.ISetPatternFaceArray`
- `ICurveDrivenPatternFeatureData.ISetPatternFeatureArray`
- `ICurveDrivenPatternFeatureData.PatternElement`