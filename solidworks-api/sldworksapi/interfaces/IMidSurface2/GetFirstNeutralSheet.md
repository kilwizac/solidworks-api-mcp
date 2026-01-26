---
type: method
interface: IMidSurface2
member: GetFirstNeutralSheet
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
  - getfirstneutralsheet
  - imidsurface2
  - mid
  - surface2
  - first
  - neutral
  - sheet
  - object
---

# IMidSurface2.GetFirstNeutralSheet

Obsolete. Superseded by IMidSurface3::GetFirstNeutralSheet.

## Signature

```csharp
System.Object GetFirstNeutralSheet()
```
## Parameters

None.

## Return Value

First reference surface sheet body in this midsurface feature

## Remarks

Each reference surface in the midsurface feature is considered to be a sheet body. If the reference surfaces are sewn together during the creation of the midsurface feature (
IModelDoc2::InsertMidSurfaceExt
), then the midsurface feature contains only one reference surface sheet body.
The sheet body returned from this method has the normal topology that you would expect to find on a body (for example, faces, edges, and so on). See the
IBody2
object for methods that provide access to this topology.
Call
IMidSurface2::GetNextNeutralSheet
to get the next reference surface in this midsurface feature.

## See Also

- `IMidSurface2.GetNeutralSheetCount`
- `IMidSurface2.IGetFirstNeutralSheet`
- `IMidSurface2.IGetNextNeutralSheet`