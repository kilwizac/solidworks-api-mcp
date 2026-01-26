---
type: property
interface: ILinearPatternFeatureData
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
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - auto
  - select
  - boolean
readonly: true
---

# ILinearPatternFeatureData.AutoSelect

Gets whether to automatically select all bodies in a multibody part intersected by this linear pattern feature.

## Signature

```csharp
System.Boolean AutoSelect {get;}
```
## Parameters

None.

## Return Value

True to automatically select all bodies intersected by this linear pattern feature, false to specify affected bodies

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