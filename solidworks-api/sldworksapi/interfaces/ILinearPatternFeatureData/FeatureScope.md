---
type: property
interface: ILinearPatternFeatureData
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
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - scope
  - boolean
readonly: true
---

# ILinearPatternFeatureData.FeatureScope

Gets which bodies in this multibody part are affected by this linear pattern feature.

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
ILinearPatternFeatureData::GeometryPattern
is true.
Call
ILinearPatternFeatureData::SetFeatureScope
to set this property.
For more information, see the
Linear Patterns and the Linear Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.