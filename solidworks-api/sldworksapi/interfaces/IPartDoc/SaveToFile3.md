---
type: method
interface: IPartDoc
member: SaveToFile3
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: Path and name of the part document to which to save the selected weldment member, solid body, or surface body
  -
    name: Options
    type: System.Int32
    description: How to save the document as defined in swSaveAsOptions_e
  -
    name: CutListProps
    type: System.Int32
    description: Option for transferring the cut list of the selected weldment member, solid body, or surface body to the new part as defined in swCutListTransferOptions_e
  -
    name: OverrideTemplate
    type: System.Boolean
    description: True to override the part template with the template specified by TemplatePath, false to not
  -
    name: TemplatePath
    type: System.String
    description: Path to part template; valid only if OverrideTemplate is true
  -
    name: Errors
    type: System.Int32
    description: Save errors as defined in swFileSaveError_e
  -
    name: Warnings
    type: System.Int32
    description: Warnings or extra information generated during the save operation as defined in swFileSaveWarning_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - file-io
  - parts
  - ui
related: []
keywords:
  - bodies
  - see
  - also
  - ibody2
  - folder
  - folders
  - save
  - body
  - parts
  - savetofile3
  - ipartdoc
  - part
  - doc
  - file3
  - name
  - string
  - options
  - int32
  - cut
  - list
  - props
  - override
  - template
  - boolean
  - path
  - errors
  - warnings
  - solid
  - file
  - vba
  - vb
  - net
---

# IPartDoc.SaveToFile3

Saves the selected weldment member, surface body, or solid body to another part document.

## Signature

```csharp
System.Boolean SaveToFile3( 
   System.String
Name
,
   System.Int32
Options
,
   System.Int32
CutListProps
,
   System.Boolean
OverrideTemplate
,
   System.String
TemplatePath
,
   out System.Int32
Errors
,
   out System.Int32
Warnings
)
```
## Parameters

- `Name` (System.String): Path and name of the part document to which to save the selected weldment member, solid body, or surface body
- `Options` (System.Int32): How to save the document as defined in swSaveAsOptions_e
- `CutListProps` (System.Int32): Option for transferring the cut list of the selected weldment member, solid body, or surface body to the new part as defined in swCutListTransferOptions_e
- `OverrideTemplate` (System.Boolean): True to override the part template with the template specified by TemplatePath, false to not
- `TemplatePath` (System.String): Path to part template; valid only if OverrideTemplate is true
- `Errors` (System.Int32): Save errors as defined in swFileSaveError_e
- `Warnings` (System.Int32): Warnings or extra information generated during the save operation as defined in swFileSaveWarning_e

## Return Value

True if the save is successful, false if not

## Remarks

The difference between this method and the now obsolete IPartDoc::SaveToFile2 is that this method allows you to specify in CutListProps how the cut list properties of the selected weldment member of a weldment part are transferred to the saved part.
Before calling this method, select a weldment member, surface body, or solid body in the FeatureManager design tree.

## Examples

- Save Solid Body to File (VBA) (Save_Solid_Body_to_File_Example_VB.htm)
- Save Solid Body to File (VB.NET) (Save_Solid_Body_to_File_Example_VBNET.htm)
- Save Solid Body to File (C#) (Save_Solid_Body_to_File_Example_CSharp.htm)