---
type: property
interface: IBeltChainFeatureData
member: BeltThickness
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - beltthickness
  - ibeltchainfeaturedata
  - belt
  - chain
  - feature
  - data
  - thickness
  - double
readonly: null
---

# IBeltChainFeatureData.BeltThickness

Gets and sets the belt thickness.

## Signature

```csharp
System.Double BeltThickness {get; set;}
```
## Parameters

None.

## Return Value

Belt thickness

## Remarks

This property is valid only if
IBeltChainFeatureData::UseBeltThickness
is true. The belt curve is offset from the cylindrical faces of the pulleys by one half the specified belt thickness.

## Examples

- IBeltChainFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBeltChainFeatureData)