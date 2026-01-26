---
type: property
interface: IBeltChainFeatureData
member: UseBeltThickness
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - usebeltthickness
  - ibeltchainfeaturedata
  - belt
  - chain
  - feature
  - data
  - use
  - thickness
  - boolean
readonly: null
---

# IBeltChainFeatureData.UseBeltThickness

Gets and sets whether to specify belt thickness.

## Signature

```csharp
System.Boolean UseBeltThickness {get; set;}
```
## Parameters

None.

## Return Value

True to specify belt thickness, false to not

## Remarks

If this property is true, use
IBeltChainFeatureData::BeltThickness
to specify belt thickness.

## Examples

- IBeltChainFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBeltChainFeatureData)