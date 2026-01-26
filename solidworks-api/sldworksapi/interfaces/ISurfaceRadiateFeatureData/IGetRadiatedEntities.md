---
type: method
interface: ISurfaceRadiateFeatureData
member: IGetRadiatedEntities
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of radiated entities
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - igetradiatedentities
  - isurfaceradiatefeaturedata
  - surface
  - radiate
  - feature
  - data
  - radiated
  - entities
  - count
  - int32
  - object
---

# ISurfaceRadiateFeatureData.IGetRadiatedEntities

Gets the radiated entities for this surface radiate feature.

## Signature

```csharp
System.Object IGetRadiatedEntities( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of radiated entities

## Return Value

in-process, unmanaged C++: Pointer to an array of radiated entities of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISurfaceRadiateFeatureData::GetRadiatedEntitiesCount
before calling this method to get the value of Count.
See
Accessing Selections that Define Features
for additional details.