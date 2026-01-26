---
type: method
interface: IAssemblyDoc
member: UpdateToolboxComponent
returns: System.Int32
parameters:
  -
    name: AssemblyLevelToUpdate
    type: System.Int32
    description: Level in which to update SOLIDWORKS Toolbox components as defined in swAssemblyLevelToUpdate_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related: []
keywords:
  - solidworks
  - toolbox
  - components
  - updatetoolboxcomponent
  - iassemblydoc
  - assembly
  - doc
  - update
  - component
  - level
  - int32
  - all
  - vb
  - net
  - vba
---

# IAssemblyDoc.UpdateToolboxComponent

Updates SOLIDWORKS Toolbox components in the specified assembly level using the current information in Toolbox settings.

## Signature

```csharp
System.Int32 UpdateToolboxComponent( 
   System.Int32
AssemblyLevelToUpdate
)
```
## Parameters

- `AssemblyLevelToUpdate` (System.Int32): Level in which to update SOLIDWORKS Toolbox components as defined in swAssemblyLevelToUpdate_e

## Return Value

Status of updating the SOLIDWORKS Toolbox components as defined in swAssemblyUpdateToolboxComponentStatus_e

## Examples

- Update All Toolbox Components (C#) (Update_All_Toolbox_Components_Example_CSharp.htm)
- Update All Toolbox Components (VB.NET) (Update_All_Toolbox_Components_Example_VBNET.htm)
- Update All Toolbox Components (VBA) (Update_All_Toolbox_Components_Example_VB.htm)