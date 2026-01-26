---
type: property
interface: IBeltChainFeatureData
member: PulleyComponents
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - pulleycomponents
  - ibeltchainfeaturedata
  - belt
  - chain
  - feature
  - data
  - pulley
  - components
  - object
readonly: null
---

# IBeltChainFeatureData.PulleyComponents

Gets and sets the components in this belt/chain assembly feature.

## Signature

```csharp
System.Object PulleyComponents {get; set;}
```
## Parameters

None.

## Return Value

Array of pulley members, e.g., cylindrical faces, axes, wheels, gears

## Remarks

The array maps one-to-one with the arrays of
IBeltChainFeatureData::FlipSides
and
IBeltChainFeatureData::PulleyDiameters
.

## Examples

- IBeltChainFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBeltChainFeatureData)