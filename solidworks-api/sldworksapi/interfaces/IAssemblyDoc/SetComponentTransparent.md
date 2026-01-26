---
type: method
interface: IAssemblyDoc
member: SetComponentTransparent
returns: System.Boolean
parameters:
  -
    name: State
    type: System.Boolean
    description: True to set the components transparent, false to not
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
  - transparency
  - setcomponenttransparent
  - iassemblydoc
  - assembly
  - doc
  - component
  - transparent
  - state
  - boolean
  - vba
---

# IAssemblyDoc.SetComponentTransparent

Enables or disables transparency on the selected components.

## Signature

```csharp
System.Boolean SetComponentTransparent( 
   System.Boolean
State
)
```
## Parameters

- `State` (System.Boolean): True to set the components transparent, false to not

## Return Value

True if components are transparent, false if not

## Remarks

If you set the transparent state to True, then the components are automatically assigned a transparency value of 75%.
If you want transparency (and other optical properties) set to specific values, then use the
IComponent2::GetMaterialPropertyValues2
and
ISetMaterialPropertyValues2 Method
SetMaterialPropertyValues2 Method
IComponent2::SetMaterialPropertyValues2
.
To set other component transparencies, set these user preferences:
swEdgesInContextEditTransparencyType and swEdgesInContextEditTransparency
. You should set these preferences before editing the part to see their effect while editing the part.

## Examples

- Set Components Transparent (VBA) (Set_Components_Transparent_Example_VB.htm)