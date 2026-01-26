---
type: property
interface: ICircularPatternFeatureData
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
  - icircularpatternfeaturedata
  - circular
  - pattern
  - feature
  - data
  - scope
  - bodies
  - object
readonly: true
---

# ICircularPatternFeatureData.FeatureScopeBodies

Gets the bodies in this multibody part that are affected by this circular pattern feature.

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
ICircularPatternFeatureData::GeometryPattern
is true.
Call
ICircularPatternFeatureData::SetFeatureScope
to set this property.
For more information, see the
Circular Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.