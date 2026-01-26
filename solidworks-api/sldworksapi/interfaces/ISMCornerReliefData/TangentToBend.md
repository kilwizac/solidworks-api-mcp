---
type: property
interface: ISMCornerReliefData
member: TangentToBend
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - tangenttobend
  - ismcornerreliefdata
  - ism
  - corner
  - relief
  - data
  - tangent
  - bend
  - boolean
  - icornerrelieffeaturedata
readonly: null
---

# ISMCornerReliefData.TangentToBend

Gets and sets whether to make the corner relief tangent to the inside bend edges.

## Signature

```csharp
System.Boolean TangentToBend {get; set;}
```
## Parameters

None.

## Return Value

True to make the corner relief tangent to the inside bend edges, false to not

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
swCornerRectangularRelief

## Examples

- ICornerReliefFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerReliefFeatureData)