---
type: property
interface: ISlotMateFeatureData
member: Distance
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
  - distance
  - islotmatefeaturedata
  - slot
  - mate
  - feature
  - data
  - double
readonly: null
---

# ISlotMateFeatureData.Distance

Gets or sets the distance from the end of the slot where to place the component axis in this slot mate.

## Signature

```csharp
System.Double Distance {get; set;}
```
## Parameters

None.

## Return Value

Distance from the end of the slot

## Remarks

This property is valid only if
ISlotMateFeatureData::Constraint
is set to
swSlotMateConstraintOptions_e
.swSlotMateConstraintOption_Distance.
To change the endpoint from which the distance is measured, set
ISlotMateFeatureData::FlipDirection
to true.