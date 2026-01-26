---
type: method
interface: IAssemblyDoc
member: EditPart2
returns: System.Int32
parameters:
  -
    name: Silent
    type: System.Boolean
    description: True to suppress messages to user, false to not
  -
    name: AllowReadOnly
    type: System.Boolean
    description: True to allow editing of read-only parts, false to not
  -
    name: Information
    type: System.Int32
    description: Status as defined in swEditPartCommandStatus_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - parts
  - ui
related: []
keywords:
  - edit
  - parts
  - see
  - also
  - ipartdoc
  - assemblies
  - editpart2
  - iassemblydoc
  - assembly
  - doc
  - part2
  - silent
  - boolean
  - allow
  - read
  - only
  - information
  - int32
  - create
  - plane
  - thru
  - points
  - context
  - vba
  - suppress
  - component
  - feature
  - vb
  - net
  - insert
  - cavity
---

# IAssemblyDoc.EditPart2

Edits the selected part within the context of an assembly.

## Signature

```csharp
System.Int32 EditPart2( 
   System.Boolean
Silent
,
   System.Boolean
AllowReadOnly
,
   ref System.Int32
Information
)
```
## Parameters

- `Silent` (System.Boolean): True to suppress messages to user, false to not
- `AllowReadOnly` (System.Boolean): True to allow editing of read-only parts, false to not
- `Information` (System.Int32): Status as defined in swEditPartCommandStatus_e

## Return Value

swEditPartSuccessful if successful

## Remarks

This method allows you to control the display of dialog boxes and edit a read-only document. To return to editing the assembly, use
IAssemblyDoc::EditAssembly
.

## Examples

- Create Plane thru 3 Points In-context (VBA) (Create_Plane_Thru_3_Points_In-context_Example_VB.htm)
- Suppress Component Feature (C#) (Suppress_Component_Feature_Example_CSharp.htm)
- Suppress Component Feature (VB.NET) (Suppress_Component_Feature_Example_VBNET.htm)
- Suppress Component Feature (VBA) (Suppress_Component_Feature_Example_VB.htm)
- Insert Cavity (C#) (Insert_Cavity_Example_CSharp.htm)
- Insert Cavity (VB.NET) (Insert_Cavity_Example_VBNET.htm)
- Insert Cavity (VBA) (Insert_Cavity_Example_VB.htm)