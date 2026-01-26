---
type: property
interface: ISMCornerReliefData
member: AddFilletedCorners
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISMCornerReliefData.CornerFilletDiameter
keywords:
  - addfilletedcorners
  - ismcornerreliefdata
  - ism
  - corner
  - relief
  - data
  - add
  - filleted
  - corners
  - boolean
  - icornerrelieffeaturedata
readonly: null
---

# ISMCornerReliefData.AddFilletedCorners

Gets and sets whether to fillet the corner relief corners.

## Signature

```csharp
System.Boolean AddFilletedCorners {get; set;}
```
## Parameters

None.

## Return Value

True to fillet the corner relief corners, false to not

## Remarks

This property is valid only if
ISMCornerReliefData::ReliefType
is set to
swCornerReliefType_e
.swCornerRectangularRelief.

## Examples

- ICornerReliefFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerReliefFeatureData)

## See Also

- `ISMCornerReliefData.CornerFilletDiameter`