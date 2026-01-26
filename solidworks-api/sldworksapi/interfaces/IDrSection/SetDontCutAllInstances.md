---
type: method
interface: IDrSection
member: SetDontCutAllInstances
returns: System.Boolean
parameters:
  -
    name: LpComp
    type: Component
    description: Pointer to the IComponent2 object
  -
    name: VbCut
    type: System.Boolean
    description: True if all instances of the selected component are left uncut, false if only the selected component is left uncut
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrSection.GetDontCutAllInstances
keywords:
  - section
  - views
  - see
  - also
  - idrsection
  - components
  - icomponent2
  - setdontcutallinstances
  - dr
  - dont
  - cut
  - all
  - instances
  - lp
  - comp
  - component
  - vb
  - boolean
---

# IDrSection.SetDontCutAllInstances

Sets whether all instances of the specified component are uncut in this section view or only in the specified component.

## Signature

```csharp
System.Boolean SetDontCutAllInstances( 
   Component
LpComp
,
   System.Boolean
VbCut
)
```
## Parameters

- `LpComp` (Component): Pointer to the IComponent2 object
- `VbCut` (System.Boolean): True if all instances of the selected component are left uncut, false if only the selected component is left uncut

## Return Value

Unknown.

## See Also

- `IDrSection.GetDontCutAllInstances`