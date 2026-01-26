---
type: method
interface: IAssemblyDoc
member: IReorganizeComponents
returns: System.Boolean
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of components to reorganize
  -
    name: Source
    type: Component2
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
  - IAssemblyDoc.ReorderComponents
  - IAssemblyDoc.ReorganizeComponents
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - reorganize
  - components
  - icomponent2
  - move
  - ireorganizecomponents
  - assembly
  - doc
  - count
  - int32
  - source
  - component2
  - target
  - object
  - boolean
---

# IAssemblyDoc.IReorganizeComponents

Reorganizes an assembly's structure by moving the selected components to the selected assembly or sub-assembly.

## Signature

```csharp
System.Boolean IReorganizeComponents( 
   System.Int32
Count
,
   ref Component2
Source
,
   System.Object
Target
)
```
## Parameters

- `Count` (System.Int32): Number of components to reorganize
- `Source` (Component2): Array of selected components to more; all of the components must be at the same level in one parent assembly
- `Target` (System.Object): Where to move the components, which can be a top-level assembly or sub-assembly anywhere at any level of the hierarchy

## Return Value

True if the selected components were moved to the selected assembly or sub-assembly, false if not

## Remarks

See the SOLIDWORKS Help for more information about reorganizing components.

## See Also

- `DAssemblyDocEvents_ComponentReorganizeNotifyEventHandler`
- `IAssemblyDoc.ReorderComponents`
- `IAssemblyDoc.ReorganizeComponents`