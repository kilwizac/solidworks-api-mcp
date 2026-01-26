---
type: property
interface: IExtrudeFeatureData2
member: FlipSideToCut
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - flip
  - side
  - cut
  - flipsidetocut
  - iextrudefeaturedata2
  - extrude
  - feature
  - data2
  - boolean
readonly: null
---

# IExtrudeFeatureData2.FlipSideToCut

Gets or sets whether to flip the side to cut.

## Signature

```csharp
System.Boolean FlipSideToCut {get; set;}
```
## Parameters

None.

## Return Value

True flips the side to cut, false does not

## Remarks

This property is relevant only for cut features.
If the sketch is open, then the first edge in the array returned by
ISketch::GetContourEdges
and
ISketch::IGetControuEdges
is cut.