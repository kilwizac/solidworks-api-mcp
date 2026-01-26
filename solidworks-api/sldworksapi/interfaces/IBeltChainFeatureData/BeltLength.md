---
type: property
interface: IBeltChainFeatureData
member: BeltLength
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - beltlength
  - ibeltchainfeaturedata
  - belt
  - chain
  - feature
  - data
  - length
  - double
readonly: null
---

# IBeltChainFeatureData.BeltLength

Gets and sets the belt length.

## Signature

```csharp
System.Double BeltLength {get; set;}
```
## Parameters

None.

## Return Value

Belt length

## Remarks

This property can only be set if
IBeltChainFeatureData::DrivingLength
is set to true.

## Examples

- IBeltChainFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBeltChainFeatureData)