---
type: method
interface: ISldWorks
member: OpenDoc7
returns: ModelDoc2
parameters:
  -
    name: Specification
    type: System.Object
    description: Document specification
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
  - opendoc7
  - isldworks
  - sld
  - works
  - doc7
  - specification
  - object
  - model
  - doc2
  - hide
  - all
  - edges
  - drawing
  - vba
  - read
  - only
  - whether
  - components
  - are
  - loaded
  - vb
  - net
  - assembly
---

# ISldWorks.OpenDoc7

Opens an existing document and returns a pointer to the document object.

## Signature

```csharp
ModelDoc2 OpenDoc7( 
   System.Object
Specification
)
```
## Parameters

- `Specification` (System.Object): Document specification

## Return Value

Document

## Remarks

As of SOLIDWORKS 2020 SP03.1, SOLIDWORKS Design can run on the
3D
EXPERIENCE platform as
SOLIDWORKS Design Augmented
. While running SOLIDWORKS Design Augmented, this method can be called to either import local SOLIDWORKS documents or open
3D
EXPERIENCE documents. Inspect the Remarks section on each property of IDocumentSpecification to see whether it can be used to open a
3D
EXPERIENCE platform document. Also see
IDocumentSpecifiation::PLMObjectSpecification
.
The following remarks apply primarily to SOLIDWORKS Design.
When opening a parent document (assembly, drawing, and so on):
SOLIDWORKS Design also opens any additional documents that are referenced in the parent document (parts, subassemblies, and so on).
SOLIDWORKS Design follows certain rules in trying to locate its referenced documents. If explicit Search Folders have not been set using
Tools, Options, System Options, ExternalReferences
, then the first place SOLIDWORKS Design looks for the referenced documents is in the current working directory. If SOLIDWORKS Design finds the referenced file in the current working directory, then it is loaded from that directory.
Calling ISldWorks::OpenDoc7 does not change the current working directory to that of the opened file, whereas, interactively using the File Open dialog box does. This may affect documents with references.
Because the user may have interactively opened files from some random directory, you cannot be certain that the current working directory is pointing to the desired location. This may affect the referenced documents that ultimately get loaded when using ISldWorks::OpenDoc7 versus performing File Open interactively. You may want to set the current working directory before calling ISldWorks::OpenDoc7. This can be done using the
ISldWorks::SetCurrentWorkingDirectory
method. To mimic the behavior of the File Open dialog, you set the current working directory to that of the file being opened.
When opening files that contain references, you may also want to consider the current Search Folder settings because they may affect the references that ultimately get loaded. This can be done using
ISldWorks::GetSearchFolders
and
ISldWorks::SetSearchFolders
. If Search Folders are currently in use, SOLIDWORKS looks for references in the Search Folders before trying to locate references in the current working directory.
ISldWorks::OpenDoc7 does not activate and display the document if the file is already open in memory in an assembly or drawing. However, ISldWorks::OpenDoc7 should return a valid
IModelDoc2
pointer that is usable with functions that do not require a document to be displayed. If you want,
ISldWorks::ActivateDoc2
or
ISldWorks::IActivateDoc3
will activate and display the document. Because calling ISldWorks::OpenDoc7 does not activate nor display the file, calling the
ISldWorks::ActiveDoc
or
ISldWorks::IActiveDoc2
property will not return a pointer to this document.
This method fires the SOLIDWORKS event
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
Set
IDocumentSpecification::ViewOnly
to true. This option displays large assemblies without actually loading them. This is useful for conducting a quick walk-through of a large assembly. Call
IAssemblyDoc::SelectiveOpen
to open selected components after an assembly has been opened in Large Design Review mode.
Avoid warnings when opening the document
Set
IDocumentSpecification::Silent
to true. The software uses the last-displayed configuration if it discovers missing configurations or component references.
Open a library feature part
Set
IDocumentSpecification::DocumentType
to
swDocumentTypes_e
.swDocPART.
Open foreign files (IGES, STEP, and so on)
Use
ISldWorks::LoadFile4
.
Avoid a warning when opening shaded models in views
Set
IDocumentSpecification::LoadModel
to true. This option loads the model so that the view comes in shaded automatically.
Avoid large increases in memory usage caused when adding parts to assemblies
Opening a model causes SceneGraph to display the model. SceneGraph uses maps with defaults sizes of 2MB - 3MB for even the simplest model. And, assemblies and parts do not share the same SceneGraph buffer. To avoid large increases in your memory usage:
Set the document to invisible.
Open the parts.
Set the document to visible.
Add the part to the assembly.
See
ISldWorks::DocumentVisible
for details.
To open a document without a specified display state
Use
ISldWorks::OpenDoc6
.
A warning is displayed if you
open a Detached drawing
without loading the model, and the model was saved since the drawing was last saved.
This method honors:
ISldWorks::GetUserPreferenceToggle
swLargeAsmModeEnabled
- and -
ISldWorks::SetUserPreferenceToggle
swLargeAsmModeEnabled, true/false (NOTE: if this toggle is set to true, then the document opens in lightweight mode)

## Examples

- Hide All Edges in Drawing (VBA) (Hide_All_Edges_in_Drawing_View_Example_VB.htm)
- Open Drawing Document Read-only (VBA) (Open_Drawing_Document_Read-only_Example_VB.htm)
- Get Whether Components Are Loaded (C#) (Get_Whether_Components_Are_Loaded_Example_CSharp.htm)
- Get Whether Components Are Loaded (VB.NET) (Get_Whether_Components_Are_Loaded_Example_VBNET.htm)
- Get Whether Components Are Loaded (VBA) (Get_Whether_Components_Are_Loaded_Example_VB.htm)
- Open Assembly Document (C#) (Open_Assembly_Document_Example_CSharp.htm)
- Open Assembly Document (VB.NET) (Open_Assembly_Document_Example_VBNET.htm)
- Open Assembly Document (VBA) (Open_Assembly_Document_Example_VB.htm)

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