---
type: method
interface: IWeldmentCutListFeature
member: IGetTableAnnotations
returns: WeldmentCutListAnnotation
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of weldment cut list annotations for this weldment cut list feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - features
related:
  - IWeldmentCutListFeature.GetTableAnnotations
keywords:
  - igettableannotations
  - iweldmentcutlistfeature
  - weldment
  - cut
  - list
  - feature
  - table
  - annotations
  - count
  - int32
  - annotation
---

# IWeldmentCutListFeature.IGetTableAnnotations

Gets the weldment cut list annotations for this weldment cut list table.

## Signature

```csharp
WeldmentCutListAnnotation IGetTableAnnotations( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of weldment cut list annotations for this weldment cut list feature

## Return Value

in-process, unmanaged C++: Pointer to an array of weldment cut-list annotations for this weldment cut list table VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IWeldmentCutListFeature::GetTableAnnotationCount
to get Count.

## See Also

- `IWeldmentCutListFeature.GetTableAnnotations`