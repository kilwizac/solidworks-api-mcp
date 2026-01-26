---
type: property
interface: ITablePatternFeatureData
member: GeometryPattern
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - geometrypattern
  - itablepatternfeaturedata
  - table
  - pattern
  - feature
  - data
  - geometry
  - boolean
readonly: null
---

# ITablePatternFeatureData.GeometryPattern

Gets or sets whether to create the pattern using only the geometry (faces and edges) of the features for the table-driven pattern feature.

## Signature

```csharp
System.Boolean GeometryPattern {get; set;}
```
## Parameters

None.

## Return Value

True to pattern using only geometry of the features; false to pattern and solve entire features

## Remarks

This property is valid with
ITablePatternFeatureData::PatternFaceArray
or
ITablePatternFeatureData::PatternFeatureArray
and is invalid with
ITablePatternFeatureData::PatternBodyArray
.

## Examples

- ITablePatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ITablePatternFeatureData)