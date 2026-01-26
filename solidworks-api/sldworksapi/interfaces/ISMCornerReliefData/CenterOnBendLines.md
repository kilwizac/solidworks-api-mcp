---
type: property
interface: ISMCornerReliefData
member: CenterOnBendLines
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - centeronbendlines
  - ismcornerreliefdata
  - ism
  - corner
  - relief
  - data
  - center
  - bend
  - lines
  - boolean
  - icornerrelieffeaturedata
readonly: null
---

# ISMCornerReliefData.CenterOnBendLines

Gets and sets whether to center this corner relative to the bend lines.

## Signature

```csharp
System.Boolean CenterOnBendLines {get; set;}
```
## Parameters

None.

## Return Value

True to center relative to the bend lines, false to not

## Remarks

This property is valid only if:
ICornerReliefFeatureData::CornerType
is set to
swCornerReliefBendType_e
.swCornerReliefBendType_TwoBend
- And -
ISMCornerReliefData::ReliefType
is set to
swCornerReliefType_e
.:
swCornerCircularRelief
swCornerObroundRelief
swCornerRectangularRelief

## Examples

- ICornerReliefFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerReliefFeatureData)