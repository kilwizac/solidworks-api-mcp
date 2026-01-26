---
type: method
interface: IModelDoc2
member: Save3
returns: System.Boolean
parameters:
  -
    name: Options
    type: System.Int32
    description: Mode in which to save the document as defined in swSaveAsOptions_e
  -
    name: Errors
    type: System.Int32
    description: Errors that caused the save operation to fail as defined in swFileSaveError_e
  -
    name: Warnings
    type: System.Int32
    description: Warnings or extra information generated during the save operation as defined in swFileSaveWarning_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - ISldWorks.QuitDoc
keywords:
  - save
  - document
  - save3
  - imodeldoc2
  - model
  - doc2
  - options
  - int32
  - errors
  - warnings
  - boolean
  - file
  - vba
  - vb
  - net
  - rename
  - component
  - update
  - references
---

# IModelDoc2.Save3

Saves the current document.

## Signature

```csharp
System.Boolean Save3( 
   System.Int32
Options
,
   out System.Int32
Errors
,
   out System.Int32
Warnings
)
```
## Parameters

- `Options` (System.Int32): Mode in which to save the document as defined in swSaveAsOptions_e
- `Errors` (System.Int32): Errors that caused the save operation to fail as defined in swFileSaveError_e
- `Warnings` (System.Int32): Warnings or extra information generated during the save operation as defined in swFileSaveWarning_e

## Return Value

True if the save was successful, false if not

## Remarks

If saving the file...
Then...
Succeeds
Return value is true
Errors argument is 0
Fails
Return value is false
Errors argument contains a bitwise OR of the error codes that were generated when saving the document
You can find the masks to check against in the swFileSaveError_e enumeration.
Even if the file is saved successfully, there might be warnings or information that occur during the save that might interest you. The Warnings argument contains a bitwise OR of the warning codes that were generated when saving the document. You can find the masks to check against in the swFileSaveWarning_e enumeration.
If you do not want SOLIDWORKS to return...
Then pass in null or Nothing for...
Error information
Errors argument
Warning information
Warnings argument
This method results in FileSaveNotify being sent to any application listening.
See
IModelDocExtension::SaveAs
if this is new document, this document is to be saved to a file with a new name, or this document is to be saved to a version of a particular format.

## Examples

- Save File (VBA) (Save_File_Example_VB.htm)
- Save File (VB.NET) (Save_File_Example_VBNET.htm)
- Save File (C#) (Save_File_Example_CSharp.htm)
- Rename Component and Update References (C#) (Rename_Component_and_Update_References_Example_CSharp.htm)
- Rename Component and Update References (VB.NET) (Rename_Component_and_Update_References_Example_VBNET.htm)
- Rename Component and Update References (VBA) (Rename_Component_and_Update_References_Example_VB.htm)

## See Also

- `ISldWorks.QuitDoc`