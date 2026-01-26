---
type: method
interface: IRenderMaterial
member: IGetEntities
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of entities
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRenderMaterial.AddEntity
  - IRenderMaterial.GetEntities
  - IRenderMaterial.RemoveAllEntities
keywords:
  - igetentities
  - irendermaterial
  - render
  - material
  - entities
  - count
  - int32
  - object
---

# IRenderMaterial.IGetEntities

Gets the entities on which this appearance is applied.

## Signature

```csharp
System.Object IGetEntities( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of entities

## Return Value

in-process, unmanaged C++: Pointer to an array of entities on which this appearance is applied VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IRenderMaterial::GetEntitiesCount
to get the value of Count.

## See Also

- `IRenderMaterial.AddEntity`
- `IRenderMaterial.GetEntities`
- `IRenderMaterial.RemoveAllEntities`