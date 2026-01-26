---
type: method
interface: IComponent2
member: GetRenderMaterialsCount2
returns: System.Int32
parameters:
  -
    name: DisplayStateOption
    type: System.Int32
    description: Display states as defined in swDisplayStateOpts_e
  -
    name: DisplayStateNames
    type: System.Object
    description: Array of display state names
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetRenderMaterials2
keywords:
  - appearances
  - components
  - see
  - also
  - icomponent2
  - getrendermaterialscount2
  - component2
  - render
  - materials
  - count2
  - display
  - state
  - option
  - int32
  - names
  - object
---

# IComponent2.GetRenderMaterialsCount2

Gets the number of appearances applied to this component in the specified display states.

## Signature

```csharp
System.Int32 GetRenderMaterialsCount2( 
   System.Int32
DisplayStateOption
,
   System.Object
DisplayStateNames
)
```
## Parameters

- `DisplayStateOption` (System.Int32): Display states as defined in swDisplayStateOpts_e
- `DisplayStateNames` (System.Object): Array of display state names

## Return Value

Number of appearances

## See Also

- `IComponent2.GetRenderMaterials2`