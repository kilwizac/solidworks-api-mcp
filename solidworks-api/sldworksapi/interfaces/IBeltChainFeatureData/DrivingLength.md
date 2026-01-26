---
type: property
interface: IBeltChainFeatureData
member: DrivingLength
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - drivinglength
  - ibeltchainfeaturedata
  - belt
  - chain
  - feature
  - data
  - driving
  - length
  - boolean
readonly: null
---

# IBeltChainFeatureData.DrivingLength

Gets and sets whether belt length can be changed.

## Signature

```csharp
System.Boolean DrivingLength {get; set;}
```
## Parameters

None.

## Return Value

True to allow belt length changes, false to not

## Remarks

If this property is true, then use
IBeltChainFeatureData::BeltLength
to set the belt length. Pulley positions adjust if at least one pulley has an appropriate degree of freedom.

## Examples

- IBeltChainFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBeltChainFeatureData)