---
type: method
interface: ICornerReliefFeatureData
member: CollectAllCorners
returns: System.Int32
parameters:
  -
    name: ReliefType
    type: System.Int32
    description: Corner relief type as defined by swCornerReliefType_e
  -
    name: Corners
    type: System.Object
    description: Array of ISMCornerReliefData s
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - collectallcorners
  - icornerrelieffeaturedata
  - corner
  - relief
  - feature
  - data
  - collect
  - all
  - corners
  - type
  - int32
  - object
---

# ICornerReliefFeatureData.CollectAllCorners

Creates corners, all with the specified relief, in a selected sheet-metal body.

## Signature

```csharp
System.Int32 CollectAllCorners( 
   System.Int32
ReliefType
,
   out System.Object
Corners
)
```
## Parameters

- `ReliefType` (System.Int32): Corner relief type as defined by swCornerReliefType_e
- `Corners` (System.Object): Array of ISMCornerReliefData s

## Return Value

Error code as defined by swCornerReliefError_e

## Remarks

Before calling this method, call
ICornerReliefFeatureData::SetBodyScope
.

## Examples

- ICornerReliefFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerReliefFeatureData)