---
type: property
interface: ICurveDrivenPatternFeatureData
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
  - icurvedrivenpatternfeaturedata
  - curve
  - driven
  - pattern
  - feature
  - data
  - geometry
  - boolean
readonly: null
---

# ICurveDrivenPatternFeatureData.GeometryPattern

Gets or sets whether to create the pattern using only the geometry (faces and edges) of the feature.

## Signature

```csharp
System.Boolean GeometryPattern {get; set;}
```
## Parameters

None.

## Return Value

True to use only the geometry of the feature to create the pattern (faster), false to pattern and solve each instance of the feature in its entirety (slower)

## Remarks

This property is valid only if
ICurveDrivenPatternFeatureData::BodyPattern
is false.
If this property is true, you can call
ICurveDrivenPatternFeatureData::SetFeatureScope
.
For more information, see the
Curve Driven Patterns and the
Curve Driven Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.