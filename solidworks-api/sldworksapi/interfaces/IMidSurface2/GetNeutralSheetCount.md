---
type: method
interface: IMidSurface2
member: GetNeutralSheetCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - IMidSurface2.GetFirstNeutralSheet
  - IMidSurface2.GetNextNeutralSheet
  - IMidSurface2.IGetFirstNeutralSheet
  - IMidSurface2.IGetNextNeutralSheet
keywords:
  - getneutralsheetcount
  - imidsurface2
  - mid
  - surface2
  - neutral
  - sheet
  - count
  - int32
---

# IMidSurface2.GetNeutralSheetCount

Obsolete. Superseded by IMidSurface3::GetNeutralSheetCount.

## Signature

```csharp
System.Int32 GetNeutralSheetCount()
```
## Parameters

None.

## Return Value

Number of reference surface sheet bodies found in this midsurface feature

## Remarks

Each reference surface in the midsurface feature is considered to be a sheet body. If the reference surfaces are sewn together during the creation of our midsurface feature (
IModelDoc2::InsertMidSurfaceExt
or
IModelDoc2::IInsertMidSurfaceExt
), then the midsurface feature contains only one reference surface sheet body.

## See Also

- `IMidSurface2.GetFirstNeutralSheet`
- `IMidSurface2.GetNextNeutralSheet`
- `IMidSurface2.IGetFirstNeutralSheet`
- `IMidSurface2.IGetNextNeutralSheet`