---
type: property
interface: ITabAndSlotGroupData
member: TabChamferEdgeTreatmentValue
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
  - tabchamferedgetreatmentvalue
  - itabandslotgroupdata
  - tab
  - slot
  - group
  - data
  - chamfer
  - edge
  - treatment
  - value
  - double
readonly: null
---

# ITabAndSlotGroupData.TabChamferEdgeTreatmentValue

Gets or sets the chamfer distance for tab edges.

## Signature

```csharp
System.Double TabChamferEdgeTreatmentValue {get; set;}
```
## Parameters

None.

## Return Value

Chamfer distance

## Remarks

This property is valid only if
ITabAndSlotGroupData::TabEdgesType
is set to
swTabEdgesType_e
.ChamferEdge.