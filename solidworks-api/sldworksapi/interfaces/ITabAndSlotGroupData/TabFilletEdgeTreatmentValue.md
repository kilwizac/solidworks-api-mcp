---
type: property
interface: ITabAndSlotGroupData
member: TabFilletEdgeTreatmentValue
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - tabfilletedgetreatmentvalue
  - itabandslotgroupdata
  - tab
  - slot
  - group
  - data
  - fillet
  - edge
  - treatment
  - value
  - double
readonly: null
---

# ITabAndSlotGroupData.TabFilletEdgeTreatmentValue

Gets or sets the fillet radius for tab edges.

## Signature

```csharp
System.Double TabFilletEdgeTreatmentValue {get; set;}
```
## Parameters

None.

## Return Value

Fillet radius

## Remarks

This property is valid only if
ITabAndSlotGroupData::TabEdgesType
is set to
swTabEdgesType_e
.FilletEdge.