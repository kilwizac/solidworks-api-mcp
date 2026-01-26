---
type: property
interface: ICircularPatternFeatureData
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
  - icircularpatternfeaturedata
  - circular
  - pattern
  - feature
  - data
  - geometry
  - boolean
readonly: null
---

# ICircularPatternFeatureData.GeometryPattern

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
ICircularPatternFeatureData::BodyPattern
is false.
If this property is set to true, you can call
ICircularPatternFeatureData::SetFeatureScope
.
For more information, see the
Circular Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.
See
Accessing Selections that Define Features
for additional details on using this property.