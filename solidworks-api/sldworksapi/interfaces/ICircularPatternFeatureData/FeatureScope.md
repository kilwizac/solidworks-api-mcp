---
type: property
interface: ICircularPatternFeatureData
member: FeatureScope
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - featurescope
  - icircularpatternfeaturedata
  - circular
  - pattern
  - feature
  - data
  - scope
  - boolean
readonly: true
---

# ICircularPatternFeatureData.FeatureScope

Gets which bodies in this multibody part are affected by this circular pattern feature.

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
ICircularPatternFeatureData::GeometryPattern
is true.
Call
ICircularPatternFeatureData::SetFeatureScope
to set this property.
For more information, see the
Circular Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.