---
type: method
interface: IComponent2
member: GetRenderMaterials2
returns: System.Object
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
  - IComponent2.GetRenderMaterialsCount2
keywords:
  - appearances
  - components
  - see
  - also
  - icomponent2
  - getrendermaterials2
  - component2
  - render
  - materials2
  - display
  - state
  - option
  - int32
  - names
  - object
---

# IComponent2.GetRenderMaterials2

Gets the appearances applied to this component in the specified display states.

## Signature

```csharp
System.Object GetRenderMaterials2( 
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

Array of appearances

## See Also

- `IComponent2.GetRenderMaterialsCount2`