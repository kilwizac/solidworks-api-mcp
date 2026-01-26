---
type: property
interface: ITabAndSlotGroupData
member: D1OffsetFromStart
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - d1offsetfromstart
  - itabandslotgroupdata
  - tab
  - slot
  - group
  - data
  - d1
  - offset
  - start
  - double
readonly: null
---

# ITabAndSlotGroupData.D1OffsetFromStart

Gets or sets the starting offset of the tabs/slots in this group.

## Signature

```csharp
System.Double D1OffsetFromStart {get; set;}
```
## Parameters

None.

## Return Value

Distance from the edge where to start the tabs and slots

## Remarks

This method is valid only if
ITabAndSlotGroupData::Offset
is set to true.
If you want the tabs/slots to span the entire edge of the model, set both this property and
ITabAndSlotGroupData::D2OffsetFromEnd
to zero.