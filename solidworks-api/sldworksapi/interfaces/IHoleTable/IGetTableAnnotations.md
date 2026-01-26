---
type: method
interface: IHoleTable
member: IGetTableAnnotations
returns: HoleTableAnnotation
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of hole table annotations for this hole table feature (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
related: []
keywords:
  - split
  - table
  - igettableannotations
  - iholetable
  - hole
  - annotations
  - count
  - int32
  - annotation
---

# IHoleTable.IGetTableAnnotations

Gets the hole table annotations for this hole table feature.

## Signature

```csharp
HoleTableAnnotation IGetTableAnnotations( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of hole table annotations for this hole table feature (see Remarks )

## Return Value

in-process, unmanaged C++: Pointer to the IHoleTableAnnotation objects for this hole table feature VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Because many of the
ITableAnnotation
APIs apply to all parts of a table annotation that has been split, you might not want all of the table annotations when just one table annotation would be sufficient.
For example, if you change the thickness of the grid line, then changing it on one table annotation affects all splits of that table annotation. Thus, for this method, you might want to specify 1 for Count so that a single value is returned. Or, you can call
IHoleTable::GetTableAnnotationCount
if you want the total number of table annotations, including any splits, for this hole table feature.