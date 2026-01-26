---
type: property
interface: ISlotMateFeatureData
member: Percent
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related: []
keywords:
  - percent
  - islotmatefeaturedata
  - slot
  - mate
  - feature
  - data
  - double
readonly: null
---

# ISlotMateFeatureData.Percent

Gets or sets the percent of slot length where to place the component axis in this slot mate.

## Signature

```csharp
System.Double Percent {get; set;}
```
## Parameters

None.

## Return Value

Percent of slot length

## Remarks

This property is valid only if
ISlotMateFeatureData::Constraint
is set to
swSlotMateConstraintOptions_e
.swSlotMateConstraintOption_Percent.
To change the endpoint from which the distance is measured, set
ISlotMateFeatureData::FlipDirection
to true.