---
type: method
interface: ICornerReliefFeatureData
member: GetCornerAtIndex
returns: System.Int32
parameters:
  -
    name: CornerIndex
    type: System.Int32
    description: One-based index of corner to retrieve
  -
    name: Corner
    type: System.Object
    description: ISMCornerReliefData
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getcorneratindex
  - icornerrelieffeaturedata
  - corner
  - relief
  - feature
  - data
  - index
  - int32
  - object
---

# ICornerReliefFeatureData.GetCornerAtIndex

Gets the corner at the specified index of this corner relief feature.

## Signature

```csharp
System.Int32 GetCornerAtIndex( 
   System.Int32
CornerIndex
,
   out System.Object
Corner
)
```
## Parameters

- `CornerIndex` (System.Int32): One-based index of corner to retrieve
- `Corner` (System.Object): ISMCornerReliefData

## Return Value

Error code as defined by swCornerReliefError_e

## Examples

- ICornerReliefFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerReliefFeatureData)