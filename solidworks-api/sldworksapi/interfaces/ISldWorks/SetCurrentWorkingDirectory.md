---
type: method
interface: ISldWorks
member: SetCurrentWorkingDirectory
returns: System.Boolean
parameters:
  -
    name: CurrentWorkingDirectory
    type: System.String
    description: Directory to set as the current working directory
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.GetCurrentMacroPathFolder
  - ISldWorks.GetCurrentMacroPathName
  - ISldWorks.GetCurrentWorkingDirectory
  - ISldWorks.GetExecutablePath
keywords:
  - external
  - references
  - file
  - management
  - solidworks
  - directory
  - setcurrentworkingdirectory
  - isldworks
  - sld
  - works
  - current
  - working
  - string
  - boolean
  - open
  - document
  - vba
  - vb
  - net
---

# ISldWorks.SetCurrentWorkingDirectory

Sets the current working directory to be used by SOLIDWORKS.

## Signature

```csharp
System.Boolean SetCurrentWorkingDirectory( 
   System.String
CurrentWorkingDirectory
)
```
## Parameters

- `CurrentWorkingDirectory` (System.String): Directory to set as the current working directory

## Return Value

True if specified direction is set as the current working directory, false if not

## Remarks

The current working directory is used when opening documents containing references. If explicit search folders are not set (see
ISldWorks::SetSearchFolders
), then SOLIDWORKS will initially try to locate file references (for example, assembly component parts) in the current working directory. Interactively, the current working directory is used by the File Open dialog and is set when you choose the Open dialog button.
The
ISldWorks::OpenDoc6
method does not set the current working directory. Therefore, you may want to set the current working directory using ISldWorks::SetCurrentWorkingDirectory before opening a file that contains references. By doing so, you will get the same behavior as if the file was opened interactively using the File Open dialog.
For more information on the search criteria used by SOLIDWORKS when loading file references, see SOLIDWORKS Help.

## Examples

- Open Document (VBA) (Open_Document_Example_VB.htm)
- Open Document (VB.NET) (Open_Document_Example_VBNET.htm)
- Open Document (C#) (Open_Document_Example_CSharp.htm)

## See Also

- `ISldWorks.GetCurrentMacroPathFolder`
- `ISldWorks.GetCurrentMacroPathName`
- `ISldWorks.GetCurrentWorkingDirectory`
- `ISldWorks.GetExecutablePath`