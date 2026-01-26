---
type: property
interface: IBeltChainFeatureData
member: CreateBeltPart
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related: []
keywords:
  - createbeltpart
  - ibeltchainfeaturedata
  - belt
  - chain
  - feature
  - data
  - create
  - part
  - boolean
readonly: null
---

# IBeltChainFeatureData.CreateBeltPart

Gets and sets whether to create a new part that contains the belt sketch.

## Signature

```csharp
System.Boolean CreateBeltPart {get; set;}
```
## Parameters

None.

## Return Value

True to create a belt part, false to not

## Remarks

If this property is set to true, use
IBeltChainFeatureData::AccessBeltPart
to get the belt part.

## Examples

- IBeltChainFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBeltChainFeatureData)