---
type: property
interface: ISMCornerReliefData
member: SlotWidth
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - slotwidth
  - ismcornerreliefdata
  - ism
  - corner
  - relief
  - data
  - slot
  - width
  - double
  - icornerrelieffeaturedata
readonly: null
---

# ISMCornerReliefData.SlotWidth

Gets and sets the width of this corner relief slot.

## Signature

```csharp
System.Double SlotWidth {get; set;}
```
## Parameters

None.

## Return Value

Corner relief slot width (see Remarks )

## Remarks

This property is valid only if
ISMCornerReliefData::ReliefType
is set to one of the following
swCornerReliefType_e
members. If...:
swCornerCircularRelief, then this property returns a radial slot width value.
swCornerObroundRelief, then this property returns a linear slot width value.

## Examples

- ICornerReliefFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerReliefFeatureData)