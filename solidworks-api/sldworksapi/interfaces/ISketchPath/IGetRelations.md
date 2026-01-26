---
type: method
interface: ISketchPath
member: IGetRelations
returns: SketchRelation
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of sketch relations
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchPath.GetRelations
keywords:
  - relations
  - igetrelations
  - isketchpath
  - sketch
  - path
  - count
  - int32
  - relation
---

# ISketchPath.IGetRelations

Gets the sketch relations for this sketch path.

## Signature

```csharp
SketchRelation IGetRelations( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of sketch relations

## Return Value

in-process, unmanaged C++: Pointer to an array of sketch relations VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ISketchPath::GetRelationsCount
to get the value of Count.

## See Also

- `ISketchPath.GetRelations`