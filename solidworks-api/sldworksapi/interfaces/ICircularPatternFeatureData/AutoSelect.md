---
type: property
interface: ICircularPatternFeatureData
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
  - icircularpatternfeaturedata
  - circular
  - pattern
  - feature
  - data
  - auto
  - select
  - boolean
readonly: true
---

# ICircularPatternFeatureData.AutoSelect

Gets whether to automatically select all bodies in a multibody part intersected by this circular pattern feature.

## Signature

```csharp
System.Boolean AutoSelect {get;}
```
## Parameters

None.

## Return Value

True to automatically select all bodies intersected by this circular pattern feature, false to specify affected bodies

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