---
type: method
interface: IMidSurface3
member: IGetFirstNeutralSheet
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
  - igetfirstneutralsheet
  - imidsurface3
  - mid
  - surface3
  - first
  - neutral
  - sheet
  - body2
---

# IMidSurface3.IGetFirstNeutralSheet

Gets the first reference surface in this midsurface }}-->feature.

## Signature

```csharp
Body2 IGetFirstNeutralSheet()
```
## Parameters

None.

## Return Value

First reference surface sheet body in this midsurface feature

## Remarks

Each reference surface in the midsurface feature is considered to be a sheet body. If the reference surfaces are sewn together during the creation of the midsurface feature (
IFeatureManager::InsertMidSurface
), then the midsurface feature contains only one reference surface sheet body.
The sheet body returned from this method has the normal topology that you would expect to find on a body (for example, faces, edges, and so on). See the
IBody2
object for methods that provide access to this topology.
Call
IMidSurface3::IGetNextNeutralSheet
to get the next reference surface in this midsurface feature.

## See Also

- `IMidSurface3.GetFirstNeutralSheet`
- `IMidSurface3.GetNeutralSheetCount`
- `IMidSurface3.GetNextNeutralSheet`