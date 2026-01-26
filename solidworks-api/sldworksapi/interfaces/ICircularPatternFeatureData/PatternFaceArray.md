---
type: property
interface: ICircularPatternFeatureData
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
  - ICircularPatternFeatureData.GetPatternFaceCount
  - ICircularPatternFeatureData.IGetPatternFaceArray
  - ICircularPatternFeatureData.ISetPatternFaceArray
keywords:
  - patternfacearray
  - icircularpatternfeaturedata
  - circular
  - pattern
  - feature
  - data
  - face
  - array
  - object
readonly: null
---

# ICircularPatternFeatureData.PatternFaceArray

Gets or sets the list of faces to pattern for this circular pattern feature.

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
ICircularPatternFeatureData::BodyPattern
is false.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `ICircularPatternFeatureData.GetPatternFaceCount`
- `ICircularPatternFeatureData.IGetPatternFaceArray`
- `ICircularPatternFeatureData.ISetPatternFaceArray`