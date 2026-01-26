---
type: property
interface: IBeltChainFeatureData
member: FlipSides
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - flipsides
  - ibeltchainfeaturedata
  - belt
  - chain
  - feature
  - data
  - flip
  - sides
  - object
readonly: null
---

# IBeltChainFeatureData.FlipSides

Gets and sets whether to flip the belt to the other side of each pulley.

## Signature

```csharp
System.Object FlipSides {get; set;}
```
## Parameters

None.

## Return Value

Array of booleans; true to flip pulley sides, false to not

## Remarks

The array maps one-to-one with the arrays of
IBeltChainFeatureData::PulleyComponents
and
IBeltChainFeatureData::PulleyDiameters
.

## Examples

- IBeltChainFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBeltChainFeatureData)