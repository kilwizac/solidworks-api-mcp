---
type: method
interface: IBendTable
member: IGetTableAnnotations
returns: BendTableAnnotation
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of bend table annotations
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
related:
  - IBendTable.GetTableAnnotations
keywords:
  - igettableannotations
  - ibendtable
  - bend
  - table
  - annotations
  - count
  - int32
  - annotation
---

# IBendTable.IGetTableAnnotations

Gets the annotations for this bend table.

## Signature

```csharp
BendTableAnnotation IGetTableAnnotations( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of bend table annotations

## Return Value

In-process, unmanaged C++: Pointer to an array of IBendTableAnnotation s VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IBendTable::GetTableAnnotationCount
to populate Count.

## See Also

- `IBendTable.GetTableAnnotations`