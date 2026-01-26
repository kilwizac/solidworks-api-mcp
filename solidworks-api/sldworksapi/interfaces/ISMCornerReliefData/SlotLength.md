---
type: property
interface: ISMCornerReliefData
member: SlotLength
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - slotlength
  - ismcornerreliefdata
  - ism
  - corner
  - relief
  - data
  - slot
  - length
  - double
  - icornerrelieffeaturedata
readonly: null
---

# ISMCornerReliefData.SlotLength

Gets and sets the length of this corner relief slot.

## Signature

```csharp
System.Double SlotLength {get; set;}
```
## Parameters

None.

## Return Value

Length

## Remarks

This property is valid only if
ISMCornerReliefData::ReliefType
is set to
swCornerReliefType_e
.:
swCornerRectangularRelief
swCornerObroundRelief

## Examples

- ICornerReliefFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerReliefFeatureData)