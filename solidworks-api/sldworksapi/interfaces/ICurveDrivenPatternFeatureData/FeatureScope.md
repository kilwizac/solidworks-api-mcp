---
type: property
interface: ICurveDrivenPatternFeatureData
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
  - icurvedrivenpatternfeaturedata
  - curve
  - driven
  - pattern
  - feature
  - data
  - scope
  - boolean
readonly: true
---

# ICurveDrivenPatternFeatureData.FeatureScope

Gets which bodies in this multibody part are affected by this curve-driven pattern feature.

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
ICurveDrivenPatternFeatureData::GeometryPattern
is true.
Call
ICurveDrivenPatternFeatureData::SetFeatureScope
to set this property.
For more information, see the
Curve Driven Patterns and the
Curve Driven Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.