---
type: method
interface: ISurfaceRadiateFeatureData
member: ISetRadiatedEntities
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of radiated entities
  -
    name: DispArr
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of radiated entities of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfaceRadiateFeatureData.GetRadiatedEntitiesCount
  - ISurfaceRadiateFeatureData.IGetRadiatedEntities
  - ISurfaceRadiateFeatureData.RadiatedEntities
keywords:
  - isetradiatedentities
  - isurfaceradiatefeaturedata
  - surface
  - radiate
  - feature
  - data
  - radiated
  - entities
  - count
  - int32
  - disp
  - arr
  - object
  - void
---

# ISurfaceRadiateFeatureData.ISetRadiatedEntities

Sets the radiated entities for this surface radiate feature.

## Signature

```csharp
void ISetRadiatedEntities( 
   System.Int32
Count
,
   ref System.Object
DispArr
)
```
## Parameters

- `Count` (System.Int32): Number of radiated entities
- `DispArr` (System.Object): in-process, unmanaged C++: Pointer to an array of radiated entities of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISurfaceRadiateFeatureData.GetRadiatedEntitiesCount`
- `ISurfaceRadiateFeatureData.IGetRadiatedEntities`
- `ISurfaceRadiateFeatureData.RadiatedEntities`