---
type: method
interface: ISldWorks
member: OpenDoc6
returns: ModelDoc2
parameters:
  -
    name: FileName
    type: System.String
    description: Document name or full path if not in current directory, including extension
  -
    name: Type
    type: System.Int32
    description: Document type as defined in swDocumentTypes_e
  -
    name: Options
    type: System.Int32
    description: Mode in which to open the document as defined in swOpenDocOptions_e
  -
    name: Configuration
    type: System.String
    description: Model configuration in which to open this document Applies to parts and assemblies, not drawings If this argument is empty or the specified configuration is not present in the model, the model is opened in the last-used configuration
  -
    name: Errors
    type: System.Int32
    description: Load errors as defined in swFileLoadError_e ( See Remarks )
  -
    name: Warnings
    type: System.Int32
    description: Warnings or extra information generated during the open operation as defined in swFileLoadWarning_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - ISldWorks.CloseAllDocuments
  - ISldWorks.CloseDoc
  - ISldWorks.CopyDocument
  - ISldWorks.EnableBackgroundProcessing
  - ISldWorks.EnumDocuments2
  - ISldWorks.GetCurrentWorkingDirectory
  - ISldWorks.GetDataFolder
  - ISldWorks.GetDocumentDependencies2
  - ISldWorks.GetFirstDocument
  - ISldWorks.GetOpenDocument
  - ISldWorks.GetOpenDocumentByName
  - ISldWorks.GetOpenFileName
  - ISldWorks.GetOpenedFileInfo
  - ISldWorks.GetRecentFiles
  - ISldWorks.ICopyDocument
  - ISldWorks.IGetDocumentDependencies2
  - ISldWorks.IGetFirstDocument2
  - ISldWorks.IGetOpenDocumentByName2
  - ISldWorks.IMoveDocument
  - ISldWorks.IsBackgroundProcessingCompleted
  - ISldWorks.PreviewDoc
  - ISldWorks.PreviewDocx64
  - ISldWorks.QuitDoc
  - ISldWorks.SetPromptFilename
keywords:
  - document
  - open
  - parents
  - documents
  - opendoc6
  - isldworks
  - sld
  - works
  - doc6
  - file
  - name
  - string
  - type
  - int32
  - options
  - configuration
  - errors
  - warnings
  - model
  - doc2
  - add
  - component
  - mate
  - vba
  - silently
  - assembly
  - large
  - design
  - review
  - mode
  - vb
  - net
  - switch
---

# ISldWorks.OpenDoc6

Opens an existing document and returns a pointer to the document object.

## Signature

```csharp
ModelDoc2 OpenDoc6( 
   System.String
FileName
,
   System.Int32
Type
,
   System.Int32
Options
,
   System.String
Configuration
,
   out System.Int32
Errors
,
   out System.Int32
Warnings
)
```
## Parameters

- `FileName` (System.String): Document name or full path if not in current directory, including extension
- `Type` (System.Int32): Document type as defined in swDocumentTypes_e
- `Options` (System.Int32): Mode in which to open the document as defined in swOpenDocOptions_e
- `Configuration` (System.String): Model configuration in which to open this document Applies to parts and assemblies, not drawings If this argument is empty or the specified configuration is not present in the model, the model is opened in the last-used configuration
- `Errors` (System.Int32): Load errors as defined in swFileLoadError_e ( See Remarks )
- `Warnings` (System.Int32): Warnings or extra information generated during the open operation as defined in swFileLoadWarning_e

## Return Value

Newly loaded model document or NULL if document failed to open

## Remarks

As of SOLIDWORKS 2020 SP03.1, SOLIDWORKS Design works on the
3D
EXPERIENCE platform as
SOLIDWORKS Design Augmented
. Use
ISldWorks::OpenDoc7
to open documents with SOLIDWORKS Design Augmented.
As of SOLIDWORKS 2012 SP5, loading future file versions is supported, and
ISldWorks::OpenDoc6
no longer throws a
swFileLoadError_e
.swFutureVersion error. Use
IModelDocExtension::IsFutureVersion
to determine whether a component is for a future version of SOLIDWORKS.
As of SOLIDWORKS 2008,
ISldWorks::OpenDoc7
performs the same work as this method, but also:
Allows you to open a document with a specified display state.
Uses
IDocumentSpecification
to specify input parameters.
This method also allows control over whether to:
Suppress displaying dialog boxes
Open the document read-only
Open the document in Large Design Review mode
Convert a drawing to a detached drawing
When opening a parent document (assembly, drawing, and so on):
SOLIDWORKS Design also opens any additional documents that are referenced in the parent document (parts, subassemblies, and so on).
SOLIDWORKS Design follows certain rules in trying to locate its referenced documents. If explicit Search Folders have not been set using
Tools, Options, System Options, ExternalReferences
, then the first place SOLIDWORKS Design looks for the referenced documents is in the current working directory. If SOLIDWORKS Design finds the referenced file in the current working directory, then it is loaded from that directory.
Calling ISldWorks::OpenDoc6 does not change the current working directory to that of the opened file, whereas, interactively using the File Open dialog box does. This may affect documents with references.
Because the user may have interactively opened files from some random directory, you cannot be certain that the current working directory is pointing to the desired location. This may affect the referenced documents that ultimately get loaded when using ISldWorks::OpenDoc6 versus performing File Open interactively. You may want to set the current working directory before calling ISldWorks::OpenDoc6. This can be done using the
ISldWorks::SetCurrentWorkingDirectory
method. To mimic the behavior of the File Open dialog, you set the current working directory to that of the file being opened.
When opening files that contain references, you may also want to consider the current Search Folder settings because they may affect the references that ultimately get loaded. This can be done using
ISldWorks::GetSearchFolders
and
ISldWorks::SetSearchFolders
. If Search Folders are currently in use, SOLIDWORKS Design looks for references in the Search Folders before trying to locate references in the current working directory.
If this method successfully opens an assembly, it still returns swFileLoadError_e.swFileNotFoundError in Errors if a referenced component file cannot be located.
ISldWorks::OpenDoc6 does not activate and display the document if the file is already open in memory in an assembly or drawing. However, ISldWorks::OpenDoc6 should return a valid
IModelDoc2
pointer that is usable with functions that do not require a document to be displayed. If you want,
ISldWorks::ActivateDoc2
or
ISldWorks::IActivateDoc3
will activate and display the document. Because calling ISldWorks::OpenDoc6 does not activate nor display the file, calling the
ISldWorks::ActiveDoc
or
ISldWorks::IActiveDoc2
property will not return a pointer to this document.
This method fires the the SOLIDWORKS event
FileOpenNotify2
event. Also, the SOLIDWORKS event
ActiveDocChangeNotify
and
ActiveModelDocChangeNotify
events are sent if the file being loaded is not already open as the active document.
TIPS
To...
Then...
Open an assembly in Large Design Review mode
Set the Options argument to swOpenDocOptions_LDR_EditAssembly. This option opens large assemblies in edit mode without actually loading them. This is useful for conducting a quick walk-through of a large assembly. Call
IAssemblyDoc::SelectiveOpen
to open selected components after an assembly has been opened in Large Design Review mode.
Avoid warnings when opening the document
Set the Options argument to swOpenDocOptions_Silent. The software uses the last-displayed configuration if it discovers missing configurations or component references.
Open a library feature part
Set the Type argument to swDocPART.
Open foreign files (IGES, STEP, and so on)
Use
ISldWorks::LoadFile4
.
Avoid a warning when opening shaded models in views
Set the Options argument to swOpenDocOptions_LoadModel. This option loads the model so that the view comes in shaded automatically.
Avoid large increases in memory usage caused when adding parts to assemblies
Opening a model causes SceneGraph to display the model. SceneGraph uses maps with defaults sizes of 2MB - 3MB for even the simplest model. And, assemblies and parts do not share the same SceneGraph buffer. To avoid large increases in your memory usage:
Set the document to invisible.
Open the parts.
Set the document to visible.
Add the part to the assembly.
See
ISldWorks::DocumentVisible
for details.
Open a document with a specified display state
Use ISldWorks::OpenDoc7.
A warning is displayed if you
open a Detached drawing
without loading the model, and the model was saved since the drawing was last saved.
This method honors:
ISldWorks::GetUserPreferenceToggle
swLargeAsmModeEnabled
- and -
ISldWorks::SetUserPreferenceToggle
swLargeAsmModeEnabled, true/false (NOTE: if this toggle is set to true, then the file opens in lightweight mode)

## Examples

- Add Component and Mate (C++) (Add_Component_and_Mate_Example_CPlusPlus_COM.htm)
- Open Document (VBA) (Open_Document_Example_VB.htm)
- Open Document Silently (VBA) (Open_Document_Silently_Example_VB.htm)
- Open Assembly in Large Design Review Mode (VBA) (Open_Assembly_in_Large_Design_Review_Mode_Example_VB.htm)
- Open Assembly in Large Design Review Mode (VB.NET) (Open_Assembly_in_Large_Design_Review_Mode_Example_VBNET.htm)
- Open Assembly in Large Design Review Mode (C#) (Open_Assembly_in_Large_Design_Review_Mode_Example_CSharp.htm)
- Switch Documents (C#) (Switch_Documents_Example_CSharp.htm)
- Switch Documents (VB.NET) (Switch_Documents_Example_VBNET.htm)
- Switch Documents (VBA) (Switch_Documents_Example_VB.htm)

## See Also

- `ISldWorks.CloseAllDocuments`
- `ISldWorks.CloseDoc`
- `ISldWorks.CopyDocument`
- `ISldWorks.EnableBackgroundProcessing`
- `ISldWorks.EnumDocuments2`
- `ISldWorks.GetCurrentWorkingDirectory`
- `ISldWorks.GetDataFolder`
- `ISldWorks.GetDocumentDependencies2`
- `ISldWorks.GetFirstDocument`
- `ISldWorks.GetOpenDocument`
- `ISldWorks.GetOpenDocumentByName`
- `ISldWorks.GetOpenFileName`
- `ISldWorks.GetOpenedFileInfo`
- `ISldWorks.GetRecentFiles`
- `ISldWorks.ICopyDocument`
- `ISldWorks.IGetDocumentDependencies2`
- `ISldWorks.IGetFirstDocument2`
- `ISldWorks.IGetOpenDocumentByName2`
- `ISldWorks.IMoveDocument`
- `ISldWorks.IsBackgroundProcessingCompleted`
- `ISldWorks.PreviewDoc`
- `ISldWorks.PreviewDocx64`
- `ISldWorks.QuitDoc`
- `ISldWorks.SetPromptFilename`