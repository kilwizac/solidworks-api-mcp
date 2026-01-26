---
type: method
interface: IAssemblyDoc
member: DeleteSelections
returns: System.Boolean
parameters:
  -
    name: DeleteOptions
    type: System.Int32
    description: Type of selection to delete as defined in swAssemblyDeleteOptions_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - selections
  - ui
related:
  - IModelDoc2.EditDelete
  - IModelDocExtension.DeleteSelection2
keywords:
  - components
  - see
  - also
  - icomponent2
  - delete
  - assemblies
  - iassemblydoc
  - selections
  - subassemblies
  - selection
  - iselectionmgr
  - deleteselections
  - assembly
  - doc
  - options
  - int32
  - boolean
  - vb
  - net
  - vba
---

# IAssemblyDoc.DeleteSelections

Delete either the selected components of a subassembly or the subassembly of the selected component.

## Signature

```csharp
System.Boolean DeleteSelections( 
   System.Int32
DeleteOptions
)
```
## Parameters

- `DeleteOptions` (System.Int32): Type of selection to delete as defined in swAssemblyDeleteOptions_e

## Return Value

True if either the selected components of a subassembly are deleted or the subassembly of the selected component is deleted, false if not

## Examples

- Delete Subassemblies (C#) (Delete_Subassemblies_Example_CSharp.htm)
- Delete Subassemblies (VB.NET) (Delete_Subassemblies_Example_VBNET.htm)
- Delete Subassemblies (VBA) (Delete_Subassemblies_Example_VB.htm)

## See Also

- `IModelDoc2.EditDelete`
- `IModelDocExtension.DeleteSelection2`