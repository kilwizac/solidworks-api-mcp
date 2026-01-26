---
type: property
interface: ICountersinkElementData
member: Angle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - angle
  - icountersinkelementdata
  - countersink
  - element
  - data
  - double
readonly: null
---

# ICountersinkElementData.Angle

Gets or sets the angle of this countersink hole element.

## Signature

```csharp
System.Double Angle {get; set;}
```
## Parameters

None.

## Return Value

Angle in radians

## Remarks

This property is valid only if
ICountersinkElementData::AngleOverride
is set to true.