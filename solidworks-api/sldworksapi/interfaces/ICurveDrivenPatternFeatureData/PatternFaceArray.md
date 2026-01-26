---
type: property
interface: ICurveDrivenPatternFeatureData
member: PatternFaceArray
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ICurveDrivenPatternFeatureData.GetPatternFaceCount
  - ICurveDrivenPatternFeatureData.IGetPatternFaceArray
  - ICurveDrivenPatternFeatureData.ISetPatternFaceArray
keywords:
  - patternfacearray
  - icurvedrivenpatternfeaturedata
  - curve
  - driven
  - pattern
  - feature
  - data
  - face
  - array
  - object
readonly: null
---

# ICurveDrivenPatternFeatureData.PatternFaceArray

Gets or sets the list of faces to include in this curve-driven pattern feature.

## Signature

```csharp
System.Object PatternFaceArray {get; set;}
```
## Parameters

None.

## Return Value

Array of pattern faces

## Remarks

This property is valid only if
ICurveDrivenPatternFeatureData::BodyPattern
is false.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `ICurveDrivenPatternFeatureData.GetPatternFaceCount`
- `ICurveDrivenPatternFeatureData.IGetPatternFaceArray`
- `ICurveDrivenPatternFeatureData.ISetPatternFaceArray`