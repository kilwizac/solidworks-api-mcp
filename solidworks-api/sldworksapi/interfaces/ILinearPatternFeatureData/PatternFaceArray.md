---
type: property
interface: ILinearPatternFeatureData
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
  - ILinearPatternFeatureData.GetPatternFaceCount
  - ILinearPatternFeatureData.IGetPatternFaceArray
  - ILinearPatternFeatureData.ISetPatternFaceArray
keywords:
  - patternfacearray
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - face
  - array
  - object
readonly: null
---

# ILinearPatternFeatureData.PatternFaceArray

Gets or sets the seed faces for this linear pattern feature.

## Signature

```csharp
System.Object PatternFaceArray {get; set;}
```
## Parameters

None.

## Return Value

Array of faces to pattern

## Remarks

This property is valid only if
ILinearPatternFeatureData::BodyPattern
is false.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `ILinearPatternFeatureData.GetPatternFaceCount`
- `ILinearPatternFeatureData.IGetPatternFaceArray`
- `ILinearPatternFeatureData.ISetPatternFaceArray`