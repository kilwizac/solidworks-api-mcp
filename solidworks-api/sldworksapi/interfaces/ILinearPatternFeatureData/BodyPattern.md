---
type: property
interface: ILinearPatternFeatureData
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
  - ILinearPatternFeatureData.IGetPatternBodyArray
  - ILinearPatternFeatureData.IGetPatternFaceArray
  - ILinearPatternFeatureData.IGetPatternFeatureArray
  - ILinearPatternFeatureData.ISetPatternBodyArray
  - ILinearPatternFeatureData.ISetPatternFaceArray
  - ILinearPatternFeatureData.ISetPatternFeatureArray
  - ILinearPatternFeatureData.PatternElement
keywords:
  - bodypattern
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - body
  - boolean
  - change
  - vb
  - net
  - vba
readonly: null
---

# ILinearPatternFeatureData.BodyPattern

Gets or sets whether to base this linear pattern feature on bodies and structure systems or features and faces.

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
ILinearPatternFeatureData::PatternBodyArray
to specify the bodies to pattern and
ILinearPatternFeatureData::StructureSystemToPatternArray
to specify the structure systems to pattern.
False, use
ILinearPatternFeatureData::PatternFaceArray
or
ILinearPatternFeatureData::PatternFeatureArray
to specify the face or feature to pattern.

## Examples

- Change Linear Pattern (C#) (Change_Linear_Pattern_Example_CSharp.htm)
- Change Linear Pattern (VB.NET) (Change_Linear_Pattern_Example_VBNET.htm)
- Change Linear Pattern (VBA) (Change_Linear_Pattern_Example_VB.htm)

## See Also

- `ILinearPatternFeatureData.IGetPatternBodyArray`
- `ILinearPatternFeatureData.IGetPatternFaceArray`
- `ILinearPatternFeatureData.IGetPatternFeatureArray`
- `ILinearPatternFeatureData.ISetPatternBodyArray`
- `ILinearPatternFeatureData.ISetPatternFaceArray`
- `ILinearPatternFeatureData.ISetPatternFeatureArray`
- `ILinearPatternFeatureData.PatternElement`