---
type: method
interface: IMidSurface3
member: GetFacePairCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IMidSurface3.GetFirstFacePair
  - IMidSurface3.GetNextFacePair
  - IMidSurface3.IGetFirstFacePair
  - IMidSurface3.IGetNextFacePair
keywords:
  - getfacepaircount
  - imidsurface3
  - mid
  - surface3
  - face
  - pair
  - count
  - int32
---

# IMidSurface3.GetFacePairCount

Gets the number of parallel pairs of faces found in the original part body that were used to calculate the midsurface feature.

## Signature

```csharp
System.Int32 GetFacePairCount()
```
## Parameters

None.

## Return Value

Number of parallel face pairs from the original part body

## See Also

- `IMidSurface3.GetFirstFacePair`
- `IMidSurface3.GetNextFacePair`
- `IMidSurface3.IGetFirstFacePair`
- `IMidSurface3.IGetNextFacePair`