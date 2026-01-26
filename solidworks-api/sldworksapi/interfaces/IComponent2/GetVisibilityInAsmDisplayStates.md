---
type: method
interface: IComponent2
member: GetVisibilityInAsmDisplayStates
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
  - IComponent2.GetReferencedDisplayStates
  - IComponent2.SetVisibilityInAsmDisplayStates
keywords:
  - components
  - see
  - also
  - icomponent2
  - visibility
  - getvisibilityinasmdisplaystates
  - component2
  - asm
  - display
  - states
  - assembly
  - state
  - option
  - int32
  - names
  - object
---

# IComponent2.GetVisibilityInAsmDisplayStates

Gets the visibilities of this component in the specified assembly display state(s).

## Signature

```csharp
System.Object GetVisibilityInAsmDisplayStates( 
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

Array of visibilities as defined in swComponentVisibilityState_e

## See Also

- `IComponent2.GetReferencedDisplayStates`
- `IComponent2.SetVisibilityInAsmDisplayStates`