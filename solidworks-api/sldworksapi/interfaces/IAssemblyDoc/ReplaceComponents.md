---
type: method
interface: IAssemblyDoc
member: ReplaceComponents
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Path and new file name
  -
    name: ConfigName
    type: System.String
    description: Name of configuration
  -
    name: ReplaceAllInstance
    type: System.Boolean
    description: True to replace all instances, false to not
  -
    name: ReAttachMates
    type: System.Boolean
    description: True to reattach all of the mates if the component is found in the subassembly component, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.AddComponent5
  - IAssemblyDoc.AddComponents
  - IAssemblyDoc.IAddComponents2
  - IModelDoc2.ReloadOrReplace
keywords:
  - replacecomponents
  - iassemblydoc
  - assembly
  - doc
  - replace
  - components
  - file
  - name
  - string
  - config
  - all
  - instance
  - boolean
  - re
  - attach
  - mates
---

# IAssemblyDoc.ReplaceComponents

Obsolete. Superseded by IAssemblyDoc::ReplaceComponents2.

## Signature

```csharp
System.Boolean ReplaceComponents( 
   System.String
FileName
,
   System.String
ConfigName
,
   System.Boolean
ReplaceAllInstance
,
   System.Boolean
ReAttachMates
)
```
## Parameters

- `FileName` (System.String): Path and new file name
- `ConfigName` (System.String): Name of configuration
- `ReplaceAllInstance` (System.Boolean): True to replace all instances, false to not
- `ReAttachMates` (System.Boolean): True to reattach all of the mates if the component is found in the subassembly component, false to not

## Return Value

True if the component is successfully replaced, false if not

## Remarks

You cannot replace a selected component with a component of the same name even if the components are in different folders.
The component must be a top-level component. It cannot be a component of a sub-assembly. If the application needs to replace a component of the sub-assembly, then it should open the sub-assembly and get the component from that assembly.
This method closes any component files when called in an assembly. If the components were modified, then those modifications are not automatically saved. You must save any modifications before closing the files.

## See Also

- `IAssemblyDoc.AddComponent5`
- `IAssemblyDoc.AddComponents`
- `IAssemblyDoc.IAddComponents2`
- `IModelDoc2.ReloadOrReplace`