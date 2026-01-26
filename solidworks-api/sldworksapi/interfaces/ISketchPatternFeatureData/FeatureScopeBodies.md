---
type: property
interface: ISketchPatternFeatureData
member: FeatureScopeBodies
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related: []
keywords:
  - featurescopebodies
  - isketchpatternfeaturedata
  - sketch
  - pattern
  - feature
  - data
  - scope
  - bodies
  - object
readonly: true
---

# ISketchPatternFeatureData.FeatureScopeBodies

Gets the bodies in this multibody part to be affected by this sketch-driven pattern feature.

## Signature

```csharp
System.Object FeatureScopeBodies {get;}
```
## Parameters

None.

## Return Value

Array of bodies to be affected

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