---
type: method
interface: IPunchTable
member: IGetTableAnnotations
returns: PunchTableAnnotation
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of punch table annotations for this punch table feature (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
related:
  - IPunchTable.GetTableAnnotations
keywords:
  - split
  - table
  - igettableannotations
  - ipunchtable
  - punch
  - annotations
  - count
  - int32
  - annotation
---

# IPunchTable.IGetTableAnnotations

Gets the punch table annotations for this punch table feature.

## Signature

```csharp
PunchTableAnnotation IGetTableAnnotations( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of punch table annotations for this punch table feature (see Remarks )

## Return Value

In-process, unmanaged C++: Pointer to the IPunchTableAnnotation objects for this punch table feature VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

This method gets all of the table annotations of a split table. Many of the
ITableAnnotation
methods and properties get table annotation information that is common to all table annotations. You should apply these
ITableAnnotation
methods and properties to only one of the split table annotations returned by this method. Otherwise, you will get redundant data.
For example, if you change the thickness of the grid line, then changing it on one table annotation affects all splits of that table annotation. Thus, for this method, you might want to specify 1 for Count so that a single value is returned. Or, you can call
IPunchTable::GetTableAnnotationCount
if you want the total number of table annotations, including any splits, for this punch table feature.

## See Also

- `IPunchTable.GetTableAnnotations`