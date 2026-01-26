---
type: property
interface: ISketchPatternFeatureData
member: AutoSelect
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
  - sketches
related: []
keywords:
  - autoselect
  - isketchpatternfeaturedata
  - sketch
  - pattern
  - feature
  - data
  - auto
  - select
  - boolean
readonly: true
---

# ISketchPatternFeatureData.AutoSelect

Gets whether to automatically select all bodies in a multibody part intersected by this sketch-driven pattern feature.

## Signature

```csharp
System.Boolean AutoSelect {get;}
```
## Parameters

None.

## Return Value

True to automatically select all bodies intersected by this sketch-driven pattern feature, false to specify affected bodies (see Remarks )

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