---
type: method
interface: IAssemblyDoc
member: ReplaceComponents2
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Path and file name of the replacement component
  -
    name: ConfigName
    type: System.String
    description: Name of a configuration in the replacement component; an empty string indicates the default configuration of the replacement component
  -
    name: ReplaceAllInstance
    type: System.Boolean
    description: True to replace all instances of the selected components with the replacement component, false to not
  -
    name: UseConfigChoice
    type: System.Int32
    description: Configuration to use as defined in swReplaceComponentsConfiguration_e
  -
    name: ReAttachMates
    type: System.Boolean
    description: True to reattach existing mates to the replacement component, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IModelDoc2.ReloadOrReplace
keywords:
  - components
  - see
  - also
  - icomponent2
  - replace
  - replacecomponents2
  - iassemblydoc
  - assembly
  - doc
  - components2
  - file
  - name
  - string
  - config
  - all
  - instance
  - boolean
  - use
  - choice
  - int32
  - re
  - attach
  - mates
  - component
  - vb
  - net
  - vba
---

# IAssemblyDoc.ReplaceComponents2

Replaces one or more selected components with another model.

## Signature

```csharp
System.Boolean ReplaceComponents2( 
   System.String
FileName
,
   System.String
ConfigName
,
   System.Boolean
ReplaceAllInstance
,
   System.Int32
UseConfigChoice
,
   System.Boolean
ReAttachMates
)
```
## Parameters

- `FileName` (System.String): Path and file name of the replacement component
- `ConfigName` (System.String): Name of a configuration in the replacement component; an empty string indicates the default configuration of the replacement component
- `ReplaceAllInstance` (System.Boolean): True to replace all instances of the selected components with the replacement component, false to not
- `UseConfigChoice` (System.Int32): Configuration to use as defined in swReplaceComponentsConfiguration_e
- `ReAttachMates` (System.Boolean): True to reattach existing mates to the replacement component, false to not

## Return Value

True if the selected components are replaced, false if not

## Remarks

You cannot replace a selected component with a component of the same name even if the components reside in different folders.
The component must be a top-level component. It cannot be a component of a sub-assembly. If your application needs to replace a component of a sub-assembly, then your application must open the sub-assembly and get the component from that assembly.
This method closes any component files when called in an assembly. If components were modified, then those modifications are not automatically saved. You must save any modifications before closing the files.

## Examples

- Replace Component (C#) (Replace_Component_Example_CSharp.htm)
- Replace Component (VB.NET) (Replace_Component_Example_VBNET.htm)
- Replace Component (VBA) (Replace_Component_Example_VB.htm)

## See Also

- `IModelDoc2.ReloadOrReplace`