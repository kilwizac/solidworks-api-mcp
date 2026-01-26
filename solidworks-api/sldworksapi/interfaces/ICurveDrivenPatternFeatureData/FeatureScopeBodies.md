---
type: property
interface: ICurveDrivenPatternFeatureData
member: FeatureScopeBodies
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - featurescopebodies
  - icurvedrivenpatternfeaturedata
  - curve
  - driven
  - pattern
  - feature
  - data
  - scope
  - bodies
  - object
readonly: true
---

# ICurveDrivenPatternFeatureData.FeatureScopeBodies

Gets the bodies in this multibody part that are affected by this curve-driven pattern feature.

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
ICurveDrivenPatternFeatureData::GeometryPattern
is true.
Call
ICurveDrivenPatternFeatureData::SetFeatureScope
to set this property.
For more information, see the
Curve Driven Patterns and the
Curve Driven Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.