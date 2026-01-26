---
type: method
interface: IAssemblyDoc
member: IReorderComponents
returns: System.Boolean
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of items in the Source array
  -
    name: Source
    type: Component2
    description: Array of the components to move
  -
    name: Target
    type: System.Object
    description: Target component or folder feature to which to move the components
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
  - IAssemblyDoc.ReorderComponents
  - IPartDoc.ReorderFeature
keywords:
  - ireordercomponents
  - iassemblydoc
  - assembly
  - doc
  - reorder
  - components
  - count
  - int32
  - source
  - component2
  - target
  - object
  - where
  - boolean
---

# IAssemblyDoc.IReorderComponents

Moves components to a different location in the FeatureManager tree.

## Signature

```csharp
System.Boolean IReorderComponents( 
   System.Int32
Count
,
   ref Component2
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

- `Count` (System.Int32): Number of items in the Source array
- `Source` (Component2): Array of the components to move
- `Target` (System.Object): Target component or folder feature to which to move the components
- `Where` (System.Int32): Where to move the components as defined in swReorderComponentsWhere_e

## Return Value

True if the components were moved, false if not

## Remarks

The Source argument contains the components to reorder in the FeatureManager tree.
The order of the items in the array will be the order that the components appear after the reorder occurs. The components can only be moved within the same component of the model; you cannot move a component from a subassembly into the top level assembly.
The Where argument indicates where the Source should be moved relative to the Target as defined by
swReorderComponentsWhere_e
. If the target is a feature, but not a folder feature, this method takes no action and returns false. Only folders that occur within the components section of the Assembly FeatureManager tree can be used; a folder that is among the body features will not be accepted. If the Where argument is specified as one of the two folder-related values, but the Target is a component, the method uses swReorderComponents_After.

## See Also

- `IAssemblyDoc.ReorderComponents`
- `IPartDoc.ReorderFeature`