---
type: method
interface: IBomFeature
member: IGetTableAnnotations
returns: BomTableAnnotation
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of BOM table annotations for this BOM feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
  - features
related:
  - IBomFeature.GetTableAnnotations
keywords:
  - igettableannotations
  - ibomfeature
  - bom
  - feature
  - table
  - annotations
  - count
  - int32
  - annotation
---

# IBomFeature.IGetTableAnnotations

Gets the BOM table annotations for this BOM table feature.

## Signature

```csharp
BomTableAnnotation IGetTableAnnotations( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of BOM table annotations for this BOM feature

## Return Value

in-process, unmanaged C++: Pointer to an array of IBOMTableAnnotation objects VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IBomFeature::GetTableAnnotationCount
to determine the size of the array.

## See Also

- `IBomFeature.GetTableAnnotations`