---
type: method
interface: ITitleBlockTableFeature
member: IGetTableAnnotations
returns: TitleBlockTableAnnotation
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of annotations in this title block feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
  - features
related: []
keywords:
  - igettableannotations
  - ititleblocktablefeature
  - title
  - block
  - table
  - feature
  - annotations
  - count
  - int32
  - annotation
---

# ITitleBlockTableFeature.IGetTableAnnotations

Gets all of the title block table annotations in this title block table feature.

## Signature

```csharp
TitleBlockTableAnnotation IGetTableAnnotations( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of annotations in this title block feature

## Return Value

in-process, unmanaged C++: Pointer to an array of title block table annotations VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ITitleBlockTableFeature::GetTableAnnotationCount
to get the value for Count.