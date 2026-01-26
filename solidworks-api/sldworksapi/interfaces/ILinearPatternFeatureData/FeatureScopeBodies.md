---
type: property
interface: ILinearPatternFeatureData
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
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - scope
  - bodies
  - object
readonly: true
---

# ILinearPatternFeatureData.FeatureScopeBodies

Gets the bodies in this multibody part to be affected by this linear pattern feature.

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
ILinearPatternFeatureData::GeometryPattern
is true.
Call
ILinearPatternFeatureData::SetFeatureScope
to set this property.
For more information, see the
Linear Patterns and the Linear Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.