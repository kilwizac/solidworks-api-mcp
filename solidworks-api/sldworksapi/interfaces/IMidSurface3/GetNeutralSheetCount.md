---
type: method
interface: IMidSurface3
member: GetNeutralSheetCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMidSurface3.GetFirstNeutralSheet
  - IMidSurface3.GetNextNeutralSheet
  - IMidSurface3.IGetFirstNeutralSheet
  - IMidSurface3.IGetNextNeutralSheet
keywords:
  - getneutralsheetcount
  - imidsurface3
  - mid
  - surface3
  - neutral
  - sheet
  - count
  - int32
---

# IMidSurface3.GetNeutralSheetCount

Gets the total number of reference surfaces found in this midsurface feature.

## Signature

```csharp
System.Int32 GetNeutralSheetCount()
```
## Parameters

None.

## Return Value

Number of reference surface sheet bodies found in this midsurface feature

## Remarks

Each reference surface in the midsurface feature is considered to be a sheet body. If the reference surfaces are sewn together during the creation of our midsurface feature,
IFeatureManager::InsertMidSurface
, then the midsurface feature contains only one reference surface sheet body.

## See Also

- `IMidSurface3.GetFirstNeutralSheet`
- `IMidSurface3.GetNextNeutralSheet`
- `IMidSurface3.IGetFirstNeutralSheet`
- `IMidSurface3.IGetNextNeutralSheet`