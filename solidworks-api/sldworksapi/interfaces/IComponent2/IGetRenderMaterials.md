---
type: method
interface: IComponent2
member: IGetRenderMaterials
returns: RenderMaterial
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of appearances
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetRenderMaterials
keywords:
  - appearances
  - components
  - see
  - also
  - icomponent2
  - igetrendermaterials
  - component2
  - render
  - materials
  - count
  - int32
  - material
---

# IComponent2.IGetRenderMaterials

Obsolete. Superseded by IComponent2::GetRenderMaterials2.

## Signature

```csharp
RenderMaterial IGetRenderMaterials( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of appearances

## Return Value

in-process, unmanaged C++: Pointer to an array of appearances VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IComponent2::GetRenderMaterialsCount
to get the value of Count.

## See Also

- `IComponent2.GetRenderMaterials`