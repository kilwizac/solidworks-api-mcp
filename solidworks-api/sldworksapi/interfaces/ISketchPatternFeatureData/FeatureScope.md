---
type: property
interface: ISketchPatternFeatureData
member: FeatureScope
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
  - featurescope
  - isketchpatternfeaturedata
  - sketch
  - pattern
  - feature
  - data
  - scope
  - boolean
readonly: true
---

# ISketchPatternFeatureData.FeatureScope

Gets which bodies in this multibody part are affected by this sketch-driven pattern feature.

## Signature

```csharp
System.Boolean FeatureScope {get;}
```
## Parameters

None.

## Return Value

True to specify affected bodies, false to apply the pattern to all bodies every time the feature regenerates

## Remarks

This property is valid only if
ISketchPatternFeatureData::GeometryPattern
is true.
Call
ISketchPatternFeatureData::SetFeatureScope
to set this property.
For more information, see the
Sketch Driven Patterns PropertyManager
topic in the SOLIDWORKS Design user-interface help.