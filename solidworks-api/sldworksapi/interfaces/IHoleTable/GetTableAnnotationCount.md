---
type: method
interface: IHoleTable
member: GetTableAnnotationCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
related:
  - IHoleTable.GetTableAnnotations
keywords:
  - split
  - table
  - gettableannotationcount
  - iholetable
  - hole
  - annotation
  - count
  - int32
---

# IHoleTable.GetTableAnnotationCount

Gets the number of hole table annotations for this hole table.

## Signature

```csharp
System.Int32 GetTableAnnotationCount()
```
## Parameters

None.

## Return Value

Number of hole table annotations for this hole table (see Remarks )

## Remarks

Normally there is one hole table annotation per hole table feature. For example, if you split the table, then there are two separate table annotations.
Call this method before calling
IHoleTable::IGetTableAnnotations
if you want to get the total number of table annotations in the hole table, including split table annotations.

## See Also

- `IHoleTable.GetTableAnnotations`