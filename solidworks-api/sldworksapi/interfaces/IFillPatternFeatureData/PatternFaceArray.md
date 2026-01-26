---
type: property
interface: IFillPatternFeatureData
member: PatternFaceArray
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - patternfacearray
  - ifillpatternfeaturedata
  - fill
  - pattern
  - feature
  - data
  - face
  - array
  - object
readonly: null
---

# IFillPatternFeatureData.PatternFaceArray

Gets or sets the array of faces to pattern in this fill pattern feature.

## Signature

```csharp
System.Object PatternFaceArray {get; set;}
```
## Parameters

None.

## Return Value

Array of IFace2 s to pattern

## Remarks

This property is valid only if
IFillPatternFeatureData::PatternElement
is
swPatternElementSelection_e
.swFeatureFaces.