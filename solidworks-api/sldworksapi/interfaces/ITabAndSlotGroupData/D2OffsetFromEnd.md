---
type: property
interface: ITabAndSlotGroupData
member: D2OffsetFromEnd
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - d2offsetfromend
  - itabandslotgroupdata
  - tab
  - slot
  - group
  - data
  - d2
  - offset
  - end
  - double
readonly: null
---

# ITabAndSlotGroupData.D2OffsetFromEnd

Gets or sets the ending offset of the tabs/slots in this group.

## Signature

```csharp
System.Double D2OffsetFromEnd {get; set;}
```
## Parameters

None.

## Return Value

Distance from the edge where to end the tabs and slots

## Remarks

This method is valid only if
ITabAndSlotGroupData::Offset
is set to true.
If you want the tabs/slots to span the entire edge of the model, set both this property and
ITabAndSlotGroupData::D2OffsetFromStart
to zero.