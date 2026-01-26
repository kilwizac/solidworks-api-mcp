---
type: method
interface: IModelDocExtension
member: SaveAs2
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: Full pathname of the document to save; the file extension indicates any conversion that should be performed (for example, Part1.igs to save in IGES format) (see Remarks )
  -
    name: Version
    type: System.Int32
    description: Format in which to save this document as defined in swSaveAsVersion_e (see Remarks )
  -
    name: Options
    type: System.Int32
    description: Option indicating how to save the document as defined in swSaveAsOptions_e (see Remarks )
  -
    name: ExportData
    type: System.Object
    description: IExportPdfData object for exporting drawing sheets to PDF (see Remarks )
  -
    name: ReferencePrefixOrSuffixText
    type: System.String
    description: Text to prefix names of reference files (AddTextAsPrefix is true) or text to suffix them (AddTextAsPrefix is false); empty string to neither prefix nor suffix the names of reference files; valid only for assemblies (see Remarks )
  -
    name: AddTextAsPrefix
    type: System.Boolean
    description: True to prefix names of reference files with ReferencePrefixOrSuffixText, false to suffix names of reference files with ReferencePrefixOrSuffixText; valid only for assemblies and when ReferencePrefixOrSuffixText is a non-empty string (see Remarks )
  -
    name: Errors
    type: System.Int32
    description: Errors that caused the save to fail as defined in swFileSaveError_e (see Remarks )
  -
    name: Warnings
    type: System.Int32
    description: Warnings or extra information generated during the save operation as defined in swFileSaveWarning_e (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - file-io
  - ui
related:
  - IModelDocExtension.SaveDeFeaturedFile
  - ISldWorks.ActivateDoc3
  - ISldWorks.ActiveDoc
  - ISldWorks.CheckpointConvertedDocument
  - ISldWorks.CloseAllDocuments
  - ISldWorks.CloseDoc
  - ISldWorks.CopyDocument
  - ISldWorks.ExitApp
  - ISldWorks.LoadFile4
  - ISldWorks.OpenDoc7
  - ISldWorks.QuitDoc
keywords:
  - saveas2
  - imodeldocextension
  - model
  - doc
  - extension
  - save
  - as2
  - name
  - string
  - version
  - int32
  - options
  - export
  - data
  - object
  - reference
  - prefix
  - suffix
  - text
  - add
  - boolean
  - errors
  - warnings
---

# IModelDocExtension.SaveAs2

Obsolete. Superseded by IModelDocExtension::SaveAs3.

## Signature

```csharp
System.Boolean SaveAs2( 
   System.String
Name
,
   System.Int32
Version
,
   System.Int32
Options
,
   System.Object
ExportData
,
   System.String
ReferencePrefixOrSuffixText
,
   System.Boolean
AddTextAsPrefix
,
   out System.Int32
Errors
,
   out System.Int32
Warnings
)
```
## Parameters

- `Name` (System.String): Full pathname of the document to save; the file extension indicates any conversion that should be performed (for example, Part1.igs to save in IGES format) (see Remarks )
- `Version` (System.Int32): Format in which to save this document as defined in swSaveAsVersion_e (see Remarks )
- `Options` (System.Int32): Option indicating how to save the document as defined in swSaveAsOptions_e (see Remarks )
- `ExportData` (System.Object): IExportPdfData object for exporting drawing sheets to PDF (see Remarks )
- `ReferencePrefixOrSuffixText` (System.String): Text to prefix names of reference files (AddTextAsPrefix is true) or text to suffix them (AddTextAsPrefix is false); empty string to neither prefix nor suffix the names of reference files; valid only for assemblies (see Remarks )
- `AddTextAsPrefix` (System.Boolean): True to prefix names of reference files with ReferencePrefixOrSuffixText, false to suffix names of reference files with ReferencePrefixOrSuffixText; valid only for assemblies and when ReferencePrefixOrSuffixText is a non-empty string (see Remarks )
- `Errors` (System.Int32): Errors that caused the save to fail as defined in swFileSaveError_e (see Remarks )
- `Warnings` (System.Int32): Warnings or extra information generated during the save operation as defined in swFileSaveWarning_e (see Remarks )

## Return Value

True if the save is successful, false if not

## Remarks

The difference between this method and the now obsolete
IModelDocExtension::SaveAs
is that when you save assemblies using this method, you can prefix or suffix reference file names by specifying AddTextAsPrefix and ReferencePrefixOrSuffixText. To save references in the assembly, specify Options by bitwise ANDing swSaveAsOptions_e:
swSaveAsOptions_SaveReferenced
swSaveAsOptions_Copy or swSaveAsOptions_CopyAndOpen
swSaveAsOptions_Silent
To save as an IGES, STL, or STEP file, the document to convert must be the active document. Before calling this method:
Call
ISldWorks::ActivateDoc3
to make the document to convert the active document.
Call
ISldWorks::ActiveDoc
to get the active document.
This method:
Exports the entire model, unless faces or bodies are selected, in which case, it exports only those. Call
IModelDoc2::ClearSelection2
before calling IModelDocExtension::SaveAs to clear the selection list and export the entire model.
Overwrites existing files unless they are read only.
Results in the FileSaveNotify event being sent to any application listening.
Removes any configuration-specific bitmap previews, except the current configuration's.
Saving a document as PDF when the document is open as view only is not supported.
Do not use ModelDocExtension::SaveAs to copy assemblies, drawings, or parts with in-context references. Instead, use
ISldWorks::CopyDocument
or
ISldWorks::ICopyDocument
.
Use Name to specify the full pathname of the saved document. If you specify only the file name, then it is saved in the active document's directory. The filename extension indicates the conversion that should be performed (for example,
Part1.igs
to save to IGES). If the filename extension does not uniquely indicate how the file should be formatted, use Version to specify how to save the file. For example, to save:
A standard drawing document as a detached drawing, specify swSaveAsDetachedDrawing for Version.
A detached drawing as a standard drawing, specify swSaveAsStandardDrawing for Version.
A standard or detached drawing document in the same format, specify swSaveAsCurrentVersion for Version.
Use ExportData to specify which drawings sheets to save to PDF. If ExportData is Nothing or null, then all sheets are saved to PDF. Saving a document as PDF when the document is open as view-only is not supported.
Use Options to specify save options. You can specify additional options using
ISldWorks::SetUserPreferenceIntegerValue
. For example:
' Save assembly as multibody part and save exterior faces as surface bodies
swApp.SetUserPreferenceIntegerValue swSaveAssemblyAsPartOptions, _
swSaveAsmAsPart_ExteriorFaces
swModelDocExt.SaveAs "H:\Assem1.SLDPRT", swSaveAsCurrentVersion, _
swSaveAsOptions_Silent, Nothing, nErrors, nWarnings
- or -
' Save all drawing sheets in active drawing document as an eDrawings file
swApp.SetUserPreferenceIntegerValue swEdrawingsSaveAsSelectionOption, swEdrawingSaveAll
swModelDocExt.SaveAs "H:\Grid.edrw", swSaveAsCurrentVersion, _
swSaveAsOptions_Silent, Nothing, nErrors, nWarnings
If the file is saved successfully, then the returned value is true and Errors is 0. If the save is not successful, then the returned value is false and Errors contains a bitwise OR of the error codes that were generated in saving the document. Check the masks against the
swFileSaveError_e
enumeration. If you do not want SOLIDWORKS to return error information, set Errors to Nothing or null.
Even if the file is saved successfully, there might be warnings or information that occur during the save operation in which you might be interested. Warnings contains a bitwise OR of the warning codes that were generated when saving the document. Check the masks against the
swFileSaveWarning_e
enumeration. If you do not want warning information returned, set Warnings to Nothing or null.
Use
IModelDoc2::Save3
to save a file using its current name.

## See Also

- `IModelDocExtension.SaveDeFeaturedFile`
- `ISldWorks.ActivateDoc3`
- `ISldWorks.ActiveDoc`
- `ISldWorks.CheckpointConvertedDocument`
- `ISldWorks.CloseAllDocuments`
- `ISldWorks.CloseDoc`
- `ISldWorks.CopyDocument`
- `ISldWorks.ExitApp`
- `ISldWorks.LoadFile4`
- `ISldWorks.OpenDoc7`
- `ISldWorks.QuitDoc`