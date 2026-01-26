---
type: method
interface: IRenderMaterial
member: SetLinkedDisplayStates
returns: System.Boolean
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
  - ui
related:
  - IRenderMaterial.GetLinkedDisplayStates
keywords:
  - appearances
  - display
  - states
  - setlinkeddisplaystates
  - irendermaterial
  - render
  - material
  - linked
  - state
  - option
  - int32
  - names
  - object
  - boolean
---

# IRenderMaterial.SetLinkedDisplayStates

Sets the display states to which this appearance is applied.

## Signature

```csharp
System.Boolean SetLinkedDisplayStates( 
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

True if display states successfully linked, false if not

## Examples

- IRenderMaterial (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRenderMaterial)

## See Also

- `IRenderMaterial.GetLinkedDisplayStates`