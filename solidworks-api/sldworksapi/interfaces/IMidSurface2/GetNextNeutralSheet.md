---
type: method
interface: IMidSurface2
member: GetNextNeutralSheet
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - IMidSurface2.GetNeutralSheetCount
  - IMidSurface2.IGetFirstNeutralSheet
  - IMidSurface2.IGetNextNeutralSheet
keywords:
  - getnextneutralsheet
  - imidsurface2
  - mid
  - surface2
  - next
  - neutral
  - sheet
  - object
---

# IMidSurface2.GetNextNeutralSheet

Obsolete. Superseded by IMidSurface3::GetNextNeutralSheet.

## Signature

```csharp
System.Object GetNextNeutralSheet()
```
## Parameters

None.

## Return Value

Next reference surface sheet body in this midsurface feature

## Remarks

Each reference surface in the midsurface feature is considered a sheet body. If the reference surfaces are sewn together during the creation of the midsurface feature (
IModelDoc2::InsertMidSurfaceExt
), then the midsurface feature contains only one reference surface sheet body. If this is the case, then this method returns NULL. Use
IMidSurface2::GetFirstNeutralSheet
to get the first and only reference surface sheet body.
The sheet body returned from this method has the normal topology that you would expect to find on a body (for example, faces, edges, and so on). See the
IBody2
object for methods that provide access to this topology.

## See Also

- `IMidSurface2.GetNeutralSheetCount`
- `IMidSurface2.IGetFirstNeutralSheet`
- `IMidSurface2.IGetNextNeutralSheet`