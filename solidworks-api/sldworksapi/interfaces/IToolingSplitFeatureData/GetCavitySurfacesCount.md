---
type: method
interface: IToolingSplitFeatureData
member: GetCavitySurfacesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IToolingSplitFeatureData.CavitySurfaces
  - IToolingSplitFeatureData.ISetCavitySurfaces
keywords:
  - getcavitysurfacescount
  - itoolingsplitfeaturedata
  - tooling
  - split
  - feature
  - data
  - cavity
  - surfaces
  - count
  - int32
---

# IToolingSplitFeatureData.GetCavitySurfacesCount

Gets the number of cavity surface bodies in this tooling split feature.

## Signature

```csharp
System.Int32 GetCavitySurfacesCount()
```
## Parameters

None.

## Return Value

Number of cavity surface bodies

## Remarks

Call this method before calling
IToolingSplitFeatureData::IGetCavitySurfaces
to get the size of the array for that method.

## Examples

- IToolingSplitFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IToolingSplitFeatureData)

## See Also

- `IToolingSplitFeatureData.CavitySurfaces`
- `IToolingSplitFeatureData.ISetCavitySurfaces`