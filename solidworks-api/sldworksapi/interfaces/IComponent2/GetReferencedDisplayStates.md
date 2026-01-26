---
type: method
interface: IComponent2
member: GetReferencedDisplayStates
returns: System.Object
parameters:
  -
    name: AssemblyDisplayStateOption
    type: System.Int32
    description: Display state option as defined in swDisplayStateOpts_e
  -
    name: AssemblyDisplayStateNames
    type: System.Object
    description: Array of assembly display state names; valid only if AssemblyDisplayStateOption is set to swDisplayStateOpts_e.swSpecifyDisplayState
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetVisibilityInAsmDisplayStates
  - IComponent2.SetReferencedDisplayStates
keywords:
  - components
  - see
  - also
  - icomponent2
  - display
  - states
  - getreferenceddisplaystates
  - component2
  - referenced
  - assembly
  - state
  - option
  - int32
  - names
  - object
---

# IComponent2.GetReferencedDisplayStates

Gets the display states of this component that are referenced by the specified assembly display state(s).

## Signature

```csharp
System.Object GetReferencedDisplayStates( 
   System.Int32
AssemblyDisplayStateOption
,
   System.Object
AssemblyDisplayStateNames
)
```
## Parameters

- `AssemblyDisplayStateOption` (System.Int32): Display state option as defined in swDisplayStateOpts_e
- `AssemblyDisplayStateNames` (System.Object): Array of assembly display state names; valid only if AssemblyDisplayStateOption is set to swDisplayStateOpts_e.swSpecifyDisplayState

## Return Value

Array of referenced display state names

## See Also

- `IComponent2.GetVisibilityInAsmDisplayStates`
- `IComponent2.SetReferencedDisplayStates`