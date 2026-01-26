---
type: method
interface: ICornerReliefFeatureData
member: GetCorners
returns: System.Object
parameters:
  -
    name: CornerReliefType
    type: System.Int32
    description: Corner relief type as defined by swCornerReliefType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getcorners
  - icornerrelieffeaturedata
  - corner
  - relief
  - feature
  - data
  - corners
  - type
  - int32
  - object
---

# ICornerReliefFeatureData.GetCorners

Gets all corners of the specified type in this corner relief feature.

## Signature

```csharp
System.Object GetCorners( 
   System.Int32
CornerReliefType
)
```
## Parameters

- `CornerReliefType` (System.Int32): Corner relief type as defined by swCornerReliefType_e

## Return Value

Array of ISMCornerReliefData s

## Remarks

If CornerReliefType is specified with -1, then this method retrieves corners of all types.

## Examples

- ICornerReliefFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerReliefFeatureData)