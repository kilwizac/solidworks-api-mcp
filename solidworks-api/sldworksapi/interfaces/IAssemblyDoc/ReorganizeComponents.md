---
type: method
interface: IAssemblyDoc
member: ReorganizeComponents
returns: System.Boolean
parameters:
  -
    name: Source
    type: System.Object
    description: Array of selected components to more; all of the components must be at the same level in one parent assembly
  -
    name: Target
    type: System.Object
    description: Where to move the components, which can be a top-level assembly or sub-assembly anywhere at any level of the hierarchy
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - DAssemblyDocEvents_ComponentReorganizeNotifyEventHandler
  - IAssemblyDoc.IReorganizeComponents
  - IAssemblyDoc.ReorderComponents
  - IAssemblyDoc.UngroupComponents
  - IFeatureManager.GroupComponentInstances
keywords:
  - reorganize
  - components
  - see
  - also
  - icomponent2
  - move
  - assemblies
  - iassemblydoc
  - reorganizecomponents
  - assembly
  - doc
  - source
  - object
  - target
  - boolean
  - vba
---

# IAssemblyDoc.ReorganizeComponents

Reorganizes an assembly's structure by moving the selected components to the selected assembly or sub-assembly.

## Signature

```csharp
System.Boolean ReorganizeComponents( 
   System.Object
Source
,
   System.Object
Target
)
```
## Parameters

- `Source` (System.Object): Array of selected components to more; all of the components must be at the same level in one parent assembly
- `Target` (System.Object): Where to move the components, which can be a top-level assembly or sub-assembly anywhere at any level of the hierarchy

## Return Value

True if the selected components were moved to the selected assembly or sub-assembly, false if not

## Remarks

See SOLIDWORKS Help for more information about reorganizing components and restructuring assemblies.

## Examples

- Reorganize Components (VBA) (Reorganize_Components_Example_VB.htm)

## See Also

- `DAssemblyDocEvents_ComponentReorganizeNotifyEventHandler`
- `IAssemblyDoc.IReorganizeComponents`
- `IAssemblyDoc.ReorderComponents`
- `IAssemblyDoc.UngroupComponents`
- `IFeatureManager.GroupComponentInstances`