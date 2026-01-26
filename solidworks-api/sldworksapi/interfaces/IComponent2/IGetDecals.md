---
type: method
interface: IComponent2
member: IGetDecals
returns: Decal
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of decals
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetDecals
keywords:
  - decal
  - see
  - also
  - idecal
  - components
  - icomponent2
  - decals
  - igetdecals
  - component2
  - count
  - int32
---

# IComponent2.IGetDecals

Gets the decals applied to this component.

## Signature

```csharp
Decal IGetDecals( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of decals

## Return Value

in-process, unmanaged C++: Pointer to an array of decals VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IComponent2::GetDecalsCount
to get the value of Count.

## See Also

- `IComponent2.GetDecals`