---
type: property
interface: ISMCornerReliefData
member: CornerFilletDiameter
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - cornerfilletdiameter
  - ismcornerreliefdata
  - ism
  - corner
  - relief
  - data
  - fillet
  - diameter
  - double
  - icornerrelieffeaturedata
readonly: null
---

# ISMCornerReliefData.CornerFilletDiameter

Gets and sets the diameter of the filleted corner.

## Signature

```csharp
System.Double CornerFilletDiameter {get; set;}
```
## Parameters

None.

## Return Value

Diameter

## Remarks

This property is valid only if:
ISMCornerReliefData::AddFilletedCorners
is true,
- And -
ISMCornerReliefData::ReliefType
is set to
swCornerReliefType_e
.swCornerRectangularRelief.

## Examples

- ICornerReliefFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerReliefFeatureData)