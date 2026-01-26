---
type: property
interface: ICurveDrivenPatternFeatureData
member: AutoSelect
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related: []
keywords:
  - autoselect
  - icurvedrivenpatternfeaturedata
  - curve
  - driven
  - pattern
  - feature
  - data
  - auto
  - select
  - boolean
readonly: true
---

# ICurveDrivenPatternFeatureData.AutoSelect

Gets whether to automatically select all bodies in a multibody part intersected by this curve-driven pattern feature.

## Signature

```csharp
System.Boolean AutoSelect {get;}
```
## Parameters

None.

## Return Value

True to automatically select all bodies intersected by this curve driven pattern feature, false to specify affected bodies

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