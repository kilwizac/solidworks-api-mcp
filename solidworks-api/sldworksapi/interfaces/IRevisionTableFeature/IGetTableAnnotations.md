---
type: method
interface: IRevisionTableFeature
member: IGetTableAnnotations
returns: RevisionTableAnnotation
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of revision table annotations
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
  - features
related:
  - IRevisionTableFeature.GetTableAnnotations
keywords:
  - igettableannotations
  - irevisiontablefeature
  - revision
  - table
  - feature
  - annotations
  - count
  - int32
  - annotation
---

# IRevisionTableFeature.IGetTableAnnotations

Gets the revision table annotations for this revision table.

## Signature

```csharp
RevisionTableAnnotation IGetTableAnnotations( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of revision table annotations

## Return Value

in-process, unmanaged C++: Pointer to an array of the revision table annotations VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IRevisionTableFeature::GetTableAnnotationCount
before calling this method to get the value of Count.

## See Also

- `IRevisionTableFeature.GetTableAnnotations`