---
type: method
interface: IMidSurface3
member: IGetNextNeutralSheet
returns: Body2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMidSurface3.GetFirstNeutralSheet
  - IMidSurface3.GetNeutralSheetCount
  - IMidSurface3.GetNextNeutralSheet
keywords:
  - igetnextneutralsheet
  - imidsurface3
  - mid
  - surface3
  - next
  - neutral
  - sheet
  - body2
---

# IMidSurface3.IGetNextNeutralSheet

Gets the next reference surface in this midsurface feature.

## Signature

```csharp
Body2 IGetNextNeutralSheet()
```
## Parameters

None.

## Return Value

Next reference surface sheet body in this midsurface feature

## Remarks

Each reference surface in the midsurface feature is considered a sheet body. If the reference surfaces are sewn together during the creation of the midsurface feature (
IFeatureManager::InsertMidSurface
), then the midsurface feature contains only one reference surface sheet body. If this is the case, then this method returns NULL. Use
IMidSurface3::IGetFirstNeutralSheet
to get the first and only reference surface sheet body.
The sheet body returned from this method has the normal topology that you would expect to find on a body (for example, faces, edges, and so on). See the
IBody2
object for methods that provide access to this topology.

## See Also

- `IMidSurface3.GetFirstNeutralSheet`
- `IMidSurface3.GetNeutralSheetCount`
- `IMidSurface3.GetNextNeutralSheet`