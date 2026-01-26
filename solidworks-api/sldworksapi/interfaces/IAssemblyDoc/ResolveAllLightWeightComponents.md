---
type: method
interface: IAssemblyDoc
member: ResolveAllLightWeightComponents
returns: System.Int32
parameters:
  -
    name: WarnUser
    type: System.Boolean
    description: True prompts the user to resolve components, false does not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.GetLightWeightComponentCount
  - IAssemblyDoc.LightweightAllResolved
  - IAssemblyDoc.ResolveAllLightweight
  - IAssemblyDoc.ResolveOutOfDateLightWeightComponents
  - IAssemblyDoc.SelectiveOpen
  - IAssemblyDoc.SetComponentSuppression
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - lightweight
  - components
  - icomponent2
  - resolve
  - resolved
  - resolvealllightweightcomponents
  - assembly
  - doc
  - all
  - light
  - weight
  - warn
  - user
  - boolean
  - int32
  - display
  - dimensions
  - gtols
  - surface
  - finish
  - symbols
  - vba
  - visibility
  - lock
  - external
  - references
  - fix
  - component
  - vb
  - net
---

# IAssemblyDoc.ResolveAllLightWeightComponents

Resolves the lightweight components in this assembly.

## Signature

```csharp
System.Int32 ResolveAllLightWeightComponents( 
   System.Boolean
WarnUser
)
```
## Parameters

- `WarnUser` (System.Boolean): True prompts the user to resolve components, false does not

## Return Value

Status of resolving the components as defined in swComponentResolveStatus_e

## Remarks

The assembly must be open in its own window. Call
ISldWorks::ActivateDoc2
or
IModelDoc2::Visible
to ensure that it is. If the assembly is only open as a reference in another document, then this method returns swComponentResolveStatus_e.swResolveNotPerformed.

## Examples

- Get Display Dimensions, GTols, and Surface-finish Symbols (VBA) (Get_Display_Dimensions,_Gtols,_and_Surface-Finish_Symbols_Example_VB.htm)
- Get Visibility of and Resolve Lightweight Components (VBA) (Get_Visibility_of_and_Resolve_Lightweight_Components_Example_VB.htm)
- Lock all External References (VBA) (Lock_All_External_References_Example_VB.htm)
- Resolve All Components and Fix a Component (C#) (Resolve_All_Components_Fix_A_Component_Example_CSharp.htm)
- Resolve All Components and Fix a Component (VB.NET) (Resolve_All_Components_Fix_A_Component_Example_VBNET.htm)
- Resolve All Components and Fix a Component (VBA) (Resolve_All_Components_Fix_A_Component_Example_VB.htm)

## See Also

- `IAssemblyDoc.GetLightWeightComponentCount`
- `IAssemblyDoc.LightweightAllResolved`
- `IAssemblyDoc.ResolveAllLightweight`
- `IAssemblyDoc.ResolveOutOfDateLightWeightComponents`
- `IAssemblyDoc.SelectiveOpen`
- `IAssemblyDoc.SetComponentSuppression`