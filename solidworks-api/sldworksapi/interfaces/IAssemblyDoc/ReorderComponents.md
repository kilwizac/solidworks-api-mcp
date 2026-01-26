---
type: method
interface: IAssemblyDoc
member: ReorderComponents
returns: System.Boolean
parameters:
  -
    name: Source
    type: System.Object
    description: Array of components to move
  -
    name: Target
    type: System.Object
    description: Target component or folder to which to move the components
  -
    name: Where
    type: System.Int32
    description: Where to move the components as defined in swReorderComponentsWhere_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.IReorderComponents
  - IAssemblyDoc.UngroupComponents
  - IFeatureManager.GroupComponentInstances
  - IFeatureManager.InsertFeatureTreeFolder2
  - IModelDocExtension.ReorderFeature
  - IPartDoc.ReorderFeature
keywords:
  - reorder
  - components
  - see
  - also
  - icomponent2
  - reordercomponents
  - iassemblydoc
  - assembly
  - doc
  - source
  - object
  - target
  - where
  - int32
  - boolean
  - move
  - new
  - folder
  - vb
  - net
  - vba
---

# IAssemblyDoc.ReorderComponents

Moves components to a different location in the FeatureManager design tree.

## Signature

```csharp
System.Boolean ReorderComponents( 
   System.Object
Source
,
   System.Object
Target
,
   System.Int32
Where
)
```
## Parameters

- `Source` (System.Object): Array of components to move
- `Target` (System.Object): Target component or folder to which to move the components
- `Where` (System.Int32): Where to move the components as defined in swReorderComponentsWhere_e

## Return Value

True if the components are moved, false if not

## Remarks

The Source argument contains the components to reorder in the FeatureManager design tree.
The order of the elements in the array will be the order that the components appear after the reorder occurs. The components can only be moved within the same component of the model; you cannot move a component from a subassembly into the top-level assembly.
The Where argument indicates where the Source should be moved relative to the Target as defined by
swReorderComponentsWhere_e. If the target is not a folder feature, then this method takes no action and returns false. Only folders that occur within the components section of the assembly FeatureManager design tree can be used; a folder that is among the body features will not be accepted. If the Where argument is specified as one of the two folder-related values, but the Target is a component, the method uses swReorderCompentsWhere_e.swReorderComponents_After.

## Examples

- Move Assembly Components to New Folder (C#) (Move_Assembly_Components_to_New_Folder_Example_CSharp.htm)
- Move Assembly Components to New Folder (VB.NET) (Move_Assembly_Components_to_New_Folder_Example_VBNET.htm)
- Move Assembly Components to New Folder (VBA) (Move_Assembly_Components_to_New_Folder_Example_VB.htm)

## See Also

- `IAssemblyDoc.IReorderComponents`
- `IAssemblyDoc.UngroupComponents`
- `IFeatureManager.GroupComponentInstances`
- `IFeatureManager.InsertFeatureTreeFolder2`
- `IModelDocExtension.ReorderFeature`
- `IPartDoc.ReorderFeature`