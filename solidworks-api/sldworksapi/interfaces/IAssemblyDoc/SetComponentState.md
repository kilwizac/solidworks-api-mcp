---
type: method
interface: IAssemblyDoc
member: SetComponentState
returns: System.Boolean
parameters:
  -
    name: SuppressionState
    type: System.Int32
    description: Component suppression state as defined in swComponentSuppressionState_e (see Remarks )
  -
    name: CompArr
    type: System.Object
    description: Array of components to change
  -
    name: ConfigOption
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e
  -
    name: WhichConfig
    type: System.String
    description: Name of the configuration to change
  -
    name: SaveClosedDocs
    type: System.Boolean
    description: True saves closed documents, false does not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related: []
keywords:
  - components
  - see
  - also
  - icomponent2
  - state
  - assemblies
  - iassemblydoc
  - suppress
  - setcomponentstate
  - assembly
  - doc
  - component
  - suppression
  - int32
  - comp
  - arr
  - object
  - config
  - option
  - which
  - string
  - save
  - closed
  - docs
  - boolean
  - vba
---

# IAssemblyDoc.SetComponentState

Sets the suppression state for the specified components.

## Signature

```csharp
System.Boolean SetComponentState( 
   System.Int32
SuppressionState
,
   System.Object
CompArr
,
   System.Int32
ConfigOption
,
   System.String
WhichConfig
,
   System.Boolean
SaveClosedDocs
)
```
## Parameters

- `SuppressionState` (System.Int32): Component suppression state as defined in swComponentSuppressionState_e (see Remarks )
- `CompArr` (System.Object): Array of components to change
- `ConfigOption` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `WhichConfig` (System.String): Name of the configuration to change
- `SaveClosedDocs` (System.Boolean): True saves closed documents, false does not

## Return Value

True if the components were changed, false if not

## Remarks

You cannot set a component to lightweight using this method. Instead, use
IComponent::SetSuppression2
.

## Examples

- Set Component State (VBA) (Set_Component_State_Example_VB.htm)