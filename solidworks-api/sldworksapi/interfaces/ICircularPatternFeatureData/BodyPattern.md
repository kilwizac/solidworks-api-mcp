---
type: property
interface: ICircularPatternFeatureData
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
  - ICircularPatternFeatureData.IGetPatternBodyArray
  - ICircularPatternFeatureData.IGetPatternFaceArray
  - ICircularPatternFeatureData.IGetPatternFeatureArray
  - ICircularPatternFeatureData.ISetPatternBodyArray
  - ICircularPatternFeatureData.ISetPatternFaceArray
  - ICircularPatternFeatureData.ISetPatternFeatureArray
  - ICircularPatternFeatureData.PatternElement
keywords:
  - bodypattern
  - icircularpatternfeaturedata
  - circular
  - pattern
  - feature
  - data
  - body
  - boolean
readonly: null
---

# ICircularPatternFeatureData.BodyPattern

Gets or sets whether to base this circular pattern feature on bodies and structure systems or features and faces.

## Signature

```csharp
System.Boolean BodyPattern {get; set;}
```
## Parameters

None.

## Return Value

True for bodies and structure systems, false for features and faces

## Remarks

If this property is:
True, use
ICircularPatternFeatureData::PatternBodyArray
to specify the bodies to pattern and
ICircularPatternFeatureData::StructureSystemToPatternArray
to specify the structure systems to pattern.
False, use
ICircularPatternFeatureData::PatternFaceArray
or
ICircularPatternFeatureData::PatternFeatureArray
to specify the face or feature to pattern.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `ICircularPatternFeatureData.IGetPatternBodyArray`
- `ICircularPatternFeatureData.IGetPatternFaceArray`
- `ICircularPatternFeatureData.IGetPatternFeatureArray`
- `ICircularPatternFeatureData.ISetPatternBodyArray`
- `ICircularPatternFeatureData.ISetPatternFaceArray`
- `ICircularPatternFeatureData.ISetPatternFeatureArray`
- `ICircularPatternFeatureData.PatternElement`