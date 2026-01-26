---
type: method
interface: ISurfaceRadiateFeatureData
member: GetRadiatedEntitiesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfaceRadiateFeatureData.ISetRadiatedEntities
  - ISurfaceRadiateFeatureData.RadiatedEntities
keywords:
  - getradiatedentitiescount
  - isurfaceradiatefeaturedata
  - surface
  - radiate
  - feature
  - data
  - radiated
  - entities
  - count
  - int32
---

# ISurfaceRadiateFeatureData.GetRadiatedEntitiesCount

Gets the number of radiated entities for this surface radiate feature.

## Signature

```csharp
System.Int32 GetRadiatedEntitiesCount()
```
## Parameters

None.

## Return Value

Number of radiated entities

## Remarks

Call this method before calling
ISurfaceRadiateFeatureData::IGetRadiatedEntities
to get the size of the array for that method.

## Examples

- ISurfaceRadiateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISurfaceRadiateFeatureData)

## See Also

- `ISurfaceRadiateFeatureData.ISetRadiatedEntities`
- `ISurfaceRadiateFeatureData.RadiatedEntities`