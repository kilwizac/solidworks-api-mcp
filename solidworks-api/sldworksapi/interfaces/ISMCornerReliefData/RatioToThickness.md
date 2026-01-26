---
type: property
interface: ISMCornerReliefData
member: RatioToThickness
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - ratiotothickness
  - ismcornerreliefdata
  - ism
  - corner
  - relief
  - data
  - ratio
  - thickness
  - boolean
  - icornerrelieffeaturedata
readonly: null
---

# ISMCornerReliefData.RatioToThickness

Gets and sets whether to use a ratio of length/width over sheet metal thickness to cut the bend area so that the body can be folded.

## Signature

```csharp
System.Boolean RatioToThickness {get; set;}
```
## Parameters

None.

## Return Value

True to use a ratio value to cut the bend area, false to not

## Remarks

This property is valid only if
ISMCornerReliefData::ReliefType
is set to
swCornerReliefType_e
.:
swCornerCircularRelief
swCornerObroundRelief
swCornerRectangularRelief
If
ISMCornerReliefData::ReliefType
is set to
swCornerReliefType_e
.swCornerRectangularRelief.
Then the calculated ratio(s) is(are)...
swCornerCircularRelief
slot length / thickness of sheet metal
swCornerRectangularRelief
slot length / thickness of sheet metal
swCornerObroundRelief
slot length / thickness of sheet metal
- And -
slot width / thickness of sheet metal

## Examples

- ICornerReliefFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerReliefFeatureData)