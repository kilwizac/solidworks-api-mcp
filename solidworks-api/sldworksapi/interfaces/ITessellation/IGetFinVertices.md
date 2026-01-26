---
type: method
interface: ITessellation
member: IGetFinVertices
returns: System.Int32
parameters:
  -
    name: FinId
    type: System.Int32
    description: Fin ID of the fin from which you want to return the vertices
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ITessellation.GetFinVertices
keywords:
  - igetfinvertices
  - itessellation
  - tessellation
  - fin
  - vertices
  - id
  - int32
---

# ITessellation.IGetFinVertices

Gets the IDs of the two vertices that correspond to a fin.

## Signature

```csharp
System.Int32 IGetFinVertices( 
   System.Int32
FinId
)
```
## Parameters

- `FinId` (System.Int32): Fin ID of the fin from which you want to return the vertices

## Return Value

in-process, unmanaged C++: Pointer to an array of two longs or integers describing the vertices IDs of a fin VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## See Also

- `ITessellation.GetFinVertices`