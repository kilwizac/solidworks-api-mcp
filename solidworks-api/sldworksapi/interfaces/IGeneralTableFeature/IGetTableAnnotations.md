---
type: method
interface: IGeneralTableFeature
member: IGetTableAnnotations
returns: TableAnnotation
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of table annotations
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
  - features
related:
  - IGeneralTableFeature.GetTableAnnotations
keywords:
  - table
  - annotations
  - see
  - also
  - itableannotation
  - general
  - tables
  - igettableannotations
  - igeneraltablefeature
  - feature
  - count
  - int32
  - annotation
---

# IGeneralTableFeature.IGetTableAnnotations

Gets the table annotations for this general table feature.

## Signature

```csharp
TableAnnotation IGetTableAnnotations( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of table annotations

## Return Value

in-process, unmanaged C++: Pointer to an array of IGeneralTableAnnotation objects VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IGeneralTableFeature::GetTableAnnotationCount
before calling this method to get the size of the array.

## See Also

- `IGeneralTableFeature.GetTableAnnotations`