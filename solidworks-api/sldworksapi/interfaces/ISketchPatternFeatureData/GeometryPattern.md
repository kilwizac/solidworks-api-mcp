---
type: property
interface: ISketchPatternFeatureData
member: GeometryPattern
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related: []
keywords:
  - geometrypattern
  - isketchpatternfeaturedata
  - sketch
  - pattern
  - feature
  - data
  - geometry
  - boolean
readonly: null
---

# ISketchPatternFeatureData.GeometryPattern

Gets or sets whether to create the pattern using only the geometry (faces and edges) of the feature.

## Signature

```csharp
System.Boolean GeometryPattern {get; set;}
```
## Parameters

None.

## Return Value

True to create the pattern using only the geometry of the feature, false to pattern the entire feature

## Remarks

This property is valid only if
ISketchPatternFeatureData::BodyPattern
is false.
If this property is set to true, you can call
ISketchPatternFeatureData::SetFeatureScope
.
For more information, see the
Sketch Driven Patterns
topic in the SOLIDWORKS Help.

## Examples

- ISketchPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchPatternFeatureData)